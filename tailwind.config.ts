import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pinky: "#f5c5c9",
        bluey: "#355274",
        cart: "#f97316",
        button: "#161b33",
        hovr: "#475569",
        logout: "#b23b3b",
        overlay: "linear-gradient(180deg, rgba(19,41,67,1) 0%, rgba(19,41,67,1) 0%, rgba(254,130,140,1) 0%, rgba(19,41,67,1) 100%, rgba(19,41,67,1) 100%, rgba(52,79,96,0.6054796918767507) 100%, rgba(255,95,60,0.5858718487394958) 100%, rgba(204,111,60,1) 100%, rgba(19,41,67,1) 100%);",
      },
    },
  },
  plugins: [],
};
export default config;
