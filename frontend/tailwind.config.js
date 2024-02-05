const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./index.html",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        rubik:["Rubik","sans-serif"],
        roboto:["Roboto","sans-serif"],
        ubuntu:["Ubuntu","sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

