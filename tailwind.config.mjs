/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
    }
  },
  plugins: [],
};
