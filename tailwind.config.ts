import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stranger: ['"ITC Benguiat", serif'],
      },
      colors: {
        neonRed: '#b01121',
        bgBlack: '#0b0b0b',
      },
    },
  },
  plugins: [],
};

export default config;

