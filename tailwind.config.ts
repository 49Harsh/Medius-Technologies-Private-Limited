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
        emerald: {
          300: '#6ee7b7',
          400: '#34d399',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        'DEFAULT': '.25rem',
        'md': '.375rem',
        'lg': '.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}