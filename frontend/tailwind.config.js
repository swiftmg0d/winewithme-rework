// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Changa", "sans-serif"],
      },
      colors: {
        darkslategrey: "#2F4F4F",
      },
    },
  },
  plugins: [],
};
