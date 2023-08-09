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
        "primary": "#f6eb9a",
        "secondary": "#5853bc",
        "tertiary": "#362391",
        "quaternary": "#1c0c59",
      },
    },
  },
  plugins: [],
};
export default config;
