module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
                colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
    },
    extend: {
              backgroundImage: theme => ({
         'gif-bg': "url('./src/assets/images/bg.gif')",
        }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
