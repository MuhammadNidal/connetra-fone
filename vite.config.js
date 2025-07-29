import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 👈 This line makes all asset paths relative
  plugins: [react()],
})
