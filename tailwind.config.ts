import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        xs: '300px',
        ...defaultTheme.screens
      }
    }
  },
  plugins: [require('daisyui')],
  variants: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset'
    ]
  }
};
export default config;
