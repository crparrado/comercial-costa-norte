import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0f172a", // Slate 900
                    foreground: "#f8fafc", // Slate 50
                },
                secondary: {
                    DEFAULT: "#ea7600", // Custom Orange from Logo
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#f1f5f9", // Slate 100
                    foreground: "#64748b", // Slate 500
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
