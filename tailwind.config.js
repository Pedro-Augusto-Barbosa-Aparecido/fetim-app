/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./App.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#E1E1E6",
          200: "#D9D9D9",
          700: "#454545",
          900: "#121214",
        },
        red: {
          500: "#F75A68",
        },
        green: {
          500: "#00B377",
        },
      },
    },
  },
  plugins: [],
};
