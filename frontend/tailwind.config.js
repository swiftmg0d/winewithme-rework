/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Changa", "sans-serif"],
      },
      colors: {
        darkslategrey: "#2F4F4F",
        wine: "#740643",
        warningred: "#B30202",
      },
    },
  },
  plugins: [],
};
