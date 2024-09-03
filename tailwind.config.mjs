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
        DM: ['DM-Sans', 'sans-serif'],
        Noto: ['noto-sans-sc', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
