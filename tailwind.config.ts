import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background, #f2f2f2)",
        foreground: "var(--foreground, #2e2e2e)",
        buttonBackground: "#7F8C8F",
        darkBackground: "#2e2e2e",
        darkText: "#2e2e2e",
        lightText: "#7f7f7f",
        lightGrey: "#ECF0F1",
        mediumGrey: "#595959",
        darkGrey: "#7F7F7F",
        greyLight: "#A5A5A5",
        greyMuted: "#CCCCCC",
        primary: "#7f8c8f", // Custom primary button color
      },
      fontSize: {
        xs: '1.333rem',
        sm: '1.6rem',
        p: '1.6rem',
        h6: '1.92rem',
        h5: '2.304rem',
        h4: '2.765rem',
        h3: '3.318rem',
        h2: '3.981rem',
        h1: '4.777rem',
      },
      padding: {
        btn: '1.6rem',
      },
      borderRadius: {
        btn: '0.375rem',
      },
      letterSpacing: {
        default: '-3.2%',
      },
      lineHeight: {
        default: '1.3',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Lato', 'sans-serif'],
        button: ['Poppins', 'sans-serif'],
      },
      darkMode: 'class', // Ensures dark mode can be toggled via class
    },
  },
  plugins: [],
} satisfies Config;