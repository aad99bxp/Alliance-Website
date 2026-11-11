/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        alliance: {
          red: '#e30613',
          deep: '#b8000d',
          navy: '#101d32',
          charcoal: '#17191d',
          mist: '#f4f5f7',
          silver: '#bfc5cc',
        },
      },
    },
  },
  plugins: [],
}
