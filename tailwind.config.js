/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",
        secondary: "#16213e",
        accent: {
          DEFAULT: "#0f3460",
          purple: "#e94560",
          pink: "#ff9ff3",
          green: "#26de81",
        },
        light: "#f8f9fa",
        dark: "#0d0d1a",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        special: ["Amertha", "serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        shine: {
          "0%": { transform: "translateX(-100%) rotate(30deg)" },
          "100%": { transform: "translateX(100%) rotate(30deg)" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        shine: "shine 3s linear infinite",
        typing: "typing 3s steps(30, end) forwards",
        blink: "blink 0.8s infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
