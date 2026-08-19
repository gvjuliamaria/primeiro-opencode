module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          DEFAULT: '#0f172a'
        },
        sitebg: '#120D23',
        accent: '#F5C61C'
      }
    },
  },
  plugins: [],
}
