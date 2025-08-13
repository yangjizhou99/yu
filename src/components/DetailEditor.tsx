import React, { useRef, useState, useEffect } from "react";
import { UserOutline, UserFishSVG, pointsToOpenPathD, uuid, saveSvgLib, loadSvgLib, saveDraft, CreationDraft } from "../types/fish";

interface DetailEditorProps {
  outline: UserOutline;
  onSave: (svg: UserFishSVG) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function DetailEditor({ outline, onSave, onBack, onNext }: DetailEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [strokes, setStrokes] = useState<Array<{color: string, width: number, pts: Array<{x: number, y: number}>}>>([]);
  const [currentStroke, setCurrentStroke] = useState<{color: string, width: number, pts: Array<{x: number, y: number}>} | null>(null);
  const [color, setColor] = useState("#3b82f6");
  const [width, setWidth] = useState(8);
  const [name, setName] = useState("");
  const [isEraser, setIsEraser] = useState(false);

  // 初始化画布
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = outline.viewBox.w * dpr;
    canvas.height = outline.viewBox.h * dpr;
    canvas.style.width = `${outline.viewBox.w}px`;
    canvas.style.height = `${outline.viewBox.h}px`;
    ctx.scale(dpr, dpr);

    // 绘制背景和轮廓
    redrawCanvas();
  }, [outline]);

  // 重绘画布
  const redrawCanvas = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    // 绘制背景
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, outline.viewBox.w, outline.viewBox.h);

    // 绘制轮廓虚线
    ctx.strokeStyle = "#93c5fd";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    const path = new Path2D(outline.pathD);
    ctx.stroke(path);
    ctx.setLineDash([]);

    // 绘制所有笔迹
    for (const stroke of strokes) {
      if (stroke.pts.length < 2) continue;
      
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(stroke.pts[0].x, stroke.pts[0].y);
      for (let i = 1; i < stroke.pts.length; i++) {
        ctx.lineTo(stroke.pts[i].x, stroke.pts[i].y);
      }
      ctx.stroke();
    }

    // 绘制当前笔迹
    if (currentStroke && currentStroke.pts.length >= 2) {
      ctx.strokeStyle = currentStroke.color;
      ctx.lineWidth = currentStroke.width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(currentStroke.pts[0].x, currentStroke.pts[0].y);
      for (let i = 1; i < currentStroke.pts.length; i++) {
        ctx.lineTo(currentStroke.pts[i].x, currentStroke.pts[i].y);
      }
      ctx.stroke();
    }

    ctx.restore();
  };

  // 更新画布
  useEffect(() => {
    redrawCanvas();
  }, [strokes, currentStroke]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (outline.viewBox.w / rect.width);
    const y = (e.clientY - rect.top) * (outline.viewBox.h / rect.height);

    const stroke = {
      color: isEraser ? "#f8fafc" : color,
      width: isEraser ? width * 2 : width,
      pts: [{ x, y }]
    };
    setCurrentStroke(stroke);
    canvas.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!currentStroke) return;
    
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (outline.viewBox.w / rect.width);
    const y = (e.clientY - rect.top) * (outline.viewBox.h / rect.height);

    setCurrentStroke({
      ...currentStroke,
      pts: [...currentStroke.pts, { x, y }]
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!currentStroke) return;
    
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (outline.viewBox.w / rect.width);
    const y = (e.clientY - rect.top) * (outline.viewBox.h / rect.height);

    const newStroke = {
      ...currentStroke,
      pts: [...currentStroke.pts, { x, y }]
    };
    
    setStrokes([...strokes, newStroke]);
    setCurrentStroke(null);
    canvas.releasePointerCapture(e.pointerId);
  };

  const handleUndo = () => {
    if (strokes.length > 0) {
      setStrokes(strokes.slice(0, -1));
    }
  };

  const handleClear = () => {
    setStrokes([]);
  };

  const handleSave = async () => {
    if (!name.trim()) {
      alert("请输入SVG名称");
      return;
    }

    // 生成SVG文本
    const strokePaths = strokes.map(s => {
      const d = pointsToOpenPathD(s.pts);
      return `<path d="${d}" fill="none" stroke="${s.color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="${s.width}"/>`;
    }).join("");

    const svgText = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${outline.viewBox.w} ${outline.viewBox.h}">
  <defs>
    <clipPath id="mask-${outline.id}">
      <path d="${outline.pathD}"/>
    </clipPath>
  </defs>
  <g clip-path="url(#mask-${outline.id})">
    ${strokePaths}
  </g>
</svg>`.trim();

    // 生成预览PNG
    const previewPng = await new Promise<string>((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = Math.round(256 * outline.viewBox.h / outline.viewBox.w);
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/png"));
      };
      img.src = `data:image/svg+xml;utf8,${encodeURIComponent(svgText)}`;
    });

    const svg: UserFishSVG = {
      id: `svg-${uuid()}`,
      name: name.trim(),
      outlineId: outline.id,
      svgText,
      previewPng,
      createdAt: new Date().toISOString()
    };

    // 保存到库
    const lib = loadSvgLib();
    lib.push(svg);
    saveSvgLib(lib);

    // 保存草稿到 sessionStorage，准备跳转到 Step3
    const draft: CreationDraft = {
      outlineId: outline.id,
      outlineName: outline.name,
      viewBox: outline.viewBox,
      pathD: outline.pathD,
      headIsLeft: outline.headIsLeft,
      svgId: svg.id,
      svgName: svg.name,
      svgText: svg.svgText,
      previewPng: svg.previewPng!
    };
    
    saveDraft(draft);
    onSave(svg);
    onNext(); // 跳转到 Step3
  };

  const COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#000000"];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-xl font-semibold mb-4">绘制鱼形细节</h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">SVG名称</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="例如：蓝色花纹神仙鱼"
          />
        </div>

        <div className="relative mb-4">
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="w-full border rounded-lg cursor-crosshair"
            style={{ height: outline.viewBox.h }}
          />
          <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
            在轮廓内绘制细节
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {COLORS.map(c => (
            <button
              key={c}
              onClick={() => { setColor(c); setIsEraser(false); }}
              className="w-8 h-8 rounded-full border"
              style={{ backgroundColor: c }}
              title={c}
            />
          ))}
          <button
            onClick={() => setIsEraser(!isEraser)}
            className={`px-3 py-2 rounded-lg border ${isEraser ? "bg-gray-700 text-white" : "bg-white"}`}
          >
            橡皮
          </button>
          <label className="flex items-center gap-2">
            <span className="text-sm">粗细</span>
            <input
              type="range"
              min={2}
              max={24}
              value={width}
              onChange={(e) => setWidth(parseInt(e.target.value))}
            />
          </label>
          <button
            onClick={handleUndo}
            disabled={strokes.length === 0}
            className="px-3 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            撤销
          </button>
          <button
            onClick={handleClear}
            disabled={strokes.length === 0}
            className="px-3 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            清空
          </button>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onBack}
            className="px-4 py-2 border rounded-lg"
          >
            返回修改轮廓
          </button>
          <button
            onClick={handleSave}
            disabled={!name.trim() || strokes.length === 0}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
          >
            保存为SVG
          </button>
        </div>
      </div>
    </div>
  );
}
