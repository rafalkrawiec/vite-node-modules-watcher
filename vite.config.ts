import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({ rollupTypes: true }),
  ],
  build: {
    lib: {
      entry: 'src/watcher.ts',
      name: 'watcher',
      fileName: 'watcher',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [/^node:.*$/],
    },
    minify: 'terser',
  },
});
