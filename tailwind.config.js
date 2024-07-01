/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "event-card": "url('/bg-event-card.png')",
        "bcc-card": "url('/bg-bcc-card.png')",
        "erc-card": "url('/bg-erc-card.png')",
      },
      boxShadow: {
        'custom': '0px 4px 75px rgba(69, 126, 204, 0.5)',
      },
      colors: {
        "purple-primary": "#37217B",
        "blue-primary": "#457ECC",
        "dark-primary": "#282828",
      }
    },
  },
  plugins: [],
};
