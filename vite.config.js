import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  appType: "spa",
   cacheDir: "./cache",

    build: {
        sourcemap: true,
        manifest: true,
        emptyOutDir: true,
    },
  plugins: [react()],
})
