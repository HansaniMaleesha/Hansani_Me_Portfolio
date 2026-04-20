/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      SpaceGrotesk: ["Space Grotesk", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        bg_dark: "var(--color-bg)",
        bg_secondary: "var(--color-bg-secondary)",
        bg_card: "var(--color-bg-card)",
        accent_cyan: "var(--color-accent-cyan)",
        accent_violet: "var(--color-accent-violet)",
        accent_pink: "var(--color-accent-pink)",
        text_primary: "var(--color-text-primary)",
        text_secondary: "var(--color-text-secondary)",
        text_muted: "var(--color-text-muted)",
        border_glass: "var(--color-border-glass)",
        border_glow: "var(--color-border-glow)",
      },
      boxShadow: {
        glass: "var(--color-shadow-glass)",
        glow_cyan: "var(--color-shadow-glow-cyan)",
        glow_violet: "var(--color-shadow-glow-violet)",
        glow_strong: "0 0 40px rgba(0, 212, 255, 0.25)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "gradient-x": "gradientX 3s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.35)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
