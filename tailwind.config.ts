import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edfdfb',
          100: '#d8fbf8',
          200: '#b9f6ef',
          300: '#8fe9e2',
          400: '#5acdca',
          500: '#22a9a0',
          600: '#13857f',
          700: '#0f6c68',
          800: '#0d544f',
          900: '#0e4846',
        },
        navy: {
          900: '#071a35',
          800: '#0d2343',
        },
        sky: {
          50: '#f3f9ff',
          100: '#eaf4ff',
          200: '#d7ebff',
          300: '#bfe0ff',
        },
      },
      boxShadow: {
        soft: '0 20px 45px rgba(9, 31, 58, 0.12)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
