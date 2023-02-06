module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/components/GetToKnow/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {
      colors: {
        khaki: "#9c8d5e",
        orange: "#e8b72c",
        turf: "#ad9d68",
        team: "#B2A065",
        roadmap: "#A49259",
        faq: "#8B7A46",
        footer: "#544825",
        lightTurf: "#BFAC70",
      },
      maxWidth: {
        864: "864px",
        1080: "1080px",
        1440: "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
