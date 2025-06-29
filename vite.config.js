import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // theme: {
  //   extend: {
  //     colors: {
  //       'ocean-blue': '#007BFF',
  //       'sandy-yellow': '#F4D03F',
  //       'dark-text': '#333333',
  //       'light-bg': '#F8F8F8',
  //     },
  //     fontFamily: {
  //       sans: ['Inter', 'sans-serif'],
  //     }
  //   },
  // },
  plugins: [react(), tailwindcss()],
})
