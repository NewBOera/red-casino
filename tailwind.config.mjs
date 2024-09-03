/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        red: '#F30C36',
        main: '#1E2126',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Archivo: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
