module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html'
    ]
  },
  theme: {},
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}