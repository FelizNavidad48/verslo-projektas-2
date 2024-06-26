/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './functions/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height:{
        'fit-content': 'fit-content'
      },
      spacing:{
        1.25:'5.5px',
      },
      padding:{
        0.25:'1px',
      },
      backgroundImage: {
        'back': "url('/back.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
