/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
        colors: {}
  },
  plugins: [
        require("@catppuccin/tailwindcss")({
            defaultFlavour: "mocha"
        })
    ],
}
