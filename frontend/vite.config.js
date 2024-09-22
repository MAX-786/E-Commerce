import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Change to your desired port
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html'),
      output: resolve(__dirname, 'dist'),
    },
  },
});
