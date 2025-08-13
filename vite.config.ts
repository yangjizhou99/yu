import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 你这是"项目页"(URL 形如 https://yangjizhou99.github.io/yu/)
// 必须设置 base 为 '/yu/'，否则静态资源 404(包括 favicon)。
export default defineConfig({
  plugins: [react()],
  base: '/yu/',         // ✅ 关键
  // build: { outDir: 'dist' }  // 默认就是 dist，可省略
})
