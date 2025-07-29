import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    visualizer({ open: true }) // bundle size visualization
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'vendor-react-dom';
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('tailwindcss')) return 'vendor-tailwind';
            if (id.includes('@headlessui')) return 'vendor-headlessui';
            return 'vendor';
          }
        }
      }
    }
  }
});
