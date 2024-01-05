/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
          "dark": {
            "secondary": "#18191c",
          }
      }
    },
  },
  plugins: [],
}