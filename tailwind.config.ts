import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        primary: '#F48534', // Your primary color
        secondary: '#f2f2f2', // Your secondary color
        accent: '#22C55E', // Accent color
        background: '#F3F4F6', // Background color
        text: '#111827', // Text color
      },
      borderWidth: {
        3: '3px',
      },
      width: {
        'fill': '-webkit-fill-available',
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
