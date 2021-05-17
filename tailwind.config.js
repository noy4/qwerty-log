module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        my: {
          black: "#1a202c",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
