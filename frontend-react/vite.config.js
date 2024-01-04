import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5170, // Ganti 3000 dengan port yang diinginkan
  },
  plugins: [react()],
});
