import React, { useEffect, useRef, useState } from "react";

// —— Fish Pond Mini‑Game ————————————————————————————
// 功能：
// 1) “+1 条鱼”按钮可往鱼塘添加一条会游动的鱼。
// 2) 点击鱼塘画布可以“投喂”饲料。
// 3) 鱼在视野范围内发现饲料会游过去吃；每吃一个体型 +1%（size *= 1.01）。
// 4) 纯前端，无外部资源；可直接在 React 环境中运行。

// ====== 可调整的参数 ======
const BASE_FISH_SIZE = 18; // 鱼体基准像素尺寸（绘制时按 sizeScale 缩放）
const FISH_SPEED_MIN = 55; // px/s
const FISH_SPEED_MAX = 90; // px/s
const FISH_TURN_SMOOTH = 0.08; // 转向/速度插值系数（0~1，越大越灵敏）
const FISH_VISION = 160; // 视野半径（像素）
const EAT_RADIUS = 14; // 鱼嘴吃东西的半径（会乘以体型缩放）
const FOOD_RADIUS = 5; // 饲料半径
const MAX_FISH_COUNT = 60; // 保险上限

// 便捷函数
const rand = (a: number, b: number) => a + Math.random() * (b - a);
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));

// 类型定义
interface Food {
  id: number;
  x: number;
  y: number;
  r: number;
}

interface Fish {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number; // 标称速度（px/s）
  sizeScale: number; // 体型缩放（吃一次 *1.01）
  color: string;
  vision: number; // 视野半径
  targetFoodId: number | null; // 正在追的饲料
  wanderT: number; // 游走噪声相位
}

// 生成随机颜色（舒服的水色系）
function randomFishColor() {
  const hues = [195, 205, 215, 165, 180, 200, 30, 350];
  const h = hues[Math.floor(Math.random() * hues.length)];
  const s = Math.floor(rand(55, 85));
  const l = Math.floor(rand(45, 65));
  return `hsl(${h} ${s}% ${l}%)`;
}

