/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        onest: ["var(--font-onest)"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(0deg, #162340 5%, #16234000 70%)",
      },
      colors: {
        dark: "#162340",
        blue: "#357690",
        green: "#2E8168",
        "border-light": "#1623401A",
        "light-blue": "#F0F7FF",
      },
    },
  },
  plugins: [],
};
