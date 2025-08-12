# 鱼塘小游戏（Vite + React + TS）

## 启动
```bash
npm install
npm run dev
# 浏览器打开提示的本地地址
```

> 如果页面样式没有生效，请确保联网（项目使用了 Tailwind 的 CDN）。

## 功能
- 按钮添加鱼（会自动游动）
- 点击水面投喂饲料
- 鱼在视野内会朝饲料游去并吃掉
- 每吃 1 个，鱼体型 +1%（可累积）
- Alt+V：显示/隐藏视野圈（调试）
- 清空鱼 / 清空饲料

## 文件结构
```
.
├─ index.html           # 入口（含 Tailwind CDN）
├─ src/
│  ├─ main.tsx         # React 入口
│  └─ App.tsx          # 游戏组件（全部逻辑在此）
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## 常见问题
- **画布大小不对/模糊**：组件内已做高 DPI 适配（根据容器大小和 dpr 设置画布）。
- **性能**：当前为 O(N_fish × N_food) 的简单检测；鱼或饲料很多时可以做空间划分（网格/四叉树）。