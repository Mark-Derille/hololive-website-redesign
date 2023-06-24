/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "315px",
        tablet: "640px",
        laptop: "768px",
        desktop: "1024px",
        "device-xl": "1328px",
      },
      colors: {
        "holo-blue": "#27C7FF",
      },
    },
  },
  plugins: [],
};
