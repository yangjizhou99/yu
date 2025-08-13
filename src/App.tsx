import React, { useEffect, useRef, useState } from "react";
import OutlineEditor from "./components/OutlineEditor";
import DetailEditor from "./components/DetailEditor";
import { UserOutline } from "./types/fish";
// === Firestore 接入（S6.0） ===
import { ensureAnonAuth, loadCloud, saveCloud, listenCloud, CloudSave } from "./firebase";

// —— Fish Pond Mini-Game ————————————————————————————
// S4.1：相机(缩放/拖拽) + 巨型鱼塘(4096x2304) + 降速成长 + 🎨自定义绘鱼 + 持久化 v3

// ====== 世界/相机参数 ======
const WORLD_W = 4096;
const WORLD_H = 2304;
const SCALE_MIN = 0.3;
const SCALE_MAX = 3.0;
const ZOOM_STEP = 1.15; // 按钮缩放步长

// ====== 可调参数 ======
const BASE_FISH_SIZE = 18;
const FISH_SPEED_MIN = 55;
const FISH_SPEED_MAX = 90;
const FISH_TURN_SMOOTH = 0.08;
const FISH_VISION = 160;
const EAT_RADIUS = 14;
const MAX_FISH_COUNT = 80;
const SIZE_SCALE_MAX = 2.5; // 体型上限

// —— 饲料（降低总体成长：期望≈0.684%/颗） ——
type FoodKind = "common" | "uncommon" | "rare";
const FOOD_VARIANTS = [
  { kind: "common" as FoodKind,   prob: 0.75, growPct: 0.004, radius: 5 }, // +0.4%
  { kind: "uncommon" as FoodKind, prob: 0.22, growPct: 0.012, radius: 6 }, // +1.2%
  { kind: "rare" as FoodKind,     prob: 0.03, growPct: 0.04,  radius: 7 }, // +4%
];

// —— 存档（v3） ——
const STORAGE_KEY_V3 = "fish-pond-save-v3";
const POND_ID_KEY = "pond-id";
function getOrCreatePondId() {
  let id = localStorage.getItem(POND_ID_KEY);
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem(POND_ID_KEY, id);
  }
  return id;
}
const pondId = getOrCreatePondId();
type SaveDataV3 = { version: 3; nextId: number; fish: Fish[]; food: Food[]; savedAt: string; };
type SaveDataV2 = {
  version: 2; nextId: number;
  fish: Omit<Fish, "ownerName" | "petName" | "textureDataUrl">[];
  food: { id: number; x: number; y: number; r: number; kind: FoodKind; growPct: number }[];
  savedAt: string;
};
type SaveDataV1 = {
  version: 1; nextId: number;
  fish: Omit<Fish, "ownerName" | "petName" | "textureDataUrl" | "vision" | "targetFoodId" | "wanderT">[] & any;
  food: { id: number; x: number; y: number; r: number }[];
  savedAt: string;
};

// 工具函数
const rand = (a: number, b: number) => a + Math.random() * (b - a);
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
function pickFoodVariant() { const r = Math.random(); let acc = 0; for (const v of FOOD_VARIANTS){ acc+=v.prob; if(r<=acc) return v; } return FOOD_VARIANTS[FOOD_VARIANTS.length - 1]!; }

// ====== 类型 ======
interface Food { id: number; x: number; y: number; r: number; kind: FoodKind; growPct: number; }
// 新增：鱼形类型
type FishShape = "angelfish" | "swordfish" | "longtail";

interface Fish {
  id: number; x: number; y: number; vx: number; vy: number; speed: number;
  sizeScale: number; color: string; vision: number; targetFoodId: number|null; wanderT: number;
  ownerName?: string; petName?: string; textureDataUrl?: string;
  shape?: FishShape; // 新增形状字段
  shapeKey?: string; // 自定义轮廓标识 (builtin:xxx | custom:ol-123)
  textureSvg?: string; // 自定义SVG纹理
}
type TexCache = Map<number, HTMLImageElement>;
type Camera = { x: number; y: number; scale: number };

function randomFishColor() { const hues=[195,205,215,165,180,200,30,350]; const h=hues[Math.floor(Math.random()*hues.length)];
  const s=Math.floor(rand(55,85)); const l=Math.floor(rand(45,65)); return `hsl(${h} ${s}% ${l}%)`; }
function dist(ax:number,ay:number,bx:number,by:number){const dx=bx-ax,dy=by-ay;return Math.hypot(dx,dy);}
function lerp(a:number,b:number,t:number){return a+(b-a)*t;}

// 小鱼更快、大鱼更慢（平滑），并限制上下界
function speedMultiplier(size: number) {
  // size=1.0 ≈ 1.09x；size=2.5 ≈ 0.70x；size<1 时略快（<=1.2x）
  const m = 1.35 - 0.26 * size;
  return clamp(m, 0.70, 1.20);
}

// 星形（稀有饲料）
function drawStar(ctx: CanvasRenderingContext2D, spikes:number, outerR:number, innerR:number){
  const step=Math.PI/spikes; ctx.beginPath(); ctx.rotate(-Math.PI/2);
  for(let i=0;i<spikes;i++){ ctx.lineTo(Math.cos(i*2*step)*outerR,Math.sin(i*2*step)*outerR);
    ctx.lineTo(Math.cos((i*2+1)*step)*innerR,Math.sin((i*2+1)*step)*innerR);}
  ctx.closePath(); ctx.rotate(Math.PI/2);
}

// —— 贴图定义 —— //
type TextureKey = "clownfish" | "blueTang" | "koi" | "whaleShark" | "lionfish" | "parrotfish";
type TextureDef = {
  key: TextureKey;
  label: string;
  // 推荐使用的轮廓（可按你项目已有值：angelfish / swordfish / longtail）
  shape: FishShape;
  // 生成一个 w×h 的贴图，并返回 dataURL
  make: (w: number, h: number) => string;
  // 预览（初始化后生成一次）
  preview?: string;
};

// 小工具：创建离屏画布
function makeOffscreen(w: number, h: number) {
  const cvs = document.createElement("canvas");
  cvs.width = w; cvs.height = h;
  const ctx = cvs.getContext("2d")!;
  return { cvs, ctx };
}

// 各类程序贴图（保证横向为主的纹理，便于鱼体覆盖）
function tex_clownfish(w:number, h:number) {
  const { cvs, ctx } = makeOffscreen(w, h);
  // 橙底
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, "#ffae2b"); g.addColorStop(1, "#ff8b00");
  ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
  // 三道白带 + 黑边
  const bands = [0.2, 0.5, 0.8];
  for (const x of bands) {
    const cx = x * w, bw = w*0.12, br = bw*0.45;
    ctx.fillStyle="#ffffff";
    ctx.beginPath(); ctx.moveTo(cx-bw,0); ctx.quadraticCurveTo(cx,br,cx+bw,0);
    ctx.lineTo(cx+bw,h); ctx.quadraticCurveTo(cx,h-br,cx-bw,h); ctx.closePath(); ctx.fill();
    ctx.strokeStyle="rgba(0,0,0,0.65)"; ctx.lineWidth=bw*0.22; ctx.stroke();
  }
  return cvs.toDataURL("image/png");
}

function tex_blueTang(w:number, h:number) {
  const { cvs, ctx } = makeOffscreen(w, h);
  // 蓝底
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, "#3aa9ff"); g.addColorStop(1, "#1557c0");
  ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
  // 黑色"调色板"块（中段弧形）
  ctx.fillStyle="#0a1422";
  ctx.beginPath();
  ctx.moveTo(0.15*w, 0.25*h);
  ctx.bezierCurveTo(0.40*w, 0.05*h, 0.65*w, 0.10*h, 0.95*w, 0.20*h);
  ctx.lineTo(0.95*w, 0.80*h);
  ctx.bezierCurveTo(0.65*w, 0.90*h, 0.40*w, 0.95*h, 0.15*w, 0.75*h);
  ctx.closePath(); ctx.fill();
  // 尾部黄块
  const yg = ctx.createLinearGradient(w*0.8,0,w,0);
  yg.addColorStop(0,"#fff35a"); yg.addColorStop(1,"#ffd100");
  ctx.fillStyle = yg; ctx.fillRect(w*0.82, 0, w*0.18, h);
  return cvs.toDataURL("image/png");
}

