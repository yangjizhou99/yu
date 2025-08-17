import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "zh" | "ja";

type Dict = Record<string, string>;

const zh: Dict = {
  "title.miniGame": "🐟 小鱼塘 Mini-Game",
  "btn.zoom.reset": "重置",
  "btn.zoom.fitAll": "全景",
  "btn.addFish": "+1 条鱼",
  "btn.openTexPicker": "🖼 贴图海生物",
  "texPicker.title": "从贴图库添加海洋生物皮肤",
  "btn.openDesigner": "🎨 自定义新鱼",
  "btn.openOutlineEditor": "🎯 创建新鱼形（两步）",
  "btn.clearFish": "清空鱼",
  "btn.clearFood": "清空饲料",
  "btn.share": "🔗 分享这个池塘",
  "share.title": "复制当前池塘的分享链接",
  "share.copied": "分享链接已复制到剪贴板",
  "btn.clearSave": "清空存档",
  "hint.controls": "滚轮缩放，按住空格或右键/中键拖拽视角；Alt+V 显示视野圈。",
  "label.fish": "鱼：",
  "label.food": "饲料：",
  "ranking.title": "🐟 鱼类体积排行榜（仅显示有主人的鱼）",
  "ranking.th.rank": "排名",
  "ranking.th.owner": "主人",
  "ranking.th.volume": "体积",
  "ranking.th.nick": "昵称",
  "ranking.none": "暂无有主人的鱼",
  "lang.label": "语言",
  "lang.zh": "中文",
  "lang.ja": "日本語",

  // Designer
  "designer.title": "🎨 自定义宠物鱼",
  "btn.close": "关闭",
  "designer.maskTip": "只允许在鱼体轮廓内绘制（超出无效）",
  "shape.label": "鱼形：",
  "shape.angelfish": "神仙鱼",
  "shape.swordfish": "旗鱼",
  "shape.longtail": "长尾斗鱼",
  "btn.eraser": "橡皮",
  "label.brush": "笔刷",
  "btn.clear": "清空",
  "form.ownerName": "用户名字",
  "form.petName": "宠物鱼名字",
  "form.ownerPlaceholder": "例如：YANG JIZHOU",
  "form.petPlaceholder": "例如：小蓝",
  "desc.tip": "说明：只能在椭圆轮廓内绘制；你的图样会作为鱼体贴图保存（本地存档）。",
  "btn.create": "加入鱼塘",
  "btn.cancel": "取消",
  "alert.fillNames": "请填写 用户名字 和 宠物鱼名字",

  // Outline Editor
  "outline.title": "创建鱼形轮廓",
  "outline.name": "轮廓名称",
  "outline.name.ph": "例如：神仙鱼轮廓",
  "outline.mode.draw": "绘制模式：点击添加点",
  "outline.mode.mark": "标记模式：先点击头部，再点击尾部",
  "btn.undo": "撤销",
  "btn.closePath": "闭合路径",
  "btn.saveOutline": "保存轮廓",
  "alert.enterOutlineName": "请输入轮廓名称",
  "alert.markHeadTail": "请标记头部和尾部位置",

  // Detail Editor
  "detail.title": "绘制鱼形细节",
  "detail.name": "SVG名称",
  "detail.name.ph": "例如：蓝色花纹神仙鱼",
  "detail.hint": "在轮廓内绘制细节",
  "label.thickness": "粗细",
  "btn.backToOutline": "返回修改轮廓",
  "btn.saveSvg": "保存为SVG",
  "alert.enterSvgName": "请输入SVG名称"
};

const ja: Dict = {
  "title.miniGame": "🐟 ミニ魚塘 Mini-Game",
  "btn.zoom.reset": "リセット",
  "btn.zoom.fitAll": "全景",
  "btn.addFish": "+1 匹",
  "btn.openTexPicker": "🖼 テクスチャ図鑑",
  "texPicker.title": "テクスチャ図鑑から海洋生物スキンを追加",
  "btn.openDesigner": "🎨 カスタム魚を作成",
  "btn.openOutlineEditor": "🎯 新しい魚形を作成（2ステップ）",
  "btn.clearFish": "魚をクリア",
  "btn.clearFood": "餌をクリア",
  "btn.share": "🔗 この池を共有",
  "share.title": "この池の共有リンクをコピー",
  "share.copied": "共有リンクをクリップボードにコピーしました",
  "btn.clearSave": "保存をクリア",
  "hint.controls": "ホイールでズーム、Space または 右/中クリック でドラッグ、Alt+V で視野リング表示。",
  "label.fish": "魚：",
  "label.food": "餌：",
  "ranking.title": "🐟 魚の体積ランキング（オーナー有のみ表示）",
  "ranking.th.rank": "順位",
  "ranking.th.owner": "オーナー",
  "ranking.th.volume": "体積",
  "ranking.th.nick": "ニックネーム",
  "ranking.none": "オーナーのいる魚がいません",
  "lang.label": "言語",
  "lang.zh": "中文",
  "lang.ja": "日本語",

  // Designer
  "designer.title": "🎨 カスタムペット魚",
  "btn.close": "閉じる",
  "designer.maskTip": "魚の輪郭内のみ描画できます（外は無効）",
  "shape.label": "魚形：",
  "shape.angelfish": "エンゼルフィッシュ",
  "shape.swordfish": "カジキ",
  "shape.longtail": "長尾ベタ",
  "btn.eraser": "消しゴム",
  "label.brush": "ブラシ",
  "btn.clear": "クリア",
  "form.ownerName": "ユーザー名",
  "form.petName": "ペット魚の名前",
  "form.ownerPlaceholder": "例：YANG JIZHOU",
  "form.petPlaceholder": "例：小藍",
  "desc.tip": "説明：楕円輪郭内のみ描画可能。描いた模様は魚のテクスチャとして保存されます。",
  "btn.create": "魚塘に追加",
  "btn.cancel": "キャンセル",
  "alert.fillNames": "ユーザー名とペット魚の名前を入力してください",

  // Outline Editor
  "outline.title": "魚形の輪郭を作成",
  "outline.name": "輪郭名",
  "outline.name.ph": "例：エンゼルフィッシュの輪郭",
  "outline.mode.draw": "描画モード：クリックで点を追加",
  "outline.mode.mark": "マーキング：頭→尾の順にクリック",
  "btn.undo": "取り消し",
  "btn.closePath": "パスを閉じる",
  "btn.saveOutline": "輪郭を保存",
  "alert.enterOutlineName": "輪郭名を入力してください",
  "alert.markHeadTail": "頭と尾をマークしてください",

  // Detail Editor
  "detail.title": "魚形の細部を描く",
  "detail.name": "SVG 名称",
  "detail.name.ph": "例：青い模様のエンゼルフィッシュ",
  "detail.hint": "輪郭内に描画",
  "label.thickness": "太さ",
  "btn.backToOutline": "輪郭に戻る",
  "btn.saveSvg": "SVG として保存",
  "alert.enterSvgName": "SVG 名称を入力してください"
};

const DICTS: Record<Lang, Dict> = { zh, ja };

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

const LS_KEY = "app-lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const detect = (): Lang => {
    const fromLs = (localStorage.getItem(LS_KEY) as Lang | null);
    if (fromLs === "zh" || fromLs === "ja") return fromLs;
    const n = navigator.language.toLowerCase();
    return n.startsWith("ja") ? "ja" : "zh";
  };
  const [lang, setLang] = useState<Lang>(detect);
  useEffect(() => { try { localStorage.setItem(LS_KEY, lang); } catch {} }, [lang]);
  const t = useMemo(() => (key: string) => (DICTS[lang][key] ?? key), [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


