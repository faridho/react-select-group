/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "gray-sg": {
        100: "#f1f2f6",
        200: "#dfe4ea",
      },
      "black-sg": {
        100: "#747d8c"
      },
      "red-sg": {
        100: "#ff7675"
      }
    },
    extend: {},
  },
  plugins: [],
}
