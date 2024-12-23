import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--font-manrope)", "sans-serif"],
      // },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pageBackground: "#F4F4F4",
        primaryTextColor: "#11142D",
        secondaryTextColor: "#808191",
        primaryColor: "#475BE8",
        whiteColor: "#FCFCFC",

        /* Dark Mode Colors */
        pageBlackColor: '#1A1D1F',


      },
      backgroundImage: {
        'signin-background': "url(../public/bg-signin.png)",
      },
    },
  },
  plugins: [],
} satisfies Config;
