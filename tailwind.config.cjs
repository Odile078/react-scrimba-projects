/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          lighter: "F5F7FB",
          light: "D6DBF5",
          DEFAULT: "4D5B9E",
          darker: "293264",
        },
      },
    },
  },
  plugins: [],
};
