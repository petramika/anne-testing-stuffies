/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      icons: [
        {
          src: '/icons/512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskeable',
        }, 
      ],
    },
  })],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'utils': path.resolve(__dirname, './src/utils'),
      'pages': path.resolve(__dirname, './src/pages'),
      'models': path.resolve(__dirname, './src/models'),
    },
  },
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/utils/tests/setup.ts',
  },
});
