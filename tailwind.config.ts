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
        'buttermilk': '#FBE5A8', // background hearders
        'goldenglow': '#F8D77C',
        'selectiveyellow': '#F4B400', // headers text
        'columbiablue': '#A5DCF6',
        'mayablue': '#78C7EE',
        'pacificblue': '#039BE5',
        'sazerac': '#F2DECC',
        'silk': '#C2B2A3',
        'schooner': '#91857A',
        'ottoman': '#D1DBC3',
        'norway': '#ABB899',
        'highland': '#7F9463',
        'linkwater': '#CBCFD7',
        'mischka': '#A3A6B0',
        'stromgray': '#797D89',
        'surf': '#B6CFB8', // background
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'bg-image': 'url(../public/bgGradient.svg)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;
