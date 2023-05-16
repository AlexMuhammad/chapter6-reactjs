/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        "bnr-green": "#5CB85F",
        "bnr-blue": "#0D28A6",
        "bnr-gray": "#F1F3FF",
        "bnr-gold": "#F9CC00",
        "bnr-dark-gray": "#CFD4ED"
      },
      fontSize: {
        "bnr-xl": "36px",
        "bnr-md": "24px",
        "bnr-sm": "14px",
      },
      fontWeight: {
        bnr700: "700",
        bnr600: "600",
        bnr500: "500",
        bnr400: "400",
        bnr300: "300"
      }
    },
  },
  plugins: [],
}

