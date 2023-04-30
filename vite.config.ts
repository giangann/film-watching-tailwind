import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import css from 'rollup-plugin-css-only'; // Import the module here
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), css({ output: 'output.css' })],
});
