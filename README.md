# 🐟 小鱼塘 Mini-Game (Fish Pond Mini-Game)

这是一个基于 React, TypeScript 和 Firebase 构建的交互式虚拟鱼塘网页应用。用户可以自定义鱼的形状和图案，并将它们放入一个共享的、可实时同步的虚拟鱼塘中。

 <!-- 建议替换为你的应用截图 -->

## ✨ 核心功能

- **🎨 高度自定义**：
  - **自定义鱼形**：通过内置的轮廓编辑器，用户可以绘制独特的鱼身体轮廓。
  - **自定义贴图**：用户可以在选定的鱼形上自由绘制独一无二的纹理图案。
  - **程序化贴图**：提供多种预设的程序化贴图（如小丑鱼、锦鲤等），一键添加漂亮的鱼。

- **☁️ 云端实时同步**：
  - **Firebase Firestore**: 所有鱼和饲料的数据都存储在 Firestore 中，实现了跨设备、跨用户的实时同步。
  - **贴图持久化**: 用户绘制的贴图会被安全地存储在 Firestore 中，确保刷新页面或在其他设备上访问时，自定义外观不会丢失。
  - **共享鱼塘**: 通过分享特定 URL，多个用户可以进入同一个鱼塘，共同观赏和互动。

- **🐠 丰富的交互**：
  - **动态鱼群**: 鱼会在 4K 分辨率的广阔世界中游动，并会自动寻找和吞食饲料。
  - **成长系统**: 鱼在吞食不同种类的饲料后会逐渐长大。
  - **相机控制**: 支持鼠标滚轮缩放和拖拽平移，方便探索整个鱼塘。

## 🚀 技术栈

- **前端**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **后端与数据库**: [Firebase](https://firebase.google.com/) (Firestore for Database, Firebase Authentication for anonymous users)
- **核心绘图**: HTML5 Canvas API

## 🔧 项目设置与启动

1.  **克隆仓库**:
    ```bash
    git clone https://github.com/yangjizhou99/yu.git
    cd yu
    ```

2.  **安装依赖**:
    ```bash
    npm install
    ```

3.  **配置 Firebase**:
    - 在项目根目录创建一个 `.env` 文件。
    - 前往你的 [Firebase 项目控制台](https://console.firebase.google.com/)。
    - 复制你的 Firebase Web 应用配置，并将其添加到 `.env` 文件中，格式如下：
      ```
      VITE_FIREBASE_API_KEY=your_api_key
      VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
      VITE_FIREBASE_PROJECT_ID=your_project_id
      VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
      VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      VITE_FIREBASE_APP_ID=your_app_id
      ```

4.  **配置 Firestore 安全规则**:
    - 在 Firebase 控制台的 Firestore Database -> Rules 页面，粘贴以下规则并发布。这能确保只有登录用户（包括匿名用户）才能写入数据。
      ```js
      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          match /ponds/{pondId} {
            allow read: if true;
            allow write: if request.auth != null;
          }
          match /textures/{texId} {
            allow read: if true;
            allow write: if request.auth != null;
          }
        }
      }
      ```

5.  **启动开发服务器**:
    ```bash
    npm run dev
    ```
    应用将在本地启动，通常是 `http://localhost:5173`。

## 📁 项目结构

```
/
├── public/          # 静态资源
├── src/
│   ├── components/  # React 组件 (轮廓编辑器, 细节编辑器等)
│   ├── types/       # TypeScript 类型定义 (fish.ts)
│   ├── App.tsx      # 主应用组件，包含核心逻辑
│   ├── firebase.ts  # Firebase 初始化与服务函数
│   ├── main.tsx     # 应用入口
│   └── ...
├── .env             # Firebase 环境变量 (需自行创建)
├── firestore.rules  # 建议的 Firestore 安全规则
├── package.json
└── README.md
```

## 💡 未来展望

- [ ] 添加更多种类的程序化贴图和鱼形。
- [ ] 优化性能，支持更大数量的鱼。
- [ ] 增加更多互动元素，如气泡、水草等。
- [ ] 用户账户系统，允许用户管理自己的鱼。
