/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-font-darkest': '#0c2f39',
        'brand-font-dark': '#155263',
        'brand-font-medium': '#1e758d',
        'brand-bg-light': '#ffd76f',    // Lightest background
        'brand-bg-medium': '#ffc39c',   // Medium background
        'brand-bg-accent': '#ffbb09',   // Accent background / CTAs
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure Inter is loaded or use a default
      },
    },
  },
  plugins: [],
};
