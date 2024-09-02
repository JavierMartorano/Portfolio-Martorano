module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#222234",
        "rojo-enfasis": "#ca4b3e",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        legoAnimation: {
          "0%": { transform: "scaleY(0)" },
          "50%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideIn: "slideIn 1s ease-out",
        legoAnimation: "legoAnimation 0.5s forwards",
      },
    },
  },
  plugins: [],
};
