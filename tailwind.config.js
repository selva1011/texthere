/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-1': "#f0f2f5",
        'cus-orange': "#FF5400",
      },
      fontFamily:{
        'dim':['din-2014-rounded-variable'],
        'outfit': ['Outfit'],
        'Righteous':['Righteous'],
      },
    },
  },
  plugins: [],
}