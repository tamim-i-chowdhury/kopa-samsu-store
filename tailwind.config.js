/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#efaa69",

          secondary: "#0e8e88",

          accent: "#0cb6f4",

          neutral: "#222330",

          "base-100": "#F2F0F4",

          info: "#75A3DB",

          success: "#45DEA1",

          warning: "#F7A855",

          error: "#EF5787",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
