/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#101924",
        primaryYellow: "#efa863",
      },
    },
  },
  plugins: [],
};
