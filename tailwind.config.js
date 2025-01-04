/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#6BCB77",
        "orange-500": "#FFA726",
      },
    },
  },
  plugins: [],
};
