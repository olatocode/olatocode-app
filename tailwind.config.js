/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // dark slate background
        secondary: '#1E293B', // slate-800
        accent: '#ab0020', // red accent
        recruiter: '#2563eb', // blue-600
        dark: '#1e293b', // slate-800
        yellow: '#facb33', // yellow background
      },
    },
  },
  plugins: [],
}
