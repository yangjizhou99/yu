import { useState, useEffect } from 'react';
import { CreationDraft, loadDraft, clearDraft } from '../types/fish';

interface PublishNewFishProps {
  onClose: () => void;
  onPublish: (draft: CreationDraft, ownerName: string, petName: string) => void;
}

export default function PublishNewFish({ onClose, onPublish }: PublishNewFishProps) {
  const [draft, setDraft] = useState<CreationDraft | null>(null);
  const [ownerName, setOwnerName] = useState('');
  const [petName, setPetName] = useState('');

  useEffect(() => {
    const loadedDraft = loadDraft();
    if (!loadedDraft) {
      alert('没有找到草稿数据，请重新创建鱼形');
      onClose();
      return;
    }
    setDraft(loadedDraft);
  }, [onClose]);

  const handlePublish = () => {
    if (!draft || !ownerName.trim() || !petName.trim()) {
      alert('请填写完整的用户名字和宠物鱼名字');
      return;
    }
    onPublish(draft, ownerName.trim(), petName.trim());
    clearDraft();
    onClose();
  };

  if (!draft) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">🐟 投入鱼塘</h3>
          <button 
            onClick={onClose}
            className="px-2 py-1 text-slate-600 hover:text-black"
          >
            关闭
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-6">
          {/* 预览区域 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[4/3] bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl border border-blue-200 flex items-center justify-center overflow-hidden">
              <img 
                src={draft.previewPng} 
                alt="鱼形预览" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm text-slate-600">轮廓: <span className="font-medium">{draft.outlineName}</span></p>
              <p className="text-sm text-slate-600">样式: <span className="font-medium">{draft.svgName}</span></p>
            </div>
          </div>
          
          {/* 表单区域 */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">你的名字</label>
              <input 
                type="text" 
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="例如：YANG JIZHOU"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">鱼的名字</label>
              <input 
                type="text" 
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="例如：小蓝"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                🎉 你的自定义鱼形即将加入鱼塘！它将使用你创建的轮廓和绘制的细节，成为独一无二的宠物鱼。
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <button 
                onClick={handlePublish}
                disabled={!ownerName.trim() || !petName.trim()}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🐟 投入鱼塘
              </button>
              <button 
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
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
