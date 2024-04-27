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
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#121113',
          secondary: '#F7F7F2'
        }
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#a2d2ff',
          secondary: '#bde0fe'
        }
      }
    ]
  }
};
export default config;
