/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'chewy':'Chewy',
        'bal':'Balsamiq Sans',
      },
      backgroundSize:{
        'full':'100% 100%'
      },
      animation: {
        'herodino2': 'herobike 10s linear  infinite',
        'herodino1': 'herobike2 10s linear  infinite',
        'herobounceanimnate': 'herobounce 1s linear  infinite alternate',
        'aeroplaneanimation': 'aeroplane 5s linear  infinite alternate',
      },
      keyframes: {
        herobike: {
          '0%': { transform: 'translateX(0) rotate3d(1, 1, 1, 0deg)' },
          '100%': { transform: 'translateX(-100vw) rotate3d(1, 1, 1, 45deg)' }
        },
       
        herobike2: {
          '0%': { transform: 'translateX(0)  ' },
          '100%': { transform: 'translateX(328px) ' }
        },
        herobounce: {
          '0%': { transform: 'translateY(0)  ' },
          '100%': { transform: 'translateY(-3%) ' }
        },
        aeroplane: {
          '0%': { transform: 'translateX(0)  ' },
          '100%': { transform: 'translateX(40px) ' }
        },
      }
    },
  },
  plugins: [],
}