module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Raleway", "sans-serif"],
        body: ["Raleway", "sans-serif"],
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tw-elements/dist/plugin")],
};
