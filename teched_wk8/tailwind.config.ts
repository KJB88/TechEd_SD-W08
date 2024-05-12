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
          'skadovsk': "url('img/skadovsk.webp')",
          '100rads': "url('img/100rads.webp')",
          'nuke': "url('img/nuke.png')",
          'pda': "url('img/pda.png')"
      },
    },
  },
  plugins: [],
};
export default config;
