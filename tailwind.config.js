/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin", "daisyui")]
};
