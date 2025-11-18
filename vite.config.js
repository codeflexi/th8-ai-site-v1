import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/th8-ai-site-v1/', // เปลี่ยนให้ตรงกับชื่อ repo บน GitHub
  plugins: [vue()],
})
