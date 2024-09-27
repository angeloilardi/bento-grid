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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "purple-100": "hsl(254,88%,90%)",
        "purple-500": "hsl(256,67%,59%)",
        "yellow-100": "hsl(31,66%,93%)",
        "yellow-500": "hsl(39,100%,71%)"
      },
    },
  },
  plugins: [],
};
export default config;
