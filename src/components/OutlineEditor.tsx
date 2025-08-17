import React, { useRef, useState, useEffect } from "react";
import { useI18n } from "../i18n";
import { UserOutline, pointsToClosedPathD, uuid, saveOutlineLib, loadOutlineLib } from "../types/fish";

interface OutlineEditorProps {
  onSave: (outline: UserOutline) => void;
  onCancel: () => void;
}

const VIEWBOX = { w: 480, h: 240 };

export default function OutlineEditor({ onSave, onCancel }: OutlineEditorProps) {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Array<{x: number, y: number}>>([]);
  const [headPt, setHeadPt] = useState<{x: number, y: number} | null>(null);
  const [tailPt, setTailPt] = useState<{x: number, y: number} | null>(null);
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"draw" | "mark">("draw");

  // 初始化画布
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = VIEWBOX.w * dpr;
    canvas.height = VIEWBOX.h * dpr;
    canvas.style.width = `${VIEWBOX.w}px`;
    canvas.style.height = `${VIEWBOX.h}px`;
    ctx.scale(dpr, dpr);

    // 绘制网格背景
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, VIEWBOX.w, VIEWBOX.h);
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    for (let x = 0; x <= VIEWBOX.w; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, VIEWBOX.h);
      ctx.stroke();
    }
    for (let y = 0; y <= VIEWBOX.h; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(VIEWBOX.w, y);
      ctx.stroke();
    }
  }, []);

  // 绘制当前状态
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    
    // 清除绘制区域
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    // 绘制网格背景
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, VIEWBOX.w, VIEWBOX.h);
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    for (let x = 0; x <= VIEWBOX.w; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, VIEWBOX.h);
      ctx.stroke();
    }
    for (let y = 0; y <= VIEWBOX.h; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(VIEWBOX.w, y);
      ctx.stroke();
    }

    // 绘制当前路径
    if (points.length > 0) {
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();

      // 绘制点
      ctx.fillStyle = "#3b82f6";
      for (const pt of points) {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 绘制头尾标记
    if (headPt) {
      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.arc(headPt.x, headPt.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(headPt.x, headPt.y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    if (tailPt) {
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(tailPt.x, tailPt.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(tailPt.x, tailPt.y, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }, [points, headPt, tailPt]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (VIEWBOX.w / rect.width);
    const y = (e.clientY - rect.top) * (VIEWBOX.h / rect.height);

    if (mode === "draw") {
      setPoints([...points, { x, y }]);
    } else if (mode === "mark") {
      if (!headPt) {
        setHeadPt({ x, y });
      } else if (!tailPt) {
        setTailPt({ x, y });
      }
    }
  };

  const handleUndo = () => {
    if (points.length > 0) {
      setPoints(points.slice(0, -1));
    }
  };

  const handleClear = () => {
    setPoints([]);
    setHeadPt(null);
    setTailPt(null);
  };

  const handleClosePath = () => {
    if (points.length >= 3) {
      // 自动闭合路径
      setPoints([...points, points[0]]);
      setMode("mark");
    }
  };

  const handleSave = () => {
    if (!name.trim()) {
      alert(t("alert.enterOutlineName"));
      return;
    }

    if (!headPt || !tailPt) {
      alert(t("alert.markHeadTail"));
      return;
    }

    const pathD = pointsToClosedPathD(points);
    const headIsLeft = headPt.x <= tailPt.x;

    const outline: UserOutline = {
      id: `ol-${uuid()}`,
      name: name.trim(),
      viewBox: VIEWBOX,
      pathD,
      headIsLeft,
      createdAt: new Date().toISOString()
    };

    // 保存到库
    const lib = loadOutlineLib();
    lib.push(outline);
    saveOutlineLib(lib);

    onSave(outline);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-xl font-semibold mb-4">{t("outline.title")}</h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("outline.name")}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder={t("outline.name.ph")}
          />
        </div>

        <div className="relative mb-4">
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            className="w-full border rounded-lg cursor-crosshair"
            style={{ height: VIEWBOX.h }}
          />
          <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-sm">
            {mode === "draw" ? t("outline.mode.draw") : t("outline.mode.mark")}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={handleUndo}
            disabled={points.length === 0}
            className="px-3 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            {t("btn.undo")}
          </button>
          <button
            onClick={handleClear}
            disabled={points.length === 0}
            className="px-3 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            {t("btn.clear")}
          </button>
          <button
            onClick={handleClosePath}
            disabled={points.length < 3 || mode !== "draw"}
            className="px-3 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            {t("btn.closePath")}
          </button>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg"
          >
            {t("btn.cancel")}
          </button>
          <button
            onClick={handleSave}
            disabled={!name.trim() || !headPt || !tailPt}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
          >
            {t("btn.saveOutline")}
          </button>
        </div>
      </div>
    </div>
  );
}
