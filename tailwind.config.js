module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570DF8",
          secondary: "#37CDBE",
          
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
}
