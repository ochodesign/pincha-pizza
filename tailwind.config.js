module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        chewy: ["Chewy", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        saira: ["Saira", "sans-serif"],
        modern: ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#f3f7f5',
          100: '#e1ede7',
          200: '#c3dbcf',
          300: '#a0c7b5',
          400: '#6fa98e',
          500: '#366D58',
          600: '#2e5c4a',
          700: '#254b3d',
          800: '#1c3a2f',
          900: '#142a22',
        },
        black: '#000',
        white: '#fff',
      },
      fontFamily: {
        saira: ["Saira", "sans-serif"],
        modern: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
