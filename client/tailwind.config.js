/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "b": {
          transparent: 'transparent',
          'primary': '#EEE3FF',
          'secondary': '#8054C7',
          'purple': '#5A3696',
          'success': '#63D838',
          'danger': '#ef4444',
          'gray': '#D1D5DB',
          'gray-2': '#6B7280',
          'info': '#78dcca',
        }
      },
      borderRadius: {
        'default': '3rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

