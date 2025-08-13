// 轮廓：唯一决定"可画范围"的几何
export type UserOutline = {
  id: string;               // uuid: 'ol-...'
  name: string;             // 用户命名
  viewBox: { w: number; h: number }; // 轮廓的设计坐标系尺寸（px）
  pathD: string;            // SVG path d（闭合路径，含头身鳍尾整体剪影）
  headIsLeft: boolean;      // 保存时已规范化为"头在左？"
  createdAt: string;
};

// 成品：用户在轮廓内绘制出的 SVG（笔迹矢量 + 轮廓clip）
export type UserFishSVG = {
  id: string;               // uuid: 'svg-...'
  name: string;             // 用户命名
  outlineId: string;        // 关联的轮廓
  svgText: string;          // 完整 <svg> 文本
  previewPng?: string;      // 供鱼塘渲染的栅格化预览（dataURL）
  createdAt: string;
};

// 存储键
export const STORAGE_KEY_OUTLINE = "fish-outline-lib-v1";
export const STORAGE_KEY_SVG = "fish-skin-lib-v1";

// 工具函数：保存和加载轮廓库
export function saveOutlineLib(outlines: UserOutline[]) {
  try {
    localStorage.setItem(STORAGE_KEY_OUTLINE, JSON.stringify(outlines));
  } catch {}
}

export function loadOutlineLib(): UserOutline[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_OUTLINE);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

// 工具函数：保存和加载SVG库
export function saveSvgLib(svgs: UserFishSVG[]) {
  try {
    localStorage.setItem(STORAGE_KEY_SVG, JSON.stringify(svgs));
  } catch {}
}

export function loadSvgLib(): UserFishSVG[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_SVG);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

// 工具函数：生成UUID
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// 工具函数：点集转闭合路径
export function pointsToClosedPathD(pts: Array<{x:number,y:number}>, tension=0.5): string {
  if (pts.length < 3) return "";
  const p = pts.slice();
  // 若首尾未靠近，自动闭合：插回起点
  const first = p[0], last = p[p.length-1];
  const needClose = Math.hypot(last.x-first.x, last.y-first.y) > 8;
  if (needClose) p.push({x:first.x,y:first.y});
  // 生成C命令
  let d = `M ${p[0].x.toFixed(2)} ${p[0].y.toFixed(2)} `;
  for (let i=0;i<p.length-1;i++){
    const p0 = p[(i-1+p.length)%p.length], p1=p[i], p2=p[(i+1)%p.length], p3=p[(i+2)%p.length];
    const cp1x = p1.x + (p2.x - p0.x) * tension / 6;
    const cp1y = p1.y + (p2.y - p0.y) * tension / 6;
    const cp2x = p2.x - (p3.x - p1.x) * tension / 6;
    const cp2y = p2.y - (p3.y - p1.y) * tension / 6;
    d += `C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} `;
  }
  return d + "Z"; // 闭合
}

// 工具函数：点集转开放路径（用于笔迹）
export function pointsToOpenPathD(pts: Array<{x:number,y:number}>, tension=0.5): string {
  if (pts.length < 2) return "";
  const p = pts.slice();
  let d = `M ${p[0].x.toFixed(2)} ${p[0].y.toFixed(2)} `;
  for (let i=0;i<p.length-1;i++){
    const p0 = i>0 ? p[i-1] : p[i];
    const p1 = p[i], p2 = p[i+1], p3 = i<p.length-2 ? p[i+2] : p2;
    const cp1x = p1.x + (p2.x - p0.x) * tension / 6;
    const cp1y = p1.y + (p2.y - p0.y) * tension / 6;
    const cp2x = p2.x - (p3.x - p1.x) * tension / 6;
    const cp2y = p2.y - (p3.y - p1.y) * tension / 6;
    d += `C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} `;
  }
  return d;
}

// 工具函数：水平镜像路径
export function mirrorPathD_H(d: string, w: number): string {
  return `M ${w} 0 L 0 0 L ${w} 0 ` + d.replace(/M ([^ ]+) ([^ ]+)/, `M ${w - parseFloat(RegExp.$1)} $2`);
}
