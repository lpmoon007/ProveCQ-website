import type { Config } from "tailwindcss";

/**
 * Prove / Commitment Quotient design tokens.
 * Source of truth: developer handoff §3 + provecq prototype (see /prototype).
 * Aesthetic: warm near-black + signal-green + R/Y/G. A disciplined
 * "measurement/proof" sibling to belegendary.org — deliberately NOT the old
 * FPO cream/sage look.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F6F3EC", // light section bg
          2: "#F0EADD", // alt light band
        },
        ink: {
          DEFAULT: "#14130E", // dark hero/sections (near-black, warm)
          2: "#0E0D09", // deepest panels / footer
        },
        panel: {
          DEFAULT: "#1B1A12", // cards on dark
          2: "#17160F", // selected row on dark
        },
        content: {
          DEFAULT: "#1B1913", // body text on light
          muted: "#575249",
          faint: "#7C7767",
        },
        // brand green
        green: {
          DEFAULT: "#1F8B57", // primary accent / CTA
          soft: "#8FD6AC", // accent-on-dark, links on dark
          700: "#17663F", // link hover
        },
        // signal (Heatmap dots + status)
        signal: {
          red: "#D0492E",
          yellow: "#E0A73E",
          green: "#2E9E5B",
        },
        edge: {
          light: "#E7E0D2", // border on light
          dark: "#2A2718", // border on dark panels
          "dark-2": "#262319", // border on deepest dark
        },
      },
      fontFamily: {
        // display + numerals
        display: ["var(--font-space-grotesk)", "sans-serif"],
        // body / UI
        sans: ["var(--font-figtree)", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
        pill: "100px",
      },
      maxWidth: {
        shell: "1200px",
        content: "1080px",
      },
      letterSpacing: {
        tightest: "-.03em",
      },
    },
  },
  plugins: [],
};

export default config;
