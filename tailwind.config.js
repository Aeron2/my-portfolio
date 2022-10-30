/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B192E",
        green: "#64ffda",
        white: "#e6f1ff",
        llslate: "#ccd6f6",
        lslate: "#a8b2d1",
        slate: "#8892b0",
        llnavy: "#233554",
        lnavy: "#112240",
      },
      spacing: {
        "1/3": "33vw",
      },
    },
  },
  plugins: [],
};
