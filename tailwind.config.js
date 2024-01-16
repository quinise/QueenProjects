/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.ts",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'peach': '#f6c492',
      'darkBrown': '#54300c',
      'sunflower': '#f5dd9d',
      'white': '#ffffff',
      'metaBlue': '#1778f2',
      'googleBlue': '#4285f4',
      'green': '#00FF00',
      'red': '#ff0000'
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

