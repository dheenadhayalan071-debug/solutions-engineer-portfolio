import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#030014", // Darker Navy-Black (Better contrast than pure black)
        foreground: "#ffffff", // Pure White text
        
        // High-Voltage Neon
        cyan: {
          DEFAULT: "#00f3ff",
          glow: "rgba(0, 243, 255, 0.6)",
          dim: "rgba(0, 243, 255, 0.1)",
        },
        purple: {
          DEFAULT: "#bd00ff",
          glow: "rgba(189, 0, 255, 0.6)",
          dim: "rgba(189, 0, 255, 0.1)",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.03)", // Lighter glass
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"], 
        display: ["Orbitron", "sans-serif"], 
        mono: ["JetBrains Mono", "monospace"], 
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "meteor": {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
        "scroll": "scroll 20s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "meteor": "meteor 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
