import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-sun": "#FFCF48", // buttons
        "sandy-brown": "#F2A65A", // buttons
        "wisteria": "#8A6EAF", // letters
        "daisy-bush": "#3F2B96", // background
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
