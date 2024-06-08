/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideFromBottom: {
          /* '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }, */
          '0%' :{
            transform: 'translateY(50%)',
            opacity: '0'
         },
         '100%': {
            transform: 'translateY(0%)',
            opacity: '1'
         }
        }
      },
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
}

