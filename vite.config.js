import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries into their own chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
    // Use esbuild for minification (faster than terser, default in Vite)
    minify: 'esbuild',
    // Chunk size warnings
    chunkSizeWarningLimit: 600,
    // CSS code splitting
    cssCodeSplit: true,
  },
});
