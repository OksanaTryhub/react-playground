/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle at 50% 50%, rgb(224,231,255), rgb(199,210,254), rgb(165,180,252))",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        moving: {
          "0%, 100%": { bottom: "0%" },
          "50%": { bottom: "100%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1000ms ease-in-out",
        moving: "moving 3000ms ease-in-out infinite",
      },
      boxShadow: {
        top: "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
        all: "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1), -4px 0 6px -1px rgb(0 0 0 / 0.1), -2px 0 4px -2px rgb(0 0 0 / 0.1), 4px 0 6px -1px rgb(0 0 0 / 0.1), 2px 0 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
