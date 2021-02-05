module.exports = {
  purge: [
    "./src/**/*.svelte",
    "./public/**/*.html"
  ],
  // https://tailwindcss.com/docs/dark-mode
  darkMode: false, // or 'media' or 'class'
  theme: {
    // https://tailwindcss.com/docs/theme
    // https://tailwindcss.com/docs/customizing-colors
    extend: {},
  },
  // https://tailwindcss.com/docs/configuring-variants
  variants: {
    extend: {},
  },

  // https://tailwindcss.com/docs/plugins
  
  plugins: [require("@tailwindcss/forms")], //https://github.com/tailwindlabs/tailwindcss-forms
};
