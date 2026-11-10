/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      none: "0px",
      DEFAULT: "0px",
      sm: "0px",
      md: "0px",
      lg: "0px",
      xl: "0px",
      "2xl": "0px",
      "3xl": "0px",
      full: "0px",
    },
    extend: {
      colors: {
        page: "#f4f4f4",
        surface: {
          DEFAULT: "#ffffff",
          soft: "#f4f4f4",
        },
        ink: {
          DEFAULT: "#063024",
          soft: "#64686d",
          faint: "#5f6f6a",
        },
        accent: {
          DEFAULT: "#236537",
          dark: "#17492a",
        },
        deep: "#0c3b22",
        orange: "#ff6700",
        border: "#dbdbdb",
        cream: {
          DEFAULT: "#f2ddb8",
          strong: "#f9edd6",
        },
        night: "#04180f",
      },
      fontFamily: {
        display: ["Canela", "Fraunces", "Georgia", "serif"],
        body: ["Inter", "Outfit", "-apple-system", "sans-serif"],
        brand: ["Inter Tight", "Inter", "sans-serif"],
        wordmark: ["Anek Malayalam", "Inter Tight", "sans-serif"],
      },
      maxWidth: {
        site: "1880px",
      },
      spacing: {
        gutter: "clamp(10px, 1.5vw, 14px)",
        "topbar-h": "34px",
      },
    },
  },
  plugins: [],
};
