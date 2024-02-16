/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      color: {
        primary: "#eeeeee",
        accent: "#FFAE00",
        accent2: "#D18F00",
        accent3: "#FFC444",
        secondary: "#FF200E",
        dark: "#181819",
      },
    },
  },
  plugins: [],
};
