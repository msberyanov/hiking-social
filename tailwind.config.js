module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 5px 27px -6px rgba(34, 60, 80, 0.18)',
      },
      borderWidth: {
        '1': '1px',
        '1.5': '1.5px',
      }
    },
  },
  plugins: [],
}
