import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172026",
        mist: "#f5f8fa",
        ocean: "#087e8b",
        coral: "#ff6b5f",
        honey: "#f5b841",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Hiragino Sans",
          "Hiragino Kaku Gothic ProN",
          "Meiryo",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 32, 38, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
