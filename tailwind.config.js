/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f8fafc', // soft blue/white background
        secondary: '#e0e7ef', // light blue-gray
        accent: '#6366f1', // indigo-500
        recruiter: '#2563eb', // blue-600
        dark: '#1e293b', // slate-800
      },
    },
  },
  plugins: [],
};
