// #FF8187
// #34bf49
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                default: {
                    primary: "#34bf49",
                    secondary: "#AEE5B6",
                    accent: "#FF8187",
                    neutral: "#000000",
                    "base-100": "#AEE5B6",
                },
            },
        ],
    },
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
                            marginTop: "1rem",
                            marginBottom: "1rem",
                        },
                        h2: {
                            textAlign: "center",
                            marginTop: "1rem",
                            color: "#333",
                            fontSize: "1rem",
                        },
                        h3: {
                            textTransform: "uppercase",
                            color: "#34bf49",
                            marginBottom: "0rem",
                            marginTop: "0rem",
                        },
                        h4: {
                            color: "#333",
                            marginLeft: "1rem",
                            marginBottom: "0rem",
                            marginTop: "0rem",
                        },
                        h5: {
                            color: "#34bf49",
                            marginTop: "0rem",
                            marginLeft: "2rem",
                            marginBottom: "0rem",
                        },
                        p: {
                            color: "#333",
                            marginLeft: "1rem",
                            marginBottom: "0rem",
                        },
                        strong: {
                            color: "#000",
                        },
                        li: {
                            color: "#333",
                            margin: "0rem",
                            marginLeft: "1rem",
                        },
                        ul: {
                            listStyleType: "none",
                        },
                        "ul > li::before": {
                            content: "'\\2022'",
                            color: "#333",
                            display: "inline-block",
                            width: "1em",
                            marginLeft: "-1em",
                        },
                        code: {
                            color: "#fff",
                            backgroundColor: "#333",
                            padding: "1.25rem",
                        },
                    },
                },
            },
        },
    },
};

export default config;
