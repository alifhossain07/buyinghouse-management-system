/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./**/*.html",    // To include all HTML files in the project
      "./**/*.js",      // To include all JS files in the project
      "./**/*.jsx",     // To include JSX files (for React projects)
      "./**/*.ts",      // To include TypeScript files
      "./**/*.tsx",     // To include TypeScript JSX files
      "./**/*.php",     // If you're using PHP in the project
      "./**/*.vue",     // For Vue.js files
      "./**/*.svelte",  // For Svelte files
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  