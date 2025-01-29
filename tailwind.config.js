/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
      colors: {
        morado: {
          50: "#f3f1ff",
          100: "#eae6ff",
          200: "#d7d0ff",
          300: "#baaaff",
          400: "#987bff",
          500: "#7945ff",
          600: "#6a20ff",
          700: "#5b0ef3",
          800: "#4c0bcc",
          900: "#400ba7",
          950: "#200363",
        },
        azul: {
          50: "#eff9ff",
          100: "#daf1ff",
          200: "#bde8ff",
          300: "#90dbff",
          400: "#5cc6fe",
          500: "#37a8fa",
          600: "#248df0",
          700: "#1973dc",
          800: "#1b5cb2",
          900: "#1b508d",
          950: "#163155",
        },
      },
    },
  },
  plugins: [],
};
