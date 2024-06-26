import { transform } from "next/dist/build/swc"
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "roll-in-blurred-right-1": {
          "0%": {
            transform: "translateX(1000px) rotate(720deg)",
            filter: "blur(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0) rotate(-9deg)",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "roll-in-blurred-right-2": {
          "0%": {
            transform: "translateX(1000px) rotate(720deg)",
            filter: "blur(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0) rotate(3deg)",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "roll-in-blurred-right-3": {
          "0%": {
            transform: "translateX(1000px) rotate(720deg)",
            filter: "blur(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0) rotate(-12deg)",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "float-side-to-side": {
          "0%": {
            transform: "translate(0, 0) scale(300%)",
          },
          "100%": {
            transform: "translate(10px, -5px) scale(300%)",
          },
        },
        "rotate-center": {
          "0%": {
            transform: "rotate(0) scale(0.5)",
            opacity: "0",
          },
          to: {
            transform: "rotate(360deg) scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "roll-in-blurred-right-1":
          "roll-in-blurred-right-1 0.65s cubic-bezier(0.230, 1.100, 0.320, 1.000)   both",
        "roll-in-blurred-right-2":
          "roll-in-blurred-right-2 0.65s cubic-bezier(0.230, 1.100, 0.320, 1.000)   both",
        "roll-in-blurred-right-3":
          "roll-in-blurred-right-3 0.65s cubic-bezier(0.230, 1.100, 0.320, 1.000)   both",
        "fade-in":
          "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "float-side-to-side": "float-side-to-side 10s infinite alternate",
        "rotate-center":
          "rotate-center 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both",
      },
      transitionDelay: {
        "1500": "1500ms",
        "2000": "2000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
