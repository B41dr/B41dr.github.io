import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// 用户主页 b41dr.github.io 挂在根域名,base 保持 '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
});
