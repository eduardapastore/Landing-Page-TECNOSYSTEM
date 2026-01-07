/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { title: ['Righteous', 'sans-serif'] },
      subtitle: { dmSans: ['DM Sans', 'sans-serif'] },
      description: { dmSans: ['DM Sans', 'sans-serif'] },
    },
  },
  plugins: [],
}

