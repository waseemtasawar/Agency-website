/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        neturalSilver: "#F5F7FA",
        neturalDGray: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        neturalGray: "#717171",
        grau900: "#18191F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
