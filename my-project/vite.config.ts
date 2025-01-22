import { defineConfig } from 'vite';

export default defineConfig({
  root: './',  // Ensures Vite looks for the index.html at the root
  build: {
    outDir: 'dist', // Default build folder
  },
});