function tex_koi(w:number, h:number) {
  const { cvs, ctx } = makeOffscreen(w, h);
  ctx.fillStyle="#f7f7f7"; ctx.fillRect(0,0,w,h);
  // 随机红斑（2~4 块）
  const n = 2 + Math.floor(Math.random()*3);
  for(let i=0;i<n;i++){
    const cx = w*(0.15+0.7*Math.random());
    const cy = h*(0.25+0.5*Math.random());
    const rx = w*(0.10+0.15*Math.random());
    const ry = h*(0.12+0.18*Math.random());
    ctx.save();
    ctx.translate(cx, cy); ctx.rotate((Math.random()-0.5)*0.7);
    ctx.fillStyle = "rgba(220,20,20,0.95)";
    ctx.beginPath(); ctx.ellipse(0,0,rx,ry,0,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }
  // 轻微噪点
  const ng = ctx.createLinearGradient(0,0,0,h);
  ng.addColorStop(0,"rgba(0,0,0,0.03)"); ng.addColorStop(1,"rgba(0,0,0,0.00)");
  ctx.fillStyle=ng; ctx.fillRect(0,0,w,h);
  return cvs.toDataURL("image/png");
}

function tex_whaleShark(w:number, h:number) {
  const { cvs, ctx } = makeOffscreen(w, h);
  const g = ctx.createLinearGradient(0,0,0,h);
  g.addColorStop(0,"#1aa5a5"); g.addColorStop(1,"#0b5570");
  ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
  ctx.fillStyle="rgba(255,255,255,0.9)";
  const gridX=13, gridY=7;
  for(let iy=0; iy<gridY; iy++){
    for(let ix=0; ix<gridX; ix++){
      const x = (ix+0.5 + (iy%2)*0.5) * (w/gridX);
      const y = (iy+0.4) * (h/(gridY+0.5));
      const r = Math.min(w,h)*0.012*(1+0.4*Math.sin(ix*0.7+iy*0.5));
      ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
    }
  }
  return cvs.toDataURL("image/png");
}

function tex_lionfish(w:number, h:number) {
  const { cvs, ctx } = makeOffscreen(w, h);
  const base = ctx.createLinearGradient(0,0,0,h);
  base.addColorStop(0,"#f6eee6"); base.addColorStop(1,"#efe2d8");
  ctx.fillStyle=base; ctx.fillRect(0,0,w,h);
  // 斜向深棕条纹
  ctx.strokeStyle="#7b3f1b"; ctx.lineWidth = h*0.16; ctx.globalAlpha=0.85;
  for(let i=-2;i<10;i++){ ctx.beginPath();
    ctx.moveTo(i*0.18*w, -0.1*h);
    ctx.lineTo((i+3)*0.18*w, 1.1*h); ctx.stroke();
  }
  ctx.globalAlpha=1;
  return cvs.toDataURL("image/png");
}

function tex_parrotfish(w:number, h:number) {
  const { cvs, ctx } = makeOffscreen(w, h);
  const stops = ["#23c2a6","#2fb3df","#4e79ff","#9a6bff","#f25fd0","#ff7f4d"];
  const g = ctx.createLinearGradient(0,0,w,0);
  stops.forEach((c,i)=> g.addColorStop(i/(stops.length-1), c));
  ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
  // 轻微横向纹理
  ctx.globalAlpha=0.15; ctx.fillStyle="#ffffff";
  for(let i=0;i<12;i++){ const y = ((i+0.5)/12)*h;
    ctx.fillRect(0,y, w, 1.2);
  }
  ctx.globalAlpha=1;
  return cvs.toDataURL("image/png");
}

// —— 贴图清单（推荐与轮廓形状搭配） —— //
const TEXTURE_PACK: TextureDef[] = [
  { key:"clownfish",  label:"小丑鱼",  shape:"angelfish", make: tex_clownfish },
  { key:"blueTang",   label:"蓝吊鱼",  shape:"angelfish", make: tex_blueTang },
  { key:"koi",        label:"锦鲤",    shape:"angelfish", make: tex_koi },
  { key:"whaleShark", label:"鲸鲨肌理",shape:"swordfish", make: tex_whaleShark },
  { key:"lionfish",   label:"狮子鱼",  shape:"angelfish", make: tex_lionfish },
  { key:"parrotfish", label:"鹦嘴鱼",  shape:"longtail",  make: tex_parrotfish },
];

// 初始化预览（只跑一次）
function initTexturePreviews() {
  for (const t of TEXTURE_PACK) {
    if (!t.preview) t.preview = t.make(120, 60);
  }
}

// —— 通用：按形状生成鱼体路径（局部坐标，中心(0,0)，长度 L，高度 H；不含尾鳍） ——
function beginFishBodyPath_byShape(ctx: CanvasRenderingContext2D, shape: FishShape, L: number, H: number) {
  if (shape === "angelfish") return beginFishBodyPath_angelfish(ctx, L, H);
  if (shape === "swordfish")  return beginFishBodyPath_swordfish(ctx, L, H);
  return beginFishBodyPath_longtail(ctx, L, H); // 默认长尾
}

// —— 绝对坐标版：给面板用（无需 translate/rotate）
function beginFishBodyPathAbs_byShape(ctx: CanvasRenderingContext2D, shape: FishShape, cx: number, cy: number, L: number, H: number) {
  if (shape === "angelfish") return beginFishBodyPathAbs_angelfish(ctx, cx, cy, L, H);
  if (shape === "swordfish")  return beginFishBodyPathAbs_swordfish(ctx, cx, cy, L, H);
  return beginFishBodyPathAbs_longtail(ctx, cx, cy, L, H); // 默认长尾
}

/** —— 1) 流线型（现有基础款，略尖头、饱腹、细尾柄） —— */
function getOutlinePathForFish(f: Fish): { path?: Path2D, box:{w:number,h:number}, flipX:boolean } {
  if (!f.shapeKey?.startsWith("custom:")) {
    // 仍支持内置形状
    return { 
      path: new Path2D(), 
      box: {w: 100, h: 50}, 
      flipX: false 
    };
  }
  const id = f.shapeKey.slice(7);
  const lib: UserOutline[] = JSON.parse(localStorage.getItem('fish-outline-lib-v1') || '[]');
  const o = lib.find(x => x.id === id);
  if (!o) return { 
    path: new Path2D(), 
    box: {w: 100, h: 50}, 
    flipX: false 
  };
  return { 
    path: new Path2D(o.pathD), 
    box: o.viewBox, 
    flipX: !o.headIsLeft 
  };
}

function beginFishBodyPath_streamlined(ctx: CanvasRenderingContext2D, L: number, H: number) {
  ctx.moveTo(+L*0.50, 0);
  ctx.bezierCurveTo(+L*0.42, -H*0.10, +L*0.20, -H*0.42, -L*0.30, -H*0.24);
  ctx.bezierCurveTo(-L*0.46, -H*0.18, -L*0.46, +H*0.18, -L*0.30, +H*0.24);
  ctx.bezierCurveTo(+L*0.20, +H*0.42, +L*0.42, +H*0.10, +L*0.50, 0);
}
function beginFishBodyPathAbs_streamlined(ctx: CanvasRenderingContext2D, cx: number, cy: number, L: number, H: number) {
  ctx.moveTo(cx+L*0.50, cy+0);
  ctx.bezierCurveTo(cx+L*0.42, cy-H*0.10, cx+L*0.20, cy-H*0.42, cx-L*0.30, cy-H*0.24);
  ctx.bezierCurveTo(cx-L*0.46, cy-H*0.18, cx-L*0.46, cy+H*0.18, cx-L*0.30, cy+H*0.24);
  ctx.bezierCurveTo(cx+L*0.20, cy+H*0.42, cx+L*0.42, cy+H*0.10, cx+L*0.50, cy+0);
}

/** —— 2) 神仙鱼（高背三角鳍，腹部鼓、尾柄细） —— */
function beginFishBodyPath_angelfish(ctx: CanvasRenderingContext2D, L: number, H: number) {
  ctx.moveTo(+L*0.45, 0);
  // 头部略尖 + 高背三角鳍（上方）
  ctx.bezierCurveTo(+L*0.30, -H*0.05, +L*0.05, -H*0.65, -L*0.15, -H*0.50);
  // 背后下滑 → 细尾柄
  ctx.bezierCurveTo(-L*0.35, -H*0.35, -L*0.40, -H*0.10, -L*0.42, -H*0.04);
  // 腹部鼓起 + 下方三角鳍
  ctx.bezierCurveTo(-L*0.20, +H*0.55, +L*0.10, +H*0.65, +L*0.35, +H*0.10);
  // 回到尖头
  ctx.bezierCurveTo(+L*0.42, +H*0.02, +L*0.44, +H*0.01, +L*0.45, 0);
}
function beginFishBodyPathAbs_angelfish(ctx: CanvasRenderingContext2D, cx:number, cy:number, L:number, H:number) {
  ctx.moveTo(cx+L*0.45, cy+0);
  ctx.bezierCurveTo(cx+L*0.30, cy-H*0.05, cx+L*0.05, cy-H*0.65, cx-L*0.15, cy-H*0.50);
  ctx.bezierCurveTo(cx-L*0.35, cy-H*0.35, cx-L*0.40, cy-H*0.10, cx-L*0.42, cy-H*0.04);
  ctx.bezierCurveTo(cx-L*0.20, cy+H*0.55, cx+L*0.10, cy+H*0.65, cx+L*0.35, cy+H*0.10);
  ctx.bezierCurveTo(cx+L*0.42, cy+H*0.02, cx+L*0.44, cy+H*0.01, cx+L*0.45, cy+0);
}

/** —— 3) 旗鱼/剑鱼（细长体 + 长吻"剑"，腹部较平直） —— */
function beginFishBodyPath_swordfish(ctx: CanvasRenderingContext2D, L:number, H:number) {
  // 前端长吻（略超出 L*0.55）
  ctx.moveTo(+L*0.60, -H*0.02);
  ctx.bezierCurveTo(+L*0.58, -H*0.04, +L*0.54, -H*0.06, +L*0.46, -H*0.08);
  // 上缘：平直向后
  ctx.bezierCurveTo(+L*0.10, -H*0.12, -L*0.10, -H*0.10, -L*0.40, -H*0.05);
  // 下缘：微鼓 → 尾柄
  ctx.bezierCurveTo(-L*0.20, +H*0.06, +L*0.18, +H*0.08, +L*0.46, +H*0.04);
  // 回到吻部
  ctx.bezierCurveTo(+L*0.54, +H*0.02, +L*0.58, 0, +L*0.60, -H*0.02);
}
function beginFishBodyPathAbs_swordfish(ctx:CanvasRenderingContext2D, cx:number, cy:number, L:number, H:number){
  ctx.moveTo(cx+L*0.60, cy-H*0.02);
  ctx.bezierCurveTo(cx+L*0.58, cy-H*0.04, cx+L*0.54, cy-H*0.06, cx+L*0.46, cy-H*0.08);
  ctx.bezierCurveTo(cx+L*0.10, cy-H*0.12, cx-L*0.10, cy-H*0.10, cx-L*0.40, cy-H*0.05);
  ctx.bezierCurveTo(cx-L*0.20, cy+H*0.06, cx+L*0.18, cy+H*0.08, cx+L*0.46, cy+H*0.04);
  ctx.bezierCurveTo(cx+L*0.54, cy+H*0.02, cx+L*0.58, cy+0, cx+L*0.60, cy-H*0.02);
}

/** —— 4) 长尾型（斗鱼/金鱼风：圆润身 + 尾柄短，尾鳍很大） —— */
function beginFishBodyPath_longtail(ctx: CanvasRenderingContext2D, L:number, H:number) {
  ctx.moveTo(+L*0.45, 0);
  // 圆润背部
  ctx.bezierCurveTo(+L*0.30, -H*0.12, +L*0.05, -H*0.40, -L*0.18, -H*0.25);
  // 肚子丰满 → 短尾柄
  ctx.bezierCurveTo(-L*0.35, +H*0.10, -L*0.28, +H*0.30, -L*0.18, +H*0.25);
  // 回到尖头
  ctx.bezierCurveTo(+L*0.05, +H*0.40, +L*0.30, +H*0.12, +L*0.45, 0);
}
function beginFishBodyPathAbs_longtail(ctx:CanvasRenderingContext2D, cx:number, cy:number, L:number, H:number){
  ctx.moveTo(cx+L*0.45, cy+0);
  ctx.bezierCurveTo(cx+L*0.30, cy-H*0.12, cx+L*0.05, cy-H*0.40, cx-L*0.18, cy-H*0.25);
  ctx.bezierCurveTo(cx-L*0.35, cy+H*0.10, cx-L*0.28, cy+H*0.30, cx-L*0.18, cy+H*0.25);
  ctx.bezierCurveTo(cx+L*0.05, cy+H*0.40, cx+L*0.30, cy+H*0.12, cx+L*0.45, cy+0);
}

// —— 海洋背景：深海渐变 + 光斑 + 沙地 —— //
function drawOceanBackground(ctx: CanvasRenderingContext2D, now: number) {
  // 1) 深海渐变
  const grd = ctx.createLinearGradient(0, 0, 0, WORLD_H);
  grd.addColorStop(0.00, "#0e7490"); // 浅青
  grd.addColorStop(0.55, "#0a6aa1"); // 深蓝
  grd.addColorStop(1.00, "#06304f"); // 海底
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, WORLD_W, WORLD_H);

  // 2) 顶部光斑（轻量"海水光斑"效果，随时间缓慢下移）
  ctx.save();
  ctx.globalAlpha = 0.12;
  for (let i = 0; i < 5; i++) {
    const y = ((now * 18 + i * 180) % (WORLD_H + 220)) - 220;
    ctx.beginPath();
    ctx.ellipse(WORLD_W * 0.5, y, WORLD_W * 0.60, 26, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  }
  ctx.restore();

  // 3) 沙地（底部 180px）
  const seabedTop = WORLD_H - 180;
  const sand = ctx.createLinearGradient(0, seabedTop, 0, WORLD_H);
  sand.addColorStop(0, "#f1e2a9");
  sand.addColorStop(1, "#d8c17a");
  ctx.fillStyle = sand;
  ctx.fillRect(0, seabedTop, WORLD_W, WORLD_H - seabedTop);

  // 4) 沙丘起伏（柔和阴影）
  ctx.globalAlpha = 0.25;
  for (let i = 0; i < 3; i++) {
    const y0 = seabedTop + 40 + i * 30;
    ctx.beginPath();
    ctx.ellipse(WORLD_W * (0.2 + i * 0.3), y0, 220 + i * 120, 18, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#c8b06a";
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

export default function App(){
  const canvasRef = useRef<HTMLCanvasElement|null>(null);
  const containerRef = useRef<HTMLDivElement|null>(null);
  const [fishCount, setFishCount] = useState(0);
  const [foodCount, setFoodCount] = useState(0);

  const fishRef = useRef<Fish[]>([]);
  const foodRef = useRef<Food[]>([]);
  const nextIdRef = useRef(1);
  const animRef = useRef<number|null>(null);
  const lastTimeRef = useRef<number|null>(null);

  // 纹理缓存
  const texCacheRef = useRef<TexCache>(new Map());

  // 相机
  const camRef = useRef<Camera>({ x:(WORLD_W-1280)/2, y:(WORLD_H-720)/2, scale:1 });
  const initedCamRef = useRef(false);

  // 拖拽状态
  const panningRef = useRef(false);
  const panStartRef = useRef<{sx:number;sy:number;camX:number;camY:number}>({sx:0,sy:0,camX:0,camY:0});
  const spaceDownRef = useRef(false);

  // 编辑器面板状态
  const [designerOpen, setDesignerOpen] = useState(false);
  const [outlineEditorOpen, setOutlineEditorOpen] = useState(false);
  const [detailEditorOpen, setDetailEditorOpen] = useState(false);
  const [currentOutline, setCurrentOutline] = useState<UserOutline | null>(null);

  const openDesigner = () => setDesignerOpen(true);
  const closeDesigner = () => setDesignerOpen(false);
  const openOutlineEditor = () => setOutlineEditorOpen(true);
  const closeOutlineEditor = () => setOutlineEditorOpen(false);
  const openDetailEditor = (outline: UserOutline) => {
    setCurrentOutline(outline);
    setDetailEditorOpen(true);
  };
  const closeDetailEditor = () => setDetailEditorOpen(false);

  // 贴图选择器状态
  const [showTexPicker, setShowTexPicker] = useState(false);

  // 存档：节流保存
  const dirtyRef = useRef(false); const saveTimerRef = useRef<number|null>(null);
  function saveToStorage(){ const data:SaveDataV3={version:3,nextId:nextIdRef.current,fish:fishRef.current,food:foodRef.current,savedAt:new Date().toISOString()}; 
    try{localStorage.setItem(STORAGE_KEY_V3,JSON.stringify(data));}catch{} }
  function scheduleSave(throttleMs=800){ dirtyRef.current=true; if(saveTimerRef.current!=null) return;
    saveTimerRef.current=window.setTimeout(()=>{saveTimerRef.current=null; if(dirtyRef.current){saveToStorage(); dirtyRef.current=false;}}, throttleMs); }

  // === S6.0：云端节流保存 ===
  const cloudTimerRef = useRef<number | null>(null);
  const _ignoreNextCloud = useRef(false);

  function toCloudPayload(): CloudSave {
    // 轻量版：不把 base64 贴图传上云，避免文档过大/费用高
    const fishLite = fishRef.current.map(f => {
      const { textureDataUrl, ...rest } = f as any;
      return rest;
    });
    return { cver: 1, nextId: nextIdRef.current, fish: fishLite, food: foodRef.current };
  }

  function scheduleCloudSave(ms = 1200) {
    if (cloudTimerRef.current != null) return;
    cloudTimerRef.current = window.setTimeout(async () => {
      cloudTimerRef.current = null;
      try {
        _ignoreNextCloud.current = true;  // 避免自己写触发自己的监听回调
        await saveCloud(pondId, toCloudPayload());
        setTimeout(() => { _ignoreNextCloud.current = false; }, 300);
      } catch (e) { console.warn("saveCloud failed", e); }
    }, ms);
  }

  // 迁移
  function migrateV2toV3(v2:SaveDataV2):SaveDataV3{ return {version:3,nextId:Math.max(1,v2.nextId??1),fish:(v2.fish??[]).map(f=>({...f})) as Fish[],food:v2.food??[],savedAt:v2.savedAt??new Date().toISOString()}; }
  function migrateV1toV3(v1:SaveDataV1):SaveDataV3{
    const v2:SaveDataV2={version:2,nextId:Math.max(1,v1.nextId??1),fish:v1.fish??[],food:(v1.food??[]).map(fd=>({id:fd.id,x:fd.x,y:fd.y,r:fd.r,kind:"common" as FoodKind,growPct:0.004})),savedAt:v1.savedAt??new Date().toISOString()};
    return migrateV2toV3(v2);
  }
  function loadFromStorage():SaveDataV3|null{
    try{
      const rawV3=localStorage.getItem(STORAGE_KEY_V3); if(rawV3){const d3=JSON.parse(rawV3) as SaveDataV3; if(d3?.version===3) return d3;}
      const rawV2=localStorage.getItem("fish-pond-save-v2"); if(rawV2){const d2=JSON.parse(rawV2) as SaveDataV2; if(d2?.version===2) return migrateV2toV3(d2);}
      const rawV1=localStorage.getItem("fish-pond-save-v1"); if(rawV1){const d1=JSON.parse(rawV1) as SaveDataV1; if(d1?.version===1) return migrateV1toV3(d1);}
      return null;
    }catch{return null;}
  }

  // 画布尺寸
  function resizeCanvas(){
    const cvs=canvasRef.current!, parent=containerRef.current!;
    const rect=parent.getBoundingClientRect(); const dpr=window.devicePixelRatio||1;
    const cssW=Math.max(320, Math.floor(rect.width || parent.clientWidth || 800));
    const cssH=Math.max(220, Math.floor(rect.height|| parent.clientHeight|| Math.round(cssW*9/16)));
    cvs.width=Math.floor(cssW*dpr); cvs.height=Math.floor(cssH*dpr);
    cvs.style.width=cssW+"px"; cvs.style.height=cssH+"px";
    if(!initedCamRef.current){
      camRef.current.scale=1;
      camRef.current.x = clamp((WORLD_W - cssW/camRef.current.scale)/2, 0, Math.max(0, WORLD_W - cssW/camRef.current.scale));
      camRef.current.y = clamp((WORLD_H - cssH/camRef.current.scale)/2, 0, Math.max(0, WORLD_H - cssH/camRef.current.scale));
      initedCamRef.current = true;
    }
  }

  // Resize
  useEffect(()=>{ const ro=new ResizeObserver(resizeCanvas); if(containerRef.current) ro.observe(containerRef.current); return ()=>ro.disconnect(); },[]);

  // 初始化贴图预览
  useEffect(() => { initTexturePreviews(); }, []);

  // 加载存档
  useEffect(()=>{
    resizeCanvas();
    const data=loadFromStorage();
    if(data){
      fishRef.current=data.fish??[]; foodRef.current=data.food??[]; nextIdRef.current=Math.max(1,data.nextId??1);
      setFishCount(fishRef.current.length); setFoodCount(foodRef.current.length);
      for(const f of fishRef.current){ 
        if(f.textureDataUrl){ const img=new Image(); img.src=f.textureDataUrl; texCacheRef.current.set(f.id,img); }
        if(!f.shape) f.shape = "angelfish"; // 为旧存档设置默认形状
      }
    }
  },[]);

  // 离开保存
  useEffect(()=>{
    const onBeforeUnload=()=>saveToStorage();
    const onVisibility=()=>{ if(document.visibilityState==="hidden") saveToStorage(); };
    window.addEventListener("beforeunload", onBeforeUnload);
    document.addEventListener("visibilitychange", onVisibility);
    return ()=>{ window.removeEventListener("beforeunload", onBeforeUnload); document.removeEventListener("visibilitychange", onVisibility); };
  },[]);

  // === S6.0：登录匿名账号 + 云端同步（轻量） ===
  useEffect(() => {
    (async () => {
      const uid = await ensureAnonAuth();  // 匿名登录
      console.log("Firebase anon uid:", uid);

      // 1) 初次拉取云数据（若存在），与本地择优合并（谁新用谁）
      try {
        const cloud = await loadCloud(pondId);
        const localSavedAt = loadFromStorage()?.savedAt ? new Date(loadFromStorage()!.savedAt).getTime() : 0;
        const cloudTime = (cloud as any)?.updatedAt?.toMillis?.() ?? 0;

        if (cloud && cloudTime > localSavedAt) {
          // 用云端覆盖本地（轻量版：不含 textureDataUrl）
          fishRef.current = (cloud.fish ?? []).map((f: any) => ({ ...f })) as any;
          foodRef.current = (cloud.food ?? []).map((fd: any) => ({ ...fd }));
          nextIdRef.current = cloud.nextId ?? 1;
          setFishCount(fishRef.current.length);
          setFoodCount(foodRef.current.length);
          scheduleSave(); // 同步回本地存档 v3
        } else {
          // 本地更新云端（轻量）
          scheduleCloudSave(800);
        }
      } catch (e) { console.warn("cloud init failed", e); }

      // 2) 监听云端变更（他端修改时合并）
      const un = listenCloud(pondId, (cloud) => {
        if (_ignoreNextCloud.current) return; // 自己刚写过，忽略一次
        // 简单策略：直接覆盖运行时状态（轻量）
        fishRef.current = (cloud.fish ?? []) as any;
        foodRef.current = (cloud.food ?? []);
        nextIdRef.current = cloud.nextId ?? 1;
        setFishCount(fishRef.current.length);
        setFoodCount(foodRef.current.length);
        scheduleSave(); // 写回本地
      });
      return () => un();
    })();
  }, []);

  // 相机工具
  function getCssSize(){ const cvs=canvasRef.current!; const rect=cvs.getBoundingClientRect(); return {cssW:rect.width, cssH:rect.height}; }
  function ensureCamInBounds(){ const {cssW,cssH}=getCssSize(); const cam=camRef.current;
    const viewW=cssW/cam.scale, viewH=cssH/cam.scale;
    cam.x=clamp(cam.x,0,Math.max(0,WORLD_W-viewW)); cam.y=clamp(cam.y,0,Math.max(0,WORLD_H-viewH)); }
  function screenToWorld(sx:number,sy:number){ const cam=camRef.current; return { x: cam.x + sx/cam.scale, y: cam.y + sy/cam.scale }; }
  function zoomAt(sx:number,sy:number,factor:number){ const {x:wx,y:wy}=screenToWorld(sx,sy); const cam=camRef.current;
    cam.scale = clamp(cam.scale*factor, SCALE_MIN, SCALE_MAX); cam.x = wx - sx/cam.scale; cam.y = wy - sy/cam.scale; ensureCamInBounds(); }
  function zoomInCenter(){ const rect=canvasRef.current!.getBoundingClientRect(); zoomAt(rect.width/2, rect.height/2, ZOOM_STEP); }
  function zoomOutCenter(){ const rect=canvasRef.current!.getBoundingClientRect(); zoomAt(rect.width/2, rect.height/2, 1/ZOOM_STEP); }
  function resetView(){ const {cssW,cssH}=getCssSize(); const cam=camRef.current; cam.scale=1;
    cam.x=clamp((WORLD_W-cssW/cam.scale)/2,0,Math.max(0,WORLD_W-cssW/cam.scale));
    cam.y=clamp((WORLD_H-cssH/cam.scale)/2,0,Math.max(0,WORLD_H-cssH/cam.scale)); }
  function fitAll(){ const {cssW,cssH}=getCssSize(); const cam=camRef.current;
    cam.scale = clamp(Math.min(cssW/WORLD_W, cssH/WORLD_H), SCALE_MIN, SCALE_MAX);
    cam.x=0; cam.y=0; ensureCamInBounds(); }

  // 添加随机鱼（当前视野内）
  function addFish(){
    if(fishRef.current.length>=MAX_FISH_COUNT) return;
    const {cssW,cssH}=getCssSize(); const cam=camRef.current;
    const viewW=cssW/cam.scale, viewH=cssH/cam.scale;
    const angle=rand(0,Math.PI*2); const spd=rand(FISH_SPEED_MIN,FISH_SPEED_MAX); const id=nextIdRef.current++;
    const f:Fish={ id, x:rand(cam.x+40,cam.x+viewW-40), y:rand(cam.y+40,cam.y+viewH-40),
      vx:Math.cos(angle)*spd, vy:Math.sin(angle)*spd, speed:spd, sizeScale:rand(0.9,1.1),
      color:randomFishColor(), vision:FISH_VISION, targetFoodId:null, wanderT:rand(0,1000) };
    fishRef.current.push(f); setFishCount(fishRef.current.length); scheduleSave(); scheduleCloudSave();
  }

  function addFishWithTexture(texKey: TextureKey) {
    const def = TEXTURE_PACK.find(d => d.key === texKey)!;
    const dataUrl = def.make(256, 128);          // 生成正式贴图
    // —— 放在"当前视野"里，和 addFish() 一致 —— //
    const rect = canvasRef.current!.getBoundingClientRect();
    const cam = camRef.current;
    const viewW = rect.width / cam.scale, viewH = rect.height / cam.scale;
    const angle = rand(0, Math.PI * 2);
    const spd = rand(FISH_SPEED_MIN, FISH_SPEED_MAX);
    const id = nextIdRef.current++;

    const f: Fish = {
      id,
      x: rand(cam.x + 40, cam.x + viewW - 40),
      y: rand(cam.y + 40, cam.y + viewH - 40),
      vx: Math.cos(angle) * spd,
      vy: Math.sin(angle) * spd,
      speed: spd,
      sizeScale: 1.0,
      color: randomFishColor(),
      vision: FISH_VISION,
      targetFoodId: null,
      wanderT: rand(0, 1000),
      ownerName: undefined,
      petName: def.label,            // 默认名字用贴图名，可改
      textureDataUrl: dataUrl,
      shape: def.shape,              // ✅ 搭配轮廓
    };

    fishRef.current.push(f);
    setFishCount(fishRef.current.length);

    // 纹理缓存
    const img = new Image(); img.src = dataUrl;
    texCacheRef.current.set(id, img);

    scheduleSave();
  }

  function clearSaveAndReset(){
    try{localStorage.removeItem(STORAGE_KEY_V3);}catch{}
    fishRef.current=[]; foodRef.current=[]; nextIdRef.current=1;
    setFishCount(0); setFoodCount(0); texCacheRef.current.clear(); scheduleSave(); scheduleCloudSave();
  }

  // —— 交互：投喂 / 拖拽 / 缩放 —— //
  function onPointerDown(e:React.PointerEvent<HTMLCanvasElement>){
    const rect=(e.target as HTMLCanvasElement).getBoundingClientRect();
    const sx=e.clientX-rect.left, sy=e.clientY-rect.top;
    // 右键/中键或空格：拖拽
    if(e.button===1 || e.button===2 || spaceDownRef.current){
      panningRef.current=true; panStartRef.current={sx,sy,camX:camRef.current.x,camY:camRef.current.y};
      (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId); e.preventDefault(); return;
    }
    panStartRef.current={sx,sy,camX:camRef.current.x,camY:camRef.current.y};
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
  }
  function onPointerMove(e:React.PointerEvent<HTMLCanvasElement>){
    if(!(panningRef.current || spaceDownRef.current)) return;
    const rect=(e.target as HTMLCanvasElement).getBoundingClientRect();
    const sx=e.clientX-rect.left, sy=e.clientY-rect.top;
    const cam=camRef.current; const start=panStartRef.current;
    const dx=(sx-start.sx)/cam.scale, dy=(sy-start.sy)/cam.scale;
    cam.x = start.camX - dx; cam.y = start.camY - dy; ensureCamInBounds(); e.preventDefault();
  }
  function onPointerUp(e:React.PointerEvent<HTMLCanvasElement>){
    const rect=(e.target as HTMLCanvasElement).getBoundingClientRect();
    const sx=e.clientX-rect.left, sy=e.clientY-rect.top;
    if(panningRef.current || spaceDownRef.current || e.button===1 || e.button===2){
      panningRef.current=false; (e.target as HTMLCanvasElement).releasePointerCapture(e.pointerId); return;
    }
    // 左键点击投喂（世界坐标）
    const wpos=screenToWorld(sx,sy); const id=nextIdRef.current++; const v=pickFoodVariant();
    foodRef.current.push({id,x:clamp(wpos.x,0,WORLD_W),y:clamp(wpos.y,0,WORLD_H),r:v.radius,kind:v.kind,growPct:v.growPct});
    setFoodCount(foodRef.current.length); scheduleSave(); scheduleCloudSave(); (e.target as HTMLCanvasElement).releasePointerCapture(e.pointerId);
  }
  function onWheel(e:React.WheelEvent<HTMLCanvasElement>){
    const rect=(e.target as HTMLCanvasElement).getBoundingClientRect();
    zoomAt(e.clientX-rect.left, e.clientY-rect.top, Math.exp(-e.deltaY*0.0015)); e.preventDefault();
  }
  function onContextMenu(e:React.MouseEvent){ e.preventDefault(); }

  // 空格拖拽
  useEffect(()=>{ const onKeyDown=(e:KeyboardEvent)=>{ if(e.code==="Space") spaceDownRef.current=true; };
    const onKeyUp=(e:KeyboardEvent)=>{ if(e.code==="Space") spaceDownRef.current=false; };
    window.addEventListener("keydown",onKeyDown); window.addEventListener("keyup",onKeyUp);
    return ()=>{ window.removeEventListener("keydown",onKeyDown); window.removeEventListener("keyup",onKeyUp); };
  },[]);

  // 主循环
  useEffect(()=>{
    const cvs=canvasRef.current!, ctx=cvs.getContext("2d")!; resizeCanvas();
    const step=(t:number)=>{
      ctx.globalAlpha=1; ctx.globalCompositeOperation="source-over";
      const now=t/1000; const last=lastTimeRef.current??now; const dt=clamp(now-last,0,0.05); lastTimeRef.current=now;

      // 相机 + DPR
      const dpr=window.devicePixelRatio||1; const cam=camRef.current;
      ctx.setTransform(dpr*cam.scale,0,0,dpr*cam.scale, -cam.x*dpr*cam.scale, -cam.y*dpr*cam.scale);

      // 背景：海洋风格（替代原先的浅蓝背景 + 水纹）
      drawOceanBackground(ctx, now);

      // 饲料
      for(const fd of foodRef.current) drawFood(ctx,fd,now);

      // 更新鱼
      const foods=foodRef.current; let ate=false;
      for(const f of fishRef.current){
        let target:Food|null=null, dMin=Infinity;
        for(const fd of foods){ const d=dist(f.x,f.y,fd.x,fd.y); if(d<f.vision && d<dMin){dMin=d; target=fd;} }
        let dvx=f.vx, dvy=f.vy;
        const effSpeed = f.speed * speedMultiplier(f.sizeScale);
        if(target){ const dx=target.x-f.x, dy=target.y-f.y, len=Math.hypot(dx,dy)||1; dvx=(dx/len)*effSpeed; dvy=(dy/len)*effSpeed; }
        else{ f.wanderT+=dt; const wobble=Math.sin(f.wanderT*1.8+f.id*1.37)*0.6;
          const curLen=Math.hypot(f.vx,f.vy)||1; let vx=f.vx/curLen, vy=f.vy/curLen;
          const nx=-vy, ny=vx; vx+=nx*wobble*0.25; vy+=ny*wobble*0.25; const len2=Math.hypot(vx,vy)||1; dvx=(vx/len2)*effSpeed; dvy=(vy/len2)*effSpeed; }
        f.vx=lerp(f.vx,dvx,FISH_TURN_SMOOTH); f.vy=lerp(f.vy,dvy,FISH_TURN_SMOOTH);
        f.x+=f.vx*dt; f.y+=f.vy*dt;

        // 边界
        const margin=14*f.sizeScale;
        if(f.x<margin){f.x=margin; f.vx=Math.abs(f.vx);} else if(f.x>WORLD_W-margin){f.x=WORLD_W-margin; f.vx=-Math.abs(f.vx);}
        if(f.y<margin){f.y=margin; f.vy=Math.abs(f.vy);} else if(f.y>WORLD_H-margin){f.y=WORLD_H-margin; f.vy=-Math.abs(f.vy);}

        // 吃饭（递减 + 上限）
        const eatR=EAT_RADIUS*f.sizeScale;
        for(let i=foods.length-1;i>=0;i--){ const fd=foods[i];
          if(dist(f.x,f.y,fd.x,fd.y)<=eatR+fd.r){
            foods.splice(i,1);
            const eff = fd.growPct / (1 + (f.sizeScale-1)*0.8);
            f.sizeScale = Math.min(SIZE_SCALE_MAX, f.sizeScale*(1+eff));
            ate=true;
          }
        }
      }
      if(ate) { scheduleSave(); scheduleCloudSave(); }
      setFoodCount(foods.length);

      // 绘制鱼
      for(const f of fishRef.current){
        const angle=Math.atan2(f.vy,f.vx); const base=BASE_FISH_SIZE*f.sizeScale;
        const { path, box, flipX } = getOutlinePathForFish(f);
        const bodyLen=base*1.6, bodyH=base*0.9; const tailWobble=Math.sin((now+f.id)*8)*(base*0.22);

        ctx.save(); ctx.translate(f.x,f.y); ctx.rotate(angle);
        if (flipX) { ctx.scale(-1,1); ctx.translate(-bodyLen*0.5,0); }
        
        if(!f.textureDataUrl || !texCacheRef.current.get(f.id)){
          const grdBody=ctx.createLinearGradient(0,-bodyH,0,bodyH); grdBody.addColorStop(0,"rgba(255,255,255,0.9)"); grdBody.addColorStop(1,f.color);
          ctx.fillStyle=grdBody; ctx.beginPath();
          if (path) {
            ctx.scale(bodyLen/box.w, bodyH/box.h);
            ctx.fill(path);
          } else {
            beginFishBodyPath_byShape(ctx, f.shape ?? "angelfish", bodyLen, bodyH);
            ctx.fill();
          }
        }else{
          const img=texCacheRef.current.get(f.id)!; ctx.save(); ctx.beginPath();
          beginFishBodyPath_byShape(ctx, f.shape ?? "angelfish", bodyLen, bodyH);
          ctx.clip();
          
          // 泳动微波效果（可选）
          const strips = 28;
          const imgW = img.width, imgH = img.height;
          for (let i = 0; i < strips; i++) {
            const sx = Math.floor((i / strips) * imgW);
            const sw = Math.floor(imgW / strips);
            const dx = -bodyLen * 0.5 + (i / strips) * bodyLen;
            const dw = bodyLen / strips;
            const wobble = Math.sin(now * 6 + i * 0.6 + f.id * 1.7) * (bodyH * 0.02);
            ctx.drawImage(img, sx, 0, sw, imgH, dx, -bodyH * 0.5 + wobble, dw, bodyH);
          }

          // 顶光效果
          ctx.save();
          ctx.globalCompositeOperation = "soft-light";
          const topLight = ctx.createLinearGradient(0, -bodyH*0.6, 0, +bodyH*0.6);
          topLight.addColorStop(0.00, "rgba(255,255,255,0.75)");
          topLight.addColorStop(0.35, "rgba(255,255,255,0.25)");
          topLight.addColorStop(1.00, "rgba(255,255,255,0.00)");
          ctx.fillStyle = topLight;
          ctx.beginPath(); beginFishBodyPath_byShape(ctx, f.shape ?? "angelfish", bodyLen, bodyH); ctx.fill();
          ctx.restore();

          // 腹部阴影
          ctx.save();
          ctx.globalCompositeOperation = "multiply";
          const belly = ctx.createRadialGradient(0, bodyH*0.25, bodyH*0.1, 0, bodyH*0.25, bodyH*0.7);
          belly.addColorStop(0.00, "rgba(0,0,0,0.00)");
          belly.addColorStop(1.00, "rgba(0,0,0,0.22)");
          ctx.fillStyle = belly;
          ctx.beginPath(); beginFishBodyPath_byShape(ctx, f.shape ?? "angelfish", bodyLen, bodyH); ctx.fill();
          ctx.restore();

          ctx.restore();
        }

        // 外描边
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = "rgba(0,0,0,0.18)";
        ctx.beginPath(); beginFishBodyPath_byShape(ctx, f.shape ?? "angelfish", bodyLen, bodyH); ctx.stroke();

        // 内暗沿边
        ctx.save();
        ctx.globalCompositeOperation = "source-atop";
        ctx.lineWidth = 1.6;
        ctx.strokeStyle = "rgba(0,0,0,0.12)";
        ctx.beginPath(); beginFishBodyPath_byShape(ctx, f.shape ?? "angelfish", bodyLen*0.985, bodyH*0.985);
        ctx.stroke();
        ctx.restore();

        // 尾
        ctx.beginPath(); ctx.moveTo(-bodyLen*0.45,0); ctx.lineTo(-bodyLen*0.65,-bodyH*0.35+tailWobble); ctx.lineTo(-bodyLen*0.65,bodyH*0.35-tailWobble); ctx.closePath(); ctx.fill();
        // 眼
        ctx.fillStyle="#0b1b2b"; ctx.beginPath(); ctx.arc(bodyLen*0.28,-bodyH*0.12,Math.max(1.5,base*0.07),0,Math.PI*2); ctx.fill();

        // 视野调试
        if((window as any).__showVision){ ctx.strokeStyle="rgba(0,0,0,0.08)"; ctx.setLineDash([6,6]); ctx.beginPath(); ctx.arc(0,0,f.vision,0,Math.PI*2); ctx.stroke(); ctx.setLineDash([]); }
        ctx.restore();

        if(f.petName){ ctx.save(); ctx.font="10px system-ui, -apple-system, Segoe UI, Roboto, sans-serif"; ctx.fillStyle="rgba(0,0,0,0.72)"; ctx.textAlign="center"; ctx.fillText(f.petName, f.x, f.y - base*1.2); ctx.restore(); }
      }

      animRef.current=requestAnimationFrame(step);
    };
    animRef.current=requestAnimationFrame(step);
    return ()=>{ if(animRef.current) cancelAnimationFrame(animRef.current); };
  },[]);

  // —— UI/绘制饲料 —— //
  function drawFood(ctx:CanvasRenderingContext2D, fd:Food, now:number){
    if(fd.kind==="common"){ ctx.fillStyle="#8b5e3c"; ctx.beginPath(); ctx.arc(fd.x,fd.y,fd.r,0,Math.PI*2); ctx.fill(); return; }
    if(fd.kind==="uncommon"){
      const pulse=0.5+0.5*Math.sin(now*4+fd.id);
      ctx.save(); ctx.globalAlpha=0.35+0.35*pulse; ctx.strokeStyle="rgba(55,199,212,0.8)"; ctx.lineWidth=2;
      ctx.beginPath(); ctx.arc(fd.x,fd.y,fd.r+4+pulse*2,0,Math.PI*2); ctx.stroke(); ctx.restore();
      const grd=ctx.createRadialGradient(fd.x,fd.y,0,fd.x,fd.y,fd.r+1);
      grd.addColorStop(0,"#8ef3ff"); grd.addColorStop(1,"#37c7d4"); ctx.fillStyle=grd;
      ctx.beginPath(); ctx.arc(fd.x,fd.y,fd.r,0,Math.PI*2); ctx.fill(); return;
    }
    const twinkle=0.6+0.4*Math.sin(now*6+fd.id);
    ctx.save(); const glowR=fd.r+7+twinkle*3; const glow=ctx.createRadialGradient(fd.x,fd.y,0,fd.x,fd.y,glowR);
    glow.addColorStop(0,"rgba(255,215,0,0.9)"); glow.addColorStop(1,"rgba(255,215,0,0.05)");
    ctx.fillStyle=glow; ctx.beginPath(); ctx.arc(fd.x,fd.y,glowR,0,Math.PI*2); ctx.fill();
    ctx.translate(fd.x,fd.y); ctx.rotate((Math.PI/6)*twinkle); ctx.fillStyle="#ffd700"; drawStar(ctx,5,fd.r+2,Math.max(2,fd.r-2)); ctx.fill(); ctx.restore();
  }

  // 按钮条 + 画布 + 绘鱼面板
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="text-xl font-semibold">🐟 小鱼塘 Mini-Game</h2>
        <div className="flex items-center gap-2">
          {/* 视角控制 */}
          <button onClick={zoomOutCenter} className="px-2 py-1 rounded-2xl bg-slate-200 hover:bg-slate-300">➖</button>
          <button onClick={zoomInCenter} className="px-2 py-1 rounded-2xl bg-slate-200 hover:bg-slate-300">➕</button>
          <button onClick={resetView} className="px-2 py-1 rounded-2xl bg-slate-200 hover:bg-slate-300">⟳ 重置</button>
          <button onClick={fitAll} className="px-2 py-1 rounded-2xl bg-slate-200 hover:bg-slate-300">⤢ 全景</button>

          <button onClick={addFish} className="px-3 py-1.5 rounded-2xl shadow-sm bg-sky-500 text-white hover:bg-sky-600 active:scale-[0.98]">+1 条鱼</button>
          
          <div className="relative">
            <button
              onClick={() => setShowTexPicker(v => !v)}
              className="px-3 py-1.5 rounded-2xl shadow-sm bg-indigo-500 text-white hover:bg-indigo-600"
              title="从贴图库添加海洋生物皮肤"
            >🖼 贴图海生物</button>

            {showTexPicker && (
              <div className="absolute right-0 mt-2 w-[360px] p-2 bg-white rounded-xl shadow-lg border grid grid-cols-3 gap-2 z-50">
                {TEXTURE_PACK.map(t => (
                  <button key={t.key}
                    onClick={() => { addFishWithTexture(t.key); setShowTexPicker(false); }}
                    className="group rounded-lg border hover:shadow-sm overflow-hidden text-xs">
                    <img src={t.preview} alt={t.label} className="w-full h-[60px] object-cover" />
                    <div className="px-2 py-1 text-center">{t.label}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={openDesigner} className="px-3 py-1.5 rounded-2xl shadow-sm bg-violet-500 text-white hover:bg-violet-600 active:scale-[0.98]">🎨 自定义新鱼</button>
          <button onClick={openOutlineEditor} className="px-3 py-1.5 rounded-2xl shadow-sm bg-emerald-500 text-white hover:bg-emerald-600 active:scale-[0.98]">🎯 创建新鱼形（两步）</button>
          <button onClick={()=>{ fishRef.current=[]; setFishCount(0); scheduleSave(); scheduleCloudSave(); }} className="px-3 py-1.5 rounded-2xl bg-slate-200 hover:bg-slate-300">清空鱼</button>
          <button onClick={()=>{ foodRef.current=[]; setFoodCount(0); scheduleSave(); scheduleCloudSave(); }} className="px-3 py-1.5 rounded-2xl bg-amber-200 hover:bg-amber-300">清空饲料</button>
          <button onClick={clearSaveAndReset} className="px-3 py-1.5 rounded-2xl bg-rose-200 hover:bg-rose-300">清空存档</button>
        </div>
      </div>

      <div className="text-sm text-slate-600 mb-2">
        滚轮缩放，按住<strong>空格</strong>或<strong>右键/中键</strong>拖拽视角；Alt+V 显示视野圈。
        <span className="ml-2">鱼：{fishCount}</span>
        <span className="ml-3">饲料：{foodCount}</span>
      </div>

      <div ref={containerRef} className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-inner bg-sky-50 border border-sky-100">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-crosshair"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onWheel={onWheel}
          onContextMenu={onContextMenu}
        />
      </div>

      {designerOpen && (
        <FishDesigner
          onCancel={closeDesigner}
          onCreate={(ownerName, petName, dataUrl, shape) => {
            if (fishRef.current.length >= MAX_FISH_COUNT) { closeDesigner(); return; }
            // 把新鱼放在"当前视野"里，方便立即看到
            const rect = canvasRef.current!.getBoundingClientRect();
            const viewW = rect.width / camRef.current.scale;
            const viewH = rect.height / camRef.current.scale;
            const angle = rand(0, Math.PI * 2);
            const spd = rand(FISH_SPEED_MIN, FISH_SPEED_MAX);
            const id = nextIdRef.current++;
            const f: Fish = {
              id,
              x: rand(camRef.current.x + 40, camRef.current.x + viewW - 40),
              y: rand(camRef.current.y + 40, camRef.current.y + viewH - 40),
              vx: Math.cos(angle) * spd,
              vy: Math.sin(angle) * spd,
              speed: spd,
              sizeScale: 1.0,
              color: randomFishColor(),
              vision: FISH_VISION,
              targetFoodId: null,
              wanderT: rand(0, 1000),
              ownerName, petName, textureDataUrl: dataUrl,
              shape,
            };
            fishRef.current.push(f);
            setFishCount(fishRef.current.length);
            if (dataUrl) { const img = new Image(); img.src = dataUrl; texCacheRef.current.set(id, img); }
            scheduleSave();
            closeDesigner();
          }}
        />
      )}
      
      {outlineEditorOpen && (
        <OutlineEditor
          onSave={(outline) => {
            closeOutlineEditor();
            openDetailEditor(outline);
          }}
          onCancel={closeOutlineEditor}
        />
      )}
      
      {detailEditorOpen && currentOutline && (
        <DetailEditor
          outline={currentOutline}
          onSave={(svg) => {
            closeDetailEditor();
            if (fishRef.current.length >= MAX_FISH_COUNT) return;
            
            const rect = canvasRef.current!.getBoundingClientRect();
            const viewW = rect.width / camRef.current.scale;
            const viewH = rect.height / camRef.current.scale;
            const angle = rand(0, Math.PI * 2);
            const spd = rand(FISH_SPEED_MIN, FISH_SPEED_MAX);
            const id = nextIdRef.current++;
            
            const f: Fish = {
              id,
              x: rand(camRef.current.x + 40, camRef.current.x + viewW - 40),
              y: rand(camRef.current.y + 40, camRef.current.y + viewH - 40),
              vx: Math.cos(angle) * spd,
              vy: Math.sin(angle) * spd,
              speed: spd,
              sizeScale: 1.0,
              color: randomFishColor(),
              vision: FISH_VISION,
              targetFoodId: null,
              wanderT: rand(0, 1000),
              shapeKey: `custom:${currentOutline!.id}`,
              textureSvg: svg.svgText,
              textureDataUrl: svg.previewPng,
              shape: "angelfish" // 使用默认形状作为占位
            };
            
            fishRef.current.push(f);
            setFishCount(fishRef.current.length);
            if (svg.previewPng) {
              const img = new Image();
              img.src = svg.previewPng;
              texCacheRef.current.set(id, img);
            }
            scheduleSave();
          }}
          onBack={() => {
            closeDetailEditor();
            openOutlineEditor();
          }}
        />
      )}
      
    </div>
  );
}

// —— 绘制面板（受限椭圆） ——
function FishDesigner({ onCancel, onCreate }: {
  onCancel: () => void;
  onCreate: (ownerName: string, petName: string, dataUrl: string, shape: FishShape) => void;
}){
  const drawRef = useRef<HTMLCanvasElement|null>(null);
  const frameRef = useRef<HTMLCanvasElement|null>(null);
  const [brushColor, setBrushColor] = useState("#ff6b6b");
  const [brushSize, setBrushSize] = useState(8);
  const [isEraser, setIsEraser] = useState(false);
  const [ownerName, setOwnerName] = useState("");
  const [petName, setPetName] = useState("");
  const [shape, setShape] = useState<FishShape>("angelfish");
  const shapeRef = useRef<FishShape>("angelfish");
  useEffect(() => { shapeRef.current = shape; }, [shape]);

  const CSS_W=360, CSS_H=200;
  const fishFrame = { cx: CSS_W*0.5, cy: CSS_H*0.5, L: CSS_W*0.68, H: CSS_H*0.60 };

  function setupHiDPICanvas(cvs: HTMLCanvasElement, cssW: number, cssH: number) {
    const dpr = window.devicePixelRatio || 1;
    cvs.width = Math.floor(cssW * dpr);
    cvs.height = Math.floor(cssH * dpr);
    cvs.style.width = cssW + "px";
    cvs.style.height = cssH + "px";
    const ctx = cvs.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  }

  function renderFrame(s?: FishShape) {
    const cvs = frameRef.current!, ctx = cvs.getContext("2d")!;
    ctx.clearRect(0,0,CSS_W,CSS_H);
    ctx.save();
    ctx.strokeStyle = "rgba(2,132,199,0.9)";
    ctx.lineWidth = 2;
    ctx.setLineDash([6,6]);
    ctx.beginPath();
    beginFishBodyPathAbs_byShape(ctx, s ?? shapeRef.current, fishFrame.cx, fishFrame.cy, fishFrame.L, fishFrame.H);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = "rgba(0,0,0,0.45)";
    ctx.font = "12px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("只允许在鱼体轮廓内绘制（超出无效）", CSS_W/2, 18);
    ctx.restore();
  }

  function remaskExistingDrawingToShape() {
    const cvs = drawRef.current!, ctx = cvs.getContext("2d")!;
    ctx.save();
    ctx.globalCompositeOperation = "destination-in";
    ctx.beginPath();
    beginFishBodyPathAbs_byShape(ctx, shapeRef.current, fishFrame.cx, fishFrame.cy, fishFrame.L, fishFrame.H);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.restore();
  }

  function clipToCurrentShape(ctx: CanvasRenderingContext2D) {
    const s = shapeRef.current;
    ctx.beginPath();
    beginFishBodyPathAbs_byShape(ctx, s, fishFrame.cx, fishFrame.cy, fishFrame.L, fishFrame.H);
    ctx.clip();
  }

  useEffect(()=>{
    const drawCtx = setupHiDPICanvas(drawRef.current!, CSS_W, CSS_H);
    drawCtx.fillStyle = "#f8fafc";
    drawCtx.fillRect(0,0,CSS_W,CSS_H);
    
    setupHiDPICanvas(frameRef.current!, CSS_W, CSS_H);
    renderFrame(shape);
  },[]);

  const drawingRef = useRef(false);
  const lastRef = useRef<{x:number;y:number}|null>(null);
  function clipToFish(ctx:CanvasRenderingContext2D) {
    const s = shapeRef.current;  // ✅ 永远是最新形状
    ctx.beginPath();
    beginFishBodyPathAbs_byShape(ctx, s, fishFrame.cx, fishFrame.cy, fishFrame.L, fishFrame.H);
    ctx.clip();
  }
  function getPos(e:React.PointerEvent<HTMLCanvasElement>){ const r=(e.target as HTMLCanvasElement).getBoundingClientRect(); return {x:e.clientX-r.left, y:e.clientY-r.top}; }
  function onPointerDown(e:React.PointerEvent<HTMLCanvasElement>){ 
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId); 
    drawingRef.current=true; 
    lastRef.current=getPos(e);
    remaskExistingDrawingToShape();
  }
  function onPointerUp(e:React.PointerEvent<HTMLCanvasElement>){ drawingRef.current=false; lastRef.current=null; (e.target as HTMLCanvasElement).releasePointerCapture(e.pointerId); }
  function drawFrameOutline() {
    const cvs = drawRef.current!;
    const ctx = cvs.getContext("2d")!;
    ctx.save();
    ctx.strokeStyle = "rgba(2,132,199,0.9)";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    beginFishBodyPathAbs_byShape(ctx, shape, fishFrame.cx, fishFrame.cy, fishFrame.L, fishFrame.H);
    ctx.stroke();
    ctx.restore();
  }

  function onPointerMove(e:React.PointerEvent<HTMLCanvasElement>){
    if(!drawingRef.current) return; const cvs=drawRef.current!, ctx=cvs.getContext("2d")!;
    const cur=getPos(e); const last=lastRef.current??cur;
    ctx.save(); clipToFish(ctx); ctx.lineCap="round"; ctx.lineJoin="round"; ctx.lineWidth=brushSize;
    if(isEraser){ ctx.globalCompositeOperation="destination-out"; ctx.strokeStyle="rgba(0,0,0,1)"; }
    else{ ctx.globalCompositeOperation="source-over"; ctx.strokeStyle=brushColor; }
    ctx.beginPath(); ctx.moveTo(last.x,last.y); ctx.lineTo(cur.x,cur.y); ctx.stroke(); ctx.restore();
    lastRef.current=cur;
  }
  function clearDrawing(){ const cvs=drawRef.current!, ctx=cvs.getContext("2d")!; ctx.save(); clipToFish(ctx); ctx.clearRect(0,0,CSS_W,CSS_H); ctx.restore(); }
  function handleCreate(){ if(!ownerName.trim()||!petName.trim()){ alert("请填写 用户名字 和 宠物鱼名字"); return; }
    const dataUrl=drawRef.current!.toDataURL("image/png"); onCreate(ownerName.trim(), petName.trim(), dataUrl, shape); }

  const COLORS=["#ff6b6b","#f59e0b","#22c55e","#3b82f6","#8b5cf6","#222222"];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-[720px] bg-white rounded-2xl shadow-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">🎨 自定义宠物鱼</h3>
          <button onClick={onCancel} className="px-2 py-1 text-slate-600 hover:text-black">关闭</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto,220px] gap-4">
          <div className="flex flex-col items-center">
            <div className="relative">
              <canvas
                ref={drawRef}
                className="rounded-xl border border-sky-200 shadow-inner touch-none bg-white"
                style={{ width: 360, height: 200 }}
                onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}
              />
              {/* 轮廓层：不接收事件 */}
              <canvas
                ref={frameRef}
                className="absolute inset-0 pointer-events-none"
                style={{ width: 360, height: 200 }}
              />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="text-sm text-slate-600 mr-1">鱼形：</span>
              {[
                ["angelfish","神仙鱼"], ["swordfish","旗鱼"], ["longtail","长尾斗鱼"]
              ].map(([key,label]) => (
                <button
                  key={key}
                  onClick={() => { 
                    const s = key as FishShape;
                    setShape(s);
                    shapeRef.current = s;               // 立即可用（避免闭包旧值）
                    remaskExistingDrawingToShape();     // 旧笔迹按新轮廓立刻裁一遍
                    renderFrame(s);                     // 轮廓层清屏后重画新轮廓
                    const ctx = drawRef.current!.getContext("2d")!;
                    ctx.fillStyle = "#f8fafc"; 
                    ctx.fillRect(0, 0, CSS_W, CSS_H);
                    ctx.fillStyle = "rgba(0,0,0,0.45)"; 
                    ctx.font = "12px system-ui, sans-serif"; 
                    ctx.textAlign = "center";
                    ctx.fillText("只允许在鱼体轮廓内绘制（超出无效）", CSS_W/2, 20);
                  }}
                  className={`px-2 py-1 rounded-md border ${shape===key ? "bg-sky-600 text-white" : "bg-white"}`}
                >{label}</button>
              ))}
              {COLORS.map(c=>(
                <button key={c} onClick={()=>{setBrushColor(c); setIsEraser(false);}}
                  className="w-6 h-6 rounded-full border border-black/10" style={{background:c}} title={c} />
              ))}
              <button onClick={()=>setIsEraser(!isEraser)} className={`px-2 py-1 rounded-lg border ${isEraser?"bg-slate-700 text-white":"bg-white"}`}>橡皮</button>
              <label className="text-sm text-slate-600">笔刷
                <input type="range" min={2} max={24} value={brushSize} onChange={e=>setBrushSize(parseInt(e.target.value))} className="ml-2 align-middle"/>
              </label>
              <button onClick={clearDrawing} className="px-2 py-1 rounded-lg border bg-white hover:bg-slate-50">清空</button>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm text-slate-600 mb-1">用户名字</label>
              <input value={ownerName} onChange={e=>setOwnerName(e.target.value)} className="w-full px-3 py-2 rounded-lg border" placeholder="例如：YANG JIZHOU"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">宠物鱼名字</label>
              <input value={petName} onChange={e=>setPetName(e.target.value)} className="w-full px-3 py-2 rounded-lg border" placeholder="例如：小蓝"/>
            </div>
            <div className="text-xs text-slate-500">说明：只能在椭圆轮廓内绘制；你的图样会作为鱼体贴图保存（本地存档）。</div>
            <div className="flex gap-2 pt-2">
              <button onClick={handleCreate} className="px-3 py-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700">加入鱼塘</button>
              <button onClick={onCancel} className="px-3 py-2 rounded-xl border bg-white hover:bg-slate-50">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
