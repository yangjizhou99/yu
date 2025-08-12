import React, { useEffect, useRef, useState } from "react";

// —— Fish Pond Mini-Game ————————————————————————————
// 基础：加鱼、点击投喂、视野内寻食、每吃增长（乘法）。
// S1：localStorage 持久化（刷新不丢）。
// S2：多样饲料（普通/罕见/稀有），长期平均每颗≈+2%。
// S3：🎨自定义绘制宠物鱼（受限画布 + 命名 + 存档 v3）。

// ====== 可调参数 ======
const BASE_FISH_SIZE = 18;
const FISH_SPEED_MIN = 55;
const FISH_SPEED_MAX = 90;
const FISH_TURN_SMOOTH = 0.08;
const FISH_VISION = 160;
const EAT_RADIUS = 14;
const MAX_FISH_COUNT = 60;

// —— 饲料（长期期望≈+2%） ——
type FoodKind = "common" | "uncommon" | "rare";
const FOOD_VARIANTS = [
  { kind: "common" as FoodKind,   prob: 0.70, growPct: 0.01, radius: 5 },
  { kind: "uncommon" as FoodKind, prob: 0.25, growPct: 0.03, radius: 6 },
  { kind: "rare" as FoodKind,     prob: 0.05, growPct: 0.11, radius: 7 },
];

// —— 存档（升级到 v3） ——
const STORAGE_KEY_V3 = "fish-pond-save-v3";
type SaveDataV3 = {
  version: 3;
  nextId: number;
  fish: Fish[];
  food: Food[];
  savedAt: string;
};
type SaveDataV2 = {
  version: 2;
  nextId: number;
  fish: Omit<Fish, "ownerName" | "petName" | "textureDataUrl">[];
  food: { id: number; x: number; y: number; r: number; kind: FoodKind; growPct: number }[];
  savedAt: string;
};
type SaveDataV1 = {
  version: 1;
  nextId: number;
  fish: Omit<Fish, "ownerName" | "petName" | "textureDataUrl" | "vision" | "targetFoodId" | "wanderT">[] & any;
  food: { id: number; x: number; y: number; r: number }[];
  savedAt: string;
};

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
function pickFoodVariant() {
  const r = Math.random();
  let acc = 0;
  for (const v of FOOD_VARIANTS) {
    acc += v.prob;
    if (r <= acc) return v;
  }
  return FOOD_VARIANTS[FOOD_VARIANTS.length - 1];
}

// ====== 类型 ======
interface Food {
  id: number;
  x: number;
  y: number;
  r: number;
  kind: FoodKind;
  growPct: number;
}

interface Fish {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  sizeScale: number;
  color: string;
  vision: number;
  targetFoodId: number | null;
  wanderT: number;
  ownerName?: string;       // v3+
  petName?: string;         // v3+
  textureDataUrl?: string;  // v3+ 贴图（小图 dataURL）
}

// 运行时纹理缓存（不进存档）
type TexCache = Map<number, HTMLImageElement>;

