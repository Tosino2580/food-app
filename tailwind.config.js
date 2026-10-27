/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paprika: {
          50: '#FDF4F0',
          100: '#FCE6DC',
          200: '#F8CEBC',
          300: '#F2A88D',
          400: '#E97A55',
          500: '#D85427',
          600: '#C84C21', // Primary Terracotta/Paprika
          700: '#A33814',
          800: '#832E14',
          900: '#6C2814',
          950: '#3D1206',
        },
        forest: {
          50: '#F2F7F4',
          100: '#E1EDE6',
          200: '#C4DCCF',
          300: '#9BC3AF',
          400: '#6DA38A',
          500: '#49856A',
          600: '#366B53',
          700: '#2D5644',
          800: '#1B4332', // Deep Herb Forest
          900: '#173629',
          950: '#0C1E17',
        },
        maize: {
          50: '#FEFCF9',
          100: '#FDF8F3', // Warm Maize Cream Background
          200: '#FAF0E4',
          300: '#F4E3CD',
          400: '#ECCFA8',
          500: '#E2B87D',
          600: '#CF9952',
          700: '#AC7537',
          800: '#8A5C2D',
          900: '#714B27',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#2B2D2F',
          900: '#1A1C1D', // Deep warm charcoal
          950: '#111213',
        },
        amberGold: {
          DEFAULT: '#E9A825',
          dark: '#C88B16',
          light: '#F8CB64'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(43, 45, 47, 0.05)',
        'card': '0 10px 30px -4px rgba(43, 45, 47, 0.08)',
        'elevated': '0 20px 40px -10px rgba(200, 76, 33, 0.12)',
        'modal': '0 25px 50px -12px rgba(17, 18, 19, 0.25)',
      }
    },
  },
  plugins: [],
}
