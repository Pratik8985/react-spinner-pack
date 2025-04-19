import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// This is how we simulate __dirname in ESM
const __dirname = path.resolve();

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Entry file for your spinner components
      name: 'ReactSpinnerKit',
      fileName: (format) => `react-spinner-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