function randomFishColor() {
  const hues = [195, 205, 215, 165, 180, 200, 30, 350];
  const h = hues[Math.floor(Math.random() * hues.length)];
  const s = Math.floor(rand(55, 85));
  const l = Math.floor(rand(45, 65));
  return `hsl(${h} ${s}% ${l}%)`;
}
function dist(ax: number, ay: number, bx: number, by: number) {
  const dx = bx - ax, dy = by - ay;
  return Math.hypot(dx, dy);
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// 星形（用于稀有饲料）
function drawStar(ctx: CanvasRenderingContext2D, spikes: number, outerR: number, innerR: number) {
  const step = Math.PI / spikes;
  ctx.beginPath();
  ctx.rotate(-Math.PI / 2);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(Math.cos(i * 2 * step) * outerR, Math.sin(i * 2 * step) * outerR);
    ctx.lineTo(Math.cos((i * 2 + 1) * step) * innerR, Math.sin((i * 2 + 1) * step) * innerR);
  }
  ctx.closePath();
  ctx.rotate(Math.PI / 2);
}

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fishCount, setFishCount] = useState(0);
  const [foodCount, setFoodCount] = useState(0);

  const fishRef = useRef<Fish[]>([]);
  const foodRef = useRef<Food[]>([]);
  const nextIdRef = useRef(1);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // 纹理缓存：Fish.id -> Image
  const texCacheRef = useRef<TexCache>(new Map());

  // 存档：脏标记 + 节流保存
  const dirtyRef = useRef(false);
  const saveTimerRef = useRef<number | null>(null);
  function saveToStorage() {
    const data: SaveDataV3 = {
      version: 3,
      nextId: nextIdRef.current,
      fish: fishRef.current,
      food: foodRef.current,
      savedAt: new Date().toISOString(),
    };
    try { localStorage.setItem(STORAGE_KEY_V3, JSON.stringify(data)); } catch {}
  }
  function scheduleSave(throttleMs = 800) {
    dirtyRef.current = true;
    if (saveTimerRef.current != null) return;
    saveTimerRef.current = window.setTimeout(() => {
      saveTimerRef.current = null;
      if (dirtyRef.current) {
        saveToStorage();
        dirtyRef.current = false;
      }
    }, throttleMs);
  }

  // 迁移 v2 -> v3
  function migrateV2toV3(v2: SaveDataV2): SaveDataV3 {
    return {
      version: 3,
      nextId: Math.max(1, v2.nextId ?? 1),
      fish: (v2.fish ?? []).map(f => ({
        ...f,
        ownerName: undefined,
        petName: undefined,
        textureDataUrl: undefined,
      })) as Fish[],
      food: v2.food ?? [],
      savedAt: v2.savedAt ?? new Date().toISOString(),
    };
  }
  // 迁移 v1 -> v2（简化：旧饲料=普通+1%），再 v2->v3
  function migrateV1toV3(v1: SaveDataV1): SaveDataV3 {
    const v2: SaveDataV2 = {
      version: 2,
      nextId: Math.max(1, v1.nextId ?? 1),
      fish: v1.fish ?? [],
      food: (v1.food ?? []).map(fd => ({
        id: fd.id, x: fd.x, y: fd.y, r: fd.r, kind: "common" as FoodKind, growPct: 0.01,
      })),
      savedAt: v1.savedAt ?? new Date().toISOString(),
    };
    return migrateV2toV3(v2);
  }

  function loadFromStorage(): SaveDataV3 | null {
    try {
      const rawV3 = localStorage.getItem(STORAGE_KEY_V3);
      if (rawV3) {
        const d3 = JSON.parse(rawV3) as SaveDataV3;
        if (d3 && d3.version === 3) return d3;
      }
      const rawV2 = localStorage.getItem("fish-pond-save-v2");
      if (rawV2) {
        const d2 = JSON.parse(rawV2) as SaveDataV2;
        if (d2 && d2.version === 2) return migrateV2toV3(d2);
      }
      const rawV1 = localStorage.getItem("fish-pond-save-v1");
      if (rawV1) {
        const d1 = JSON.parse(rawV1) as SaveDataV1;
        if (d1 && d1.version === 1) return migrateV1toV3(d1);
      }
      return null;
    } catch { return null; }
  }

  function resizeCanvas() {
    const cvs = canvasRef.current!, parent = containerRef.current!;
    const rect = parent.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    cvs.width = Math.max(320, Math.floor(rect.width * dpr));
    cvs.height = Math.max(220, Math.floor(rect.height * dpr));
    cvs.style.width = `${Math.max(320, Math.floor(rect.width))}px`;
    cvs.style.height = `${Math.max(220, Math.floor(rect.height))}px`;
    const ctx = cvs.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  useEffect(() => {
    const ro = new ResizeObserver(resizeCanvas);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // 加载存档 + 纹理缓存
  useEffect(() => {
    resizeCanvas();
    const data = loadFromStorage();
    if (data) {
      fishRef.current = data.fish ?? [];
      foodRef.current = data.food ?? [];
      nextIdRef.current = Math.max(1, data.nextId ?? 1);
      setFishCount(fishRef.current.length);
      setFoodCount(foodRef.current.length);
      // 恢复纹理
      for (const f of fishRef.current) {
        if (f.textureDataUrl) {
          const img = new Image();
          img.src = f.textureDataUrl;
          texCacheRef.current.set(f.id, img);
        }
      }
    }
  }, []);

  // 离开/隐藏时保存
  useEffect(() => {
    const onBeforeUnload = () => saveToStorage();
    const onVisibility = () => { if (document.visibilityState === "hidden") saveToStorage(); };
    window.addEventListener("beforeunload", onBeforeUnload);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // 添加“普通”随机鱼（保留原有按钮）
  function addFish() {
    if (fishRef.current.length >= MAX_FISH_COUNT) return;
    const cvs = canvasRef.current!;
    const w = parseInt(cvs.style.width || "800", 10);
    const h = parseInt(cvs.style.height || "500", 10);
    const angle = rand(0, Math.PI * 2);
    const spd = rand(FISH_SPEED_MIN, FISH_SPEED_MAX);
    const id = nextIdRef.current++;
    const f: Fish = {
      id,
      x: rand(40, w - 40),
      y: rand(40, h - 40),
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      speed: spd,
      sizeScale: rand(0.9, 1.2),
      color: randomFishColor(),
      vision: FISH_VISION,
      targetFoodId: null,
      wanderT: rand(0, 1000),
    };
    fishRef.current.push(f);
    setFishCount(fishRef.current.length);
    scheduleSave();
  }

  // 点击投喂
  function onCanvasClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const v = pickFoodVariant();
    const id = nextIdRef.current++;
    foodRef.current.push({ id, x, y, r: v.radius, kind: v.kind, growPct: v.growPct });
    setFoodCount(foodRef.current.length);
    scheduleSave();
  }

  function clearSaveAndReset() {
    try { localStorage.removeItem(STORAGE_KEY_V3); } catch {}
    fishRef.current = []; foodRef.current = []; nextIdRef.current = 1;
    setFishCount(0); setFoodCount(0);
    texCacheRef.current.clear();
    scheduleSave();
  }

  // —— 绘制面板（受限画布）打开/关闭 —— //
  const [designerOpen, setDesignerOpen] = useState(false);
  function openDesigner() { setDesignerOpen(true); }
  function closeDesigner() { setDesignerOpen(false); }

  // 主循环
  useEffect(() => {
    const cvs = canvasRef.current!, ctx = cvs.getContext("2d")!;
    resizeCanvas();

    const step = (t: number) => {
      // —— 复位画布状态（防上次绘制残留影响） ——
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      const now = t / 1000;
      const last = lastTimeRef.current ?? now;
      const dt = clamp(now - last, 0, 0.05);
      lastTimeRef.current = now;

      const w = parseInt(cvs.style.width || "800", 10);
      const h = parseInt(cvs.style.height || "500", 10);

      // 背景
      const grd = ctx.createLinearGradient(0, 0, 0, h);
      grd.addColorStop(0, "#e6f7ff");
      grd.addColorStop(1, "#cdeffd");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // 水纹（这里修正：ellipse 需要 7 个参数，补上 startAngle=0）
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < 3; i++) {
        const y0 = (now * 12 + i * 60) % (h + 60) - 60;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.ellipse(w * 0.5, y0, w * 0.55, 18, 0, 0, Math.PI * 2); // ✅ 修复：7 参数
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // 饲料
      for (const fd of foodRef.current) drawFood(ctx, fd, now);

      // —— 更新鱼逻辑 —— //
      const foods = foodRef.current;
      let ateSomething = false;

      for (const f of fishRef.current) {
        // 最近可见食物
        let target: Food | null = null, dMin = Infinity;
        for (const fd of foods) {
          const d = dist(f.x, f.y, fd.x, fd.y);
          if (d < f.vision && d < dMin) { dMin = d; target = fd; }
        }
        // 速度决策
        let dvx = f.vx, dvy = f.vy;
        if (target) {
          const dx = target.x - f.x, dy = target.y - f.y, len = Math.hypot(dx, dy) || 1;
          dvx = (dx / len) * f.speed; dvy = (dy / len) * f.speed;
        } else {
          f.wanderT += dt;
          const wobble = Math.sin(f.wanderT * 1.8 + f.id * 1.37) * 0.6;
          const curLen = Math.hypot(f.vx, f.vy) || 1;
          let vx = f.vx / curLen, vy = f.vy / curLen;
          const nx = -vy, ny = vx;
          vx = vx + nx * wobble * 0.25;
          vy = vy + ny * wobble * 0.25;
          const len2 = Math.hypot(vx, vy) || 1;
          dvx = (vx / len2) * f.speed; dvy = (vy / len2) * f.speed;
        }
        f.vx = lerp(f.vx, dvx, FISH_TURN_SMOOTH);
        f.vy = lerp(f.vy, dvy, FISH_TURN_SMOOTH);
        f.x += f.vx * dt; f.y += f.vy * dt;

        // 边界
        const margin = 14 * f.sizeScale;
        if (f.x < margin) { f.x = margin; f.vx = Math.abs(f.vx); }
        else if (f.x > w - margin) { f.x = w - margin; f.vx = -Math.abs(f.vx); }
        if (f.y < margin) { f.y = margin; f.vy = Math.abs(f.vy); }
        else if (f.y > h - margin) { f.y = h - margin; f.vy = -Math.abs(f.vy); }

        // 吃饭
        const eatR = (EAT_RADIUS * f.sizeScale);
        for (let i = foods.length - 1; i >= 0; i--) {
          const fd = foods[i];
          if (dist(f.x, f.y, fd.x, fd.y) <= eatR + fd.r) {
            foods.splice(i, 1);
            f.sizeScale *= (1 + fd.growPct);
            ateSomething = true;
          }
        }
      }
      if (ateSomething) scheduleSave();
      setFoodCount(foods.length);

      // —— 绘制鱼 —— //
      for (const f of fishRef.current) {
        const angle = Math.atan2(f.vy, f.vx);
        const base = BASE_FISH_SIZE * f.sizeScale;

        // 鱼体
        const bodyLen = base * 1.6;
        const bodyH = base * 0.9;
        const tailWobble = Math.sin((now + f.id) * 8) * (base * 0.22);

        // 身体 + 自定义贴图（若有）
        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(angle);

        // 身体椭圆形状
        const rx = bodyLen * 0.45, ry = bodyH * 0.55;

        // 背景填充（若无贴图）
        if (!f.textureDataUrl || !texCacheRef.current.get(f.id)) {
          const grdBody = ctx.createLinearGradient(0, -bodyH, 0, bodyH);
          grdBody.addColorStop(0, "rgba(255,255,255,0.9)");
          grdBody.addColorStop(1, f.color);
          ctx.fillStyle = grdBody;
          ctx.beginPath();
          ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // 贴图
          const img = texCacheRef.current.get(f.id)!;
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
          ctx.clip();
          // 等比填充至椭圆外接矩形
          const targetW = rx * 2, targetH = ry * 2;
          const scale = Math.max(targetW / img.width, targetH / img.height);
          const dw = img.width * scale, dh = img.height * scale;
          ctx.drawImage(img, -dw / 2, -dh / 2, dw, dh);
          ctx.restore();
        }

        // 头部（三角）
        ctx.fillStyle = f.color;
        ctx.beginPath();
        ctx.moveTo(bodyLen * 0.5, 0);
        ctx.lineTo(bodyLen * 0.16, -bodyH * 0.42);
        ctx.lineTo(bodyLen * 0.16, bodyH * 0.42);
        ctx.closePath();
        ctx.fill();

        // 尾巴
        ctx.beginPath();
        ctx.moveTo(-bodyLen * 0.45, 0);
        ctx.lineTo(-bodyLen * 0.65, -bodyH * 0.35 + tailWobble);
        ctx.lineTo(-bodyLen * 0.65, bodyH * 0.35 - tailWobble);
        ctx.closePath();
        ctx.fill();

        // 眼睛
        ctx.fillStyle = "#0b1b2b";
        ctx.beginPath();
        ctx.arc(bodyLen * 0.28, -bodyH * 0.12, Math.max(1.5, base * 0.07), 0, Math.PI * 2);
        ctx.fill();

        // 视野圈（Alt+V）
        if ((window as any).__showVision) {
          ctx.strokeStyle = "rgba(0,0,0,0.08)";
          ctx.setLineDash([6, 6]);
          ctx.beginPath();
          ctx.arc(0, 0, f.vision, 0, Math.PI * 2); // 用 arc 也更稳
          ctx.stroke();
          ctx.setLineDash([]);
        }

        ctx.restore();

        // 名字（不旋转）
        if (f.petName) {
          ctx.save();
          ctx.font = "10px system-ui, -apple-system, Segoe UI, Roboto, sans-serif";
          ctx.fillStyle = "rgba(0,0,0,0.72)";
          ctx.textAlign = "center";
          ctx.fillText(f.petName, f.x, f.y - base * 1.2);
          ctx.restore();
        }
      }

      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  // Alt+V 切换视野圈
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "v" && e.altKey) {
        (window as any).__showVision = !(window as any).__showVision;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // —— 绘制不同稀有度饲料 —— //
  function drawFood(ctx: CanvasRenderingContext2D, fd: Food, now: number) {
    if (fd.kind === "common") {
      ctx.fillStyle = "#8b5e3c";
      ctx.beginPath(); ctx.arc(fd.x, fd.y, fd.r, 0, Math.PI * 2); ctx.fill();
      return;
    }
    if (fd.kind === "uncommon") {
      const pulse = 0.5 + 0.5 * Math.sin(now * 4 + fd.id);
      ctx.save();
      ctx.globalAlpha = 0.35 + 0.35 * pulse;
      ctx.strokeStyle = "rgba(55, 199, 212, 0.8)";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(fd.x, fd.y, fd.r + 4 + pulse * 2, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();

      const grd = ctx.createRadialGradient(fd.x, fd.y, 0, fd.x, fd.y, fd.r + 1);
      grd.addColorStop(0, "#8ef3ff");
      grd.addColorStop(1, "#37c7d4");
      ctx.fillStyle = grd;
      ctx.beginPath(); ctx.arc(fd.x, fd.y, fd.r, 0, Math.PI * 2); ctx.fill();
      return;
    }
    // 稀有：金色星形 + 光晕
    const twinkle = 0.6 + 0.4 * Math.sin(now * 6 + fd.id);
    ctx.save();
    const glowR = fd.r + 7 + twinkle * 3;
    const glow = ctx.createRadialGradient(fd.x, fd.y, 0, fd.x, fd.y, glowR);
    glow.addColorStop(0, "rgba(255,215,0,0.9)");
    glow.addColorStop(1, "rgba(255,215,0,0.05)");
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(fd.x, fd.y, glowR, 0, Math.PI * 2); ctx.fill();

    ctx.translate(fd.x, fd.y);
    ctx.rotate((Math.PI / 6) * twinkle);
    ctx.fillStyle = "#ffd700";
    drawStar(ctx, 5, fd.r + 2, Math.max(2, fd.r - 2));
    ctx.fill();
    ctx.restore();
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="text-xl font-semibold">🐟 小鱼塘 Mini-Game</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={addFish}
            className="px-3 py-1.5 rounded-2xl shadow-sm bg-sky-500 text-white hover:bg-sky-600 active:scale-[0.98]"
            title="添加一条随机鱼"
          >+1 条鱼</button>

          <button
            onClick={openDesigner}
            className="px-3 py-1.5 rounded-2xl shadow-sm bg-violet-500 text-white hover:bg-violet-600 active:scale-[0.98]"
            title="自定义绘制新鱼"
          >🎨 自定义新鱼</button>

          <button
            onClick={() => { fishRef.current = []; setFishCount(0); scheduleSave(); }}
            className="px-3 py-1.5 rounded-2xl shadow-sm bg-slate-200 hover:bg-slate-300"
          >清空鱼</button>

          <button
            onClick={() => { foodRef.current = []; setFoodCount(0); scheduleSave(); }}
            className="px-3 py-1.5 rounded-2xl shadow-sm bg-amber-200 hover:bg-amber-300"
          >清空饲料</button>

          <button
            onClick={clearSaveAndReset}
            className="px-3 py-1.5 rounded-2xl shadow-sm bg-rose-200 hover:bg-rose-300"
          >清空存档</button>
        </div>
      </div>

      <div className="text-sm text-slate-600 mb-2">
        点击水面投喂；鱼吃到饲料体型增长（长期平均≈每颗+2%）。Alt+V 显示视野圈。
        <span className="ml-2">鱼：{fishCount}</span>
        <span className="ml-3">饲料：{foodCount}</span>
      </div>

      <div ref={containerRef} className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-inner bg-sky-50 border border-sky-100">
        <canvas ref={canvasRef} onClick={onCanvasClick} className="w-full h-full cursor-crosshair" />
      </div>

      {designerOpen && (
        <FishDesigner
          onCancel={closeDesigner}
          onCreate={(ownerName, petName, dataUrl) => {
            if (fishRef.current.length >= MAX_FISH_COUNT) { closeDesigner(); return; }
            const cvs = canvasRef.current!;
            const w = parseInt(cvs.style.width || "800", 10);
            const h = parseInt(cvs.style.height || "500", 10);
            const angle = rand(0, Math.PI * 2);
            const spd = rand(FISH_SPEED_MIN, FISH_SPEED_MAX);
            const id = nextIdRef.current++;

            const fish: Fish = {
              id,
              x: rand(40, w - 40),
              y: rand(40, h - 40),
              vx: Math.cos(angle) * spd,
              vy: Math.sin(angle) * spd,
              speed: spd,
              sizeScale: 1.0,
              color: randomFishColor(),
              vision: FISH_VISION,
              targetFoodId: null,
              wanderT: rand(0, 1000),
              ownerName, petName,
              textureDataUrl: dataUrl,
            };
            fishRef.current.push(fish);
            setFishCount(fishRef.current.length);

            // 放入纹理缓存
            if (dataUrl) {
              const img = new Image();
              img.src = dataUrl;
              texCacheRef.current.set(id, img);
            }
            scheduleSave();
            closeDesigner();
          }}
        />
      )}
    </div>
  );
}

// ============== 绘制面板组件（受限椭圆） ==============
function FishDesigner({
  onCancel,
  onCreate,
}: {
  onCancel: () => void;
  onCreate: (ownerName: string, petName: string, dataUrl: string) => void;
}) {
  const drawRef = useRef<HTMLCanvasElement | null>(null);
  const [brushColor, setBrushColor] = useState<string>("#ff6b6b");
  const [brushSize, setBrushSize] = useState<number>(8);
  const [isEraser, setIsEraser] = useState<boolean>(false);
  const [ownerName, setOwnerName] = useState<string>("");
  const [petName, setPetName] = useState<string>("");

  // 画布尺寸（CSS）
  const CSS_W = 360, CSS_H = 200;

  // 椭圆参数（相对画布）
  const ellipse = { cx: CSS_W * 0.5, cy: CSS_H * 0.5, rx: CSS_W * 0.42, ry: CSS_H * 0.36 };

  // 初始化高 DPI
  useEffect(() => {
    const cvs = drawRef.current!;
    const dpr = window.devicePixelRatio || 1;
    cvs.width = Math.floor(CSS_W * dpr);
    cvs.height = Math.floor(CSS_H * dpr);
    cvs.style.width = `${CSS_W}px`;
    cvs.style.height = `${CSS_H}px`;
    const ctx = cvs.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // 背景浅色 + 轮廓
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, CSS_W, CSS_H);

    ctx.save();
    ctx.strokeStyle = "rgba(2,132,199,0.8)";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.ellipse(ellipse.cx, ellipse.cy, ellipse.rx, ellipse.ry, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 中央提示
    ctx.fillStyle = "rgba(0,0,0,0.45)";
    ctx.font = "12px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("只允许在椭圆内绘制（超出无效）", CSS_W / 2, 20);
  }, []);

  // 绘制（限制在椭圆区域）
  const drawingRef = useRef(false);
  const lastRef = useRef<{ x: number, y: number } | null>(null);

  function clipToEllipse(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.ellipse(ellipse.cx, ellipse.cy, ellipse.rx, ellipse.ry, 0, 0, Math.PI * 2);
    ctx.clip();
  }

  function getPos(e: React.PointerEvent<HTMLCanvasElement>) {
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    drawingRef.current = true;
    lastRef.current = getPos(e);
  }
  function onPointerUp(e: React.PointerEvent<HTMLCanvasElement>) {
    drawingRef.current = false;
    lastRef.current = null;
    (e.target as HTMLCanvasElement).releasePointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return;
    const cvs = drawRef.current!;
    const ctx = cvs.getContext("2d")!;
    const cur = getPos(e);
    const last = lastRef.current ?? cur;

    ctx.save();
    clipToEllipse(ctx);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = brushSize;
    if (isEraser) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "rgba(0,0,0,1)";
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = brushColor;
    }
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(cur.x, cur.y);
    ctx.stroke();
    ctx.restore();

    lastRef.current = cur;
  }

  function clearDrawing() {
    const cvs = drawRef.current!;
    const ctx = cvs.getContext("2d")!;
    ctx.save();
    clipToEllipse(ctx);
    ctx.clearRect(0, 0, CSS_W, CSS_H);
    ctx.restore();
  }

  function handleCreate() {
    if (!ownerName.trim() || !petName.trim()) {
      alert("请填写 用户名字 和 宠物鱼名字");
      return;
    }
    const dataUrl = drawRef.current!.toDataURL("image/png");
    onCreate(ownerName.trim(), petName.trim(), dataUrl);
  }

  const COLORS = ["#ff6b6b", "#f59e0b", "#22c55e", "#3b82f6", "#8b5cf6", "#222222"];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-[720px] bg-white rounded-2xl shadow-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">🎨 自定义宠物鱼</h3>
          <button onClick={onCancel} className="px-2 py-1 text-slate-600 hover:text-black">关闭</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto,220px] gap-4">
          {/* 受限绘制画布 */}
          <div className="flex flex-col items-center">
            <canvas
              ref={drawRef}
              className="rounded-xl border border-sky-200 shadow-inner touch-none bg-white"
              style={{ width: 360, height: 200 }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            />
            <div className="mt-2 flex items-center gap-2">
              {COLORS.map(c => (
                <button key={c} onClick={() => { setBrushColor(c); setIsEraser(false); }}
                  className="w-6 h-6 rounded-full border border-black/10" style={{ background: c }} title={c} />
              ))}
              <button onClick={() => setIsEraser(!isEraser)}
                className={`px-2 py-1 rounded-lg border ${isEraser ? "bg-slate-700 text-white" : "bg-white"}`}>
                橡皮
              </button>
              <label className="text-sm text-slate-600">
                笔刷
                <input type="range" min={2} max={24} value={brushSize}
                  onChange={e => setBrushSize(parseInt(e.target.value))}
                  className="ml-2 align-middle" />
              </label>
              <button onClick={clearDrawing} className="px-2 py-1 rounded-lg border bg-white hover:bg-slate-50">清空</button>
            </div>
          </div>

          {/* 信息 & 提交 */}
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-slate-600 mb-1">用户名字</label>
              <input value={ownerName} onChange={e => setOwnerName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border" placeholder="例如：YANG JIZHOU" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">宠物鱼名字</label>
              <input value={petName} onChange={e => setPetName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border" placeholder="例如：小蓝" />
            </div>
            <div className="text-xs text-slate-500">
              说明：只能在椭圆轮廓内绘制；你的图样会作为鱼体贴图保存（本地存档）。
            </div>
            <div className="flex gap-2 pt-2">
              <button onClick={handleCreate}
                className="px-3 py-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700">
                加入鱼塘
              </button>
              <button onClick={onCancel}
                className="px-3 py-2 rounded-xl border bg-white hover:bg-slate-50">
                取消
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
