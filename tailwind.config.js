/** @type {import('tailwindcss').Config} */
module.exports = {
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
      animation: {
        "slide-out-top":
          "slide-out-top 1.0s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "slide-in-elliptic-bottom-bck":
          "slide-in-elliptic-bottom-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "scale-in-center":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "slide-out-top": {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          to: {
            transform: "translateY(-2000px)",
            opacity: "0",
          },
        },
        "slide-in-elliptic-bottom-bck": {
          "0%": {
            transform: "translateY(600px) rotateX(-30deg) scale(6.5)",
            "transform-origin": "50% -100%",
            opacity: "0",
          },
          to: {
            transform: "translateY(0) rotateX(0) scale(1)",
            "transform-origin": "50% 500px",
            opacity: "1",
          },
        },
        "scale-in-center": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
