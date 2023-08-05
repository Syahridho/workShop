/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eff0f3",
        secondary: "#ff8e3c",
        heading: "#0d0d0d",
        text: "#2a2a2a",
        tools: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
