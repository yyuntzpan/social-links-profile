import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'green': "hsl(75, 94%, 57%)",
        'white': "hsl(0, 0%, 100%)",
        'grey-700': "hsl(0, 0%, 20%)",
        'grey-800': "hsl(0, 0%, 12%)",
        'grey-900': "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

