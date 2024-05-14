/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      '1': '1px'
    },
    extend: {
      colors: {
        'myYellow': '#ffc414'
      }
    },
    fontFamily:{
      "Yeseva": ["Yeseva One", "serif"]
    }
  },
  plugins: [],
}