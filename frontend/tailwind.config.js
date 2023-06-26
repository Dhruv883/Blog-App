/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#101924",
        darkBlue: "#242942",
        primaryYellow: "#efa863",
        brown: "#69523d",
      },
      fontFamily: {
        FiraSans: ["Fira Sans", "sans-serif"],
      },
      boxShadow: {
        blueShadow: "0px 0px 10px 1px #2f3350",
      },
    },
  },
  plugins: [],
};