// 计算两点距离与方向
function dist(ax: number, ay: number, bx: number, by: number) {
  const dx = bx - ax;
  const dy = by - ay;
  return Math.hypot(dx, dy);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// 主组件
export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fishCount, setFishCount] = useState(0);
  const [foodCount, setFoodCount] = useState(0);

  // 不触发重渲染的“游戏状态”引用
  const fishRef = useRef<Fish[]>([]);
  const foodRef = useRef<Food[]>([]);
  const nextIdRef = useRef(1);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // 适配高 DPI 的画布尺寸
  function resizeCanvas() {
    const cvs = canvasRef.current!;
    const parent = containerRef.current!;
    const rect = parent.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    cvs.width = Math.max(320, Math.floor(rect.width * dpr));
    cvs.height = Math.max(220, Math.floor(rect.height * dpr));
    cvs.style.width = `${Math.max(320, Math.floor(rect.width))}px`;
    cvs.style.height = `${Math.max(220, Math.floor(rect.height))}px`;
    const ctx = cvs.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // 之后按 CSS 像素坐标绘制
  }

  React.useEffect(() => {
    const ro = new ResizeObserver(resizeCanvas);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // 添加一条鱼
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
  }

  // 画布点击投喂
  function onCanvasClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = nextIdRef.current++;
    foodRef.current.push({ id, x, y, r: 5 });
    setFoodCount(foodRef.current.length);
  }

  // 主循环
  React.useEffect(() => {
    const cvs = canvasRef.current!;
    const ctx = cvs.getContext("2d")!;
    resizeCanvas();

    const step = (t: number) => {
      const now = t / 1000; // 秒
      const last = (lastTimeRef.current ?? now);
      const dt = clamp(now - last, 0, 0.05); // 最大步长 50ms 防止穿透
      lastTimeRef.current = now;

      const w = parseInt(cvs.style.width || "800", 10);
      const h = parseInt(cvs.style.height || "500", 10);

      // 背景：柔和水面渐变
      const grd = ctx.createLinearGradient(0, 0, 0, h);
      grd.addColorStop(0, "#e6f7ff");
      grd.addColorStop(1, "#cdeffd");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // 轻微水纹
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < 3; i++) {
        const y0 = (now * 12 + i * 60) % (h + 60) - 60;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.ellipse(w * 0.5, y0, w * 0.55, 18, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // 绘制饲料
      ctx.fillStyle = "#8b5e3c";
      for (const fd of foodRef.current) {
        ctx.beginPath();
        ctx.arc(fd.x, fd.y, fd.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // —— 更新鱼逻辑 ——
      const foods = foodRef.current;
      for (const f of fishRef.current) {
        // 1) 寻找目标（最近可见饲料）
        let target: Food | null = null;
        let dMin = Infinity;
        for (const fd of foods) {
          const d = dist(f.x, f.y, fd.x, fd.y);
          if (d < f.vision && d < dMin) {
            dMin = d;
            target = fd;
          }
        }

        // 2) 计算期望速度（有目标则朝向目标；否则“游走”）
        let desiredVX = f.vx;
        let desiredVY = f.vy;
        if (target) {
          const dx = target.x - f.x;
          const dy = target.y - f.y;
          const len = Math.hypot(dx, dy) || 1;
          desiredVX = (dx / len) * f.speed;
          desiredVY = (dy / len) * f.speed;
        } else {
          // 简单噪声游走（缓慢左右摆尾改变方向）
          f.wanderT += dt;
          const wobble = Math.sin(f.wanderT * 1.8 + f.id * 1.37) * 0.6; // -0.6~0.6
          const curLen = Math.hypot(f.vx, f.vy) || 1;
          let vx = f.vx / curLen;
          let vy = f.vy / curLen;
          // 将法向量叠加一点点
          const nx = -vy;
          const ny = vx;
          vx = vx + nx * wobble * 0.25;
          vy = vy + ny * wobble * 0.25;
          const len2 = Math.hypot(vx, vy) || 1;
          desiredVX = (vx / len2) * f.speed;
          desiredVY = (vy / len2) * f.speed;
        }

        // 3) 平滑转向/加速
        f.vx = lerp(f.vx, desiredVX, 0.08);
        f.vy = lerp(f.vy, desiredVY, 0.08);

        // 4) 位置更新
        f.x += f.vx * dt;
        f.y += f.vy * dt;

        // 5) 边界反弹
        const margin = 14 * f.sizeScale;
        if (f.x < margin) {
          f.x = margin; f.vx = Math.abs(f.vx);
        } else if (f.x > w - margin) {
          f.x = w - margin; f.vx = -Math.abs(f.vx);
        }
        if (f.y < margin) {
          f.y = margin; f.vy = Math.abs(f.vy);
        } else if (f.y > h - margin) {
          f.y = h - margin; f.vy = -Math.abs(f.vy);
        }

        // 6) 吃东西（碰撞检测）
        const eatR = (14 * f.sizeScale) + 5;
        for (let i = foods.length - 1; i >= 0; i--) {
          const fd = foods[i];
          if (dist(f.x, f.y, fd.x, fd.y) <= eatR) {
            foods.splice(i, 1);
            f.sizeScale *= 1.01; // 体型 +1%
          }
        }
      }

      // 如有吃掉饲料，更新 UI 计数
      (window as any).__debugFoodCount = foods.length;
      // 用 setFoodCount 触发 React UI 更新
      setFoodCount(foods.length);

      // —— 绘制鱼 ——
      for (const f of fishRef.current) {
        const angle = Math.atan2(f.vy, f.vx);
        const base = BASE_FISH_SIZE * f.sizeScale;

        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(angle);

        // 身体
        const bodyLen = base * 1.6;
        const bodyH = base * 0.9;
        const tailWobble = Math.sin((now + f.id) * 8) * (base * 0.22);

        // 身体椭圆
        const grdBody = ctx.createLinearGradient(0, -bodyH, 0, bodyH);
        grdBody.addColorStop(0, "rgba(255,255,255,0.9)");
        grdBody.addColorStop(1, f.color);
        ctx.fillStyle = grdBody;
        ctx.beginPath();
        ctx.ellipse(0, 0, bodyLen * 0.45, bodyH * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();

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

        // 视野可选（按住 Alt 键显示）
        if ((window as any).__showVision) {
          ctx.strokeStyle = "rgba(0,0,0,0.08)";
          ctx.setLineDash([6, 6]);
          ctx.beginPath();
          ctx.arc(0, 0, (fishRef.current.find(ff => ff.id === f.id)?.vision) || 160, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        ctx.restore();
      }

      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // 键盘：Alt+V 切换视野圈显示（仅调试）
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "v" && e.altKey) {
        (window as any).__showVision = !(window as any).__showVision;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="text-xl font-semibold">🐟 小鱼塘 Mini‑Game</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={addFish}
            className="px-3 py-1.5 rounded-2xl shadow-sm bg-sky-500 text-white hover:bg-sky-600 active:scale-[0.98]"
            title="添加一条新鱼"
          >
            +1 条鱼
          </button>
          <button
            onClick={() => {
              fishRef.current = [];
              setFishCount(0);
            }}
            className="px-3 py-1.5 rounded-2xl shadow-sm bg-slate-200 hover:bg-slate-300"
            title="清空所有鱼"
          >
            清空鱼
          </button>
          <button
            onClick={() => {
              foodRef.current = [];
              setFoodCount(0);
            }}
            className="px-3 py-1.5 rounded-2xl shadow-sm bg-amber-200 hover:bg-amber-300"
            title="清空饲料"
          >
            清空饲料
          </button>
        </div>
      </div>

      <div className="text-sm text-slate-600 mb-2">
        点击下面的水面投喂；鱼吃到饲料体型 +1%。当前：
        <span className="ml-2">鱼：{fishCount}</span>
        <span className="ml-3">饲料：{foodCount}</span>
        <span className="ml-3 opacity-70">（Alt+V 显示视野圈）</span>
      </div>

      <div
        ref={containerRef}
        className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-inner bg-sky-50 border border-sky-100"
      >
        <canvas ref={canvasRef} onClick={onCanvasClick} className="w-full h-full cursor-crosshair" />
      </div>
    </div>
  );
}