/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      typography: {
        resume: {
          // Primary color: 34bf49
          // Neutral color: #333,
          css: {
            h1: {
              textAlign: "center",
              textTransform: "uppercase",
              marginTop: "1rem",
              marginBottom: "0rem",
              color: "#34bf49",
            },
            hr: {
              borderColor: "#333",
              marginTop: "3rem",
              marginBottom: "3rem",
            },
            h2: {
              textAlign: "center",
              marginTop: "1.5rem",
              color: "#333",
              fontSize: "1rem",
            },
            h3: {
              textTransform: "uppercase",
              color: "#34bf49",
            },
            h4: {
              color: "#333",
              marginLeft: "1rem",
              marginBottom: "0rem",
            },
            h5: {
              color: "#34bf49",
              marginTop: "0rem",
              marginLeft: "2rem",
            },
            p: {
              color: "#333",
              marginLeft: "1rem",
            },
            strong: {
              color: "#000",
            },
            li: {
              color: "#333",
              marginLeft: "1rem",
            },
          },
        },
      },
    },
  },
};
