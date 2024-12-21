/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
      colors: {
        darker: "#00511b", // Replace this with your desired dark color
      },
      animation: {
        moveUpSlow: "moveUp 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite", // Adjust `8s` to control speed
      },
    },
  },
  plugins: [],
};
