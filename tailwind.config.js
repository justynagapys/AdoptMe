module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'adopt-pink': '#fe646f',
        'icon-color': '#fff5f2',
      },
    },
  },
  plugins: [],
}
