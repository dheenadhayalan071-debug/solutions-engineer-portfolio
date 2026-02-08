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
        // --- FUTURISTIC PALETTE ---
        background: "#050505", // Deep Void Black
        foreground: "#e0e0e0", // Soft Gray text
        
        // Neon Accents
        cyan: {
          DEFAULT: "#00f3ff",
          dim: "rgba(0, 243, 255, 0.1)",
          glow: "rgba(0, 243, 255, 0.5)",
        },
        purple: {
          DEFAULT: "#bc13fe",
          dim: "rgba(188, 19, 254, 0.1)",
          glow: "rgba(188, 19, 254, 0.5)",
        },

        // UI Elements
        card: {
          DEFAULT: "rgba(15, 15, 15, 0.6)", // Glass effect
          foreground: "#ffffff",
          border: "rgba(255, 255, 255, 0.1)",
        },
        primary: {
          DEFAULT: "#00f3ff", // Cyan Primary
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#bc13fe", // Purple Secondary
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          foreground: "#a3a3a3",
        },
        accent: {
          DEFAULT: "rgba(0, 243, 255, 0.1)",
          foreground: "#00f3ff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "rgba(255, 255, 255, 0.1)",
        input: "rgba(255, 255, 255, 0.05)",
        ring: "#00f3ff",
      },
      fontFamily: {
        // We will import these in CSS next
        sans: ["Space Grotesk", "sans-serif"], 
        display: ["Orbitron", "sans-serif"], // For Headers
        mono: ["JetBrains Mono", "monospace"], // For Code blocks
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Custom Sci-Fi Animations
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px var(--tw-shadow-color), 0 0 10px var(--tw-shadow-color)" },
          "50%": { boxShadow: "0 0 20px var(--tw-shadow-color), 0 0 30px var(--tw-shadow-color)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-cyan": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 4s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
