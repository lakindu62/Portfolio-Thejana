/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "iceland":['Iceland', 'sans-serif']
    },
    
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'esm':{'max':'350px'},
      }
    ,
    extend: {
      boxShadow:{
        "heroShadow" : '0px 3px 4px 0px rgba(0,0,0,0.25)',
        "cardShadow" : '0px 2px 15px 2px rgba(118, 36, 147, 0.75)',

      },
    },
  },
  plugins: [
    
  ],
}
