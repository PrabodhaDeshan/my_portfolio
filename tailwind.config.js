/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <- move it to the root level

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        brandPurple: "#6B2DB9",
        lightgrey: "#D5D5D5",
        "primary-gradient-start": "#573BD6",
        "primary-gradient-end": "#A855F7",
      },

      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
       boxShadow: {
       'outside': '0 40px 80px rgba(0, 0, 0, 0.6)', // Stronger and shifted further down
    },

      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards",
      },

      screens: {
        xl: "1600px",
        "2xl": "1920px",
        lg: "600px",
        "sm-range": { raw: "(min-width: 200px) and (max-width: 500px)" },
      },
    },
  },

  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".header-title": {
          marginTop: theme("spacing.10"),
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.semibold"),
        },
        ".header-gradient": {
          backgroundClip: "text",
          color: "transparent",
          backgroundImage: `linear-gradient(to right, ${theme(
            "colors.primary-gradient-start"
          )}, ${theme("colors.primary-gradient-end")})`,
        },
      });
    },
  ],
};
