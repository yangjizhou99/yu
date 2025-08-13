import React, { useRef, useEffect, useState } from "react";

interface Props {
  onCancel: () => void;
  onCreate: (species: { name: string; maskDataUrl: string; baseL: number; baseH: number }) => void;
}

export default function SpeciesMaker({ onCancel, onCreate }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [brushSize, setBrushSize] = useState(8);
  const [speciesName, setSpeciesName] = useState("");
  const drawingRef = useRef(false);
  const lastPosRef = useRef<{x: number; y: number} | null>(null);

  // Canvas setup
  useEffect(() => {
    const cvs = canvasRef.current!;
    const dpr = window.devicePixelRatio || 1;
    const cssW = 360;
    const cssH = 200;
    
    cvs.width = Math.floor(cssW * dpr);
    cvs.height = Math.floor(cssH * dpr);
    cvs.style.width = cssW + "px";
    cvs.style.height = cssH + "px";
    
    const ctx = cvs.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, cssW, cssH);
  }, []);

  function getPos(e: React.PointerEvent<HTMLCanvasElement>) {
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    drawingRef.current = true;
    lastPosRef.current = getPos(e);
  }

  function onPointerUp(e: React.PointerEvent<HTMLCanvasElement>) {
    drawingRef.current = false;
    lastPosRef.current = null;
    (e.target as HTMLCanvasElement).releasePointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return;
    
    const cvs = canvasRef.current!;
    const ctx = cvs.getContext("2d")!;
    const currentPos = getPos(e);
    const lastPos = lastPosRef.current || currentPos;

    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = "#000000"; // Black only
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = brushSize;
    
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(currentPos.x, currentPos.y);
    ctx.stroke();

    lastPosRef.current = currentPos;
  }

  function clearCanvas() {
    const cvs = canvasRef.current!;
    const ctx = cvs.getContext("2d")!;
    ctx.clearRect(0, 0, cvs.width, cvs.height);
  }

  function handleCreate() {
    if (!speciesName.trim()) {
      alert("请输入鱼类名称");
      return;
    }

    const cvs = canvasRef.current!;
    // Check if canvas has any black pixels
    const ctx = cvs.getContext("2d")!;
    const imageData = ctx.getImageData(0, 0, cvs.width, cvs.height);
    const data = imageData.data;
    let hasBlackPixels = false;

    for (let i = 0; i < data.length; i += 4) {
      if (data[i] === 0 && data[i+1] === 0 && data[i+2] === 0 && data[i+3] > 0) {
        hasBlackPixels = true;
        break;
      }
    }

    if (!hasBlackPixels) {
      alert("请绘制鱼类轮廓");
      return;
    }

    // Get mask data URL
    const maskDataUrl = cvs.toDataURL("image/png");
    
    // Default dimensions (can be adjusted)
    const baseL = 240;
    const baseH = 140;

    onCreate({
      name: speciesName.trim(),
      maskDataUrl,
      baseL,
      baseH
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-[720px] bg-white rounded-2xl shadow-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">🧬 创建鱼类物种</h3>
          <button onClick={onCancel} className="px-2 py-1 text-slate-600 hover:text-black">关闭</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto,220px] gap-4">
          <div className="flex flex-col items-center">
            <canvas
              ref={canvasRef}
              className="rounded-xl border border-slate-200 shadow-inner touch-none bg-transparent"
              style={{ width: 360, height: 200 }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            />
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <button 
                onClick={() => {
                  const ctx = canvasRef.current!.getContext("2d")!;
                  ctx.globalCompositeOperation = "destination-out";
                  ctx.strokeStyle = "rgba(0,0,0,1)";
                }}
                className="px-2 py-1 rounded-lg border bg-slate-700 text-white"
              >
                橡皮
              </button>
              <button 
                onClick={() => {
                  const ctx = canvasRef.current!.getContext("2d")!;
                  ctx.globalCompositeOperation = "source-over";
                  ctx.strokeStyle = "#000000";
                }}
                className="px-2 py-1 rounded-lg border bg-white"
              >
                画笔
              </button>
              <label className="text-sm text-slate-600">
                笔刷
                <input 
                  type="range" 
                  min={2} 
                  max={24} 
                  value={brushSize} 
                  onChange={e => setBrushSize(parseInt(e.target.value))} 
                  className="ml-2 align-middle"
                />
              </label>
              <button onClick={clearCanvas} className="px-2 py-1 rounded-lg border bg-white hover:bg-slate-50">
                清空
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm text-slate-600 mb-1">鱼类名称</label>
              <input 
                value={speciesName}
                onChange={e => setSpeciesName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border"
                placeholder="例如：我的旗鱼Pro"
              />
            </div>
            <div className="text-xs text-slate-500">
              说明：绘制黑色鱼类剪影轮廓，透明背景。保存后可在自定义鱼面板中选择使用。
            </div>
            <div className="flex gap-2 pt-2">
              <button 
                onClick={handleCreate}
                className="px-3 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
              >
                保存物种
              </button>
              <button 
                onClick={onCancel}
                className="px-3 py-2 rounded-xl border bg-white hover:bg-slate-50"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
