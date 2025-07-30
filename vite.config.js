// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // 1. svgr을 import 합니다.

export default defineConfig({
   // 2. plugins 배열에 svgr()을 추가합니다.
   plugins: [react(), svgr()],
});
