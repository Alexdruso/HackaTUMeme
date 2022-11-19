module.exports = {
  content: [
    "./pages/!(api)/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
      body: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
    },
    colors: {
      white: '#fff',
      purple: '#aa4a9b',
      grey: {
        dark: '#6b6b6b',
        DEFAULT: '#4F4F4F',
        light: '#e6e6e6',
      },
      imdb: {
        yellow: '#f5c518',
      }
    },
  },
  plugins: [],
}
