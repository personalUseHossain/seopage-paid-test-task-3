/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light_dark: "#141414",
        dark: "#0a0a0a",
        green: "#26fd40",
        yellow: "#d8ff25",
        btnHover : "#333333",  
        btnHoverDark: "#1f1f1f",
        btnHoverLight: "#444444",
        gray: "#666666"
      },
      fontFamily: {
        melodrama: ['var(--font-melodrama)'],
        manrope: ['var(--font-manrope)']
      }
    },
  },
  plugins: [],
};
