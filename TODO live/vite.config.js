import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Ensure this matches the directory in your deploy script
  },
  base: '/todo-list/', // Ensure this matches your GitHub Pages repository name
});
