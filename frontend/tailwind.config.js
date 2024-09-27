/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(13, 8, 13, 0.18) 0%, rgba(121, 91, 212, 0.21) 50%, #0A0A0A 100%)",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"], // Set Helvetica as the default sans font
      },
    },
  },
  plugins: [],
};
