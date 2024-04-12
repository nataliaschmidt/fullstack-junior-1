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
        "pink-personal": "#DC0155",
        "white-hero": "#F4F3F8",
      },
      boxShadow: {
        'profile-shadow': '0px 24px 50px 0px rgba(13, 12, 56, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
