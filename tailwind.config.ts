import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EAE6DC",
        ink: "#121111",
        orange: "#DD5015",
        "muted-black": "#282625",
        gray: {
          poster: "#9D9A98",
          canvas: "#E7E7E5",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tightest: "-0.07em",
      },
      borderWidth: {
        poster: "1px",
        "poster-thick": "2px",
      },
    },
  },
  plugins: [],
};
export default config;
