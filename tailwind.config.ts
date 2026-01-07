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
        // New Neon Palette
        neonBlue: '#00f3ff',
        neonPurple: '#bc13fe',
        neonGreen: '#0aff0a',
        neonPink: '#ff00ff',
      },
      boxShadow: {
        'neon-red': '0 0 5px #b01121, 0 0 20px #b01121',
        'neon-blue': '0 0 5px #00f3ff, 0 0 20px #00f3ff',
        'neon-purple': '0 0 5px #bc13fe, 0 0 20px #bc13fe',
        'neon-green': '0 0 5px #0aff0a, 0 0 20px #0aff0a',
        'neon-pink': '0 0 5px #ff00ff, 0 0 20px #ff00ff',
      },
      dropShadow: {
        'neon-red': '0 0 10px rgba(176, 17, 33, 0.8)',
        'neon-blue': '0 0 10px rgba(0, 243, 255, 0.8)',
        'neon-purple': '0 0 10px rgba(188, 19, 254, 0.8)',
      },
    },
  },
  plugins: [],
};

export default config;

