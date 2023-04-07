/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
  extend: {
    colors: {
      primary: "#C9872B",
      secondary: {
        DEFAULT: "#B69575",
        opacity: "#161616",
        15: "rgba(182, 149, 117, 0.15)",
      },
      tertiary: "#0F0F0F",
      inputFieldColor: "rgba(0, 0, 0, 0.06)",
    },
    gridTemplateColumns: {
      "contactSection": "1fr 2fr",
    },
    fontFamily: {
      Lato: ["Lato", "sans-serif"],
      Bebas: ["Bebas Neue", "sans-serif"],
      Yeseva: ["Yeseva One", "sans-serif"],
      Abel: ["Abel", "sans-serif"],
      Gloock:["Gloock","sans-serif"]
    },
  },
  plugins: [ require('flowbite/plugin')],
}
}

 