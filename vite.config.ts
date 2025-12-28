import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'lucide': ['lucide-react'],
        },
      },
    },
    cssMinify: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
