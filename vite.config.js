import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { checker } from 'vite-plugin-checker';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker()],
  resolve: {
    alias: {
      exercises: resolve(root, 'exercises'),
    },
  },
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        paths: [''],
        extensions: ['.js', '.jsx'],
      },
      node: {
        paths: [''],
        extensions: ['.js', '.jsx'],
      },
    },
  },
});

