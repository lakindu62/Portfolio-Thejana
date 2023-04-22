/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "iceland":['Iceland', 'sans-serif'],
      "IBMPlexSerif":['IBMPlexSerif', 'sans-serif']
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
        'esm':{'max':'450px'},

        
  
        
  
        
  
        
  
        
        'miesm':{'min':'450px'},

        'mism': {'min': '639px'},
        // => @media (min-width: 639px) { ... }
        'mimd': {'min': '767px'},
        // => @media (min-width: 767px) { ... }
        'milg': {'min': '1023px'},
        // => @media (min-width: 1023px) { ... }
        'mixl': {'min': '1279px'},
        // => @media (min-width: 1279px) { ... }
        'mi2xl': {'min': '1535px'},
        // => @media (min-width: 1535px) { ... }
      }
    ,
    extend: {
      boxShadow:{
        "heroShadow" : '0px 3px 4px 0px rgba(0,0,0,0.25)',
        "cardShadow" : '0px 2px 15px 2px rgba(118, 36, 147, 0.75)',
        "buttonFocusShadow" : 'inset 0px 4px 4px rgba(0, 0, 0, 0.25);',
        "aboutTextShadow" : "2px 4px 4px 0px rgba(186, 180, 180, 0.4)"

      },
      // fontFace: {
      //   'IBMPlexSerif': {
      //     src: "url('src/assets/fonts/IBMPlexSerif-SemiBold.woff') format('woff2'), url('src/assets/fonts/IBMPlexSerif-SemiBold.woff') format('woff')",
      //     fontWeight: 'normal',
      //     fontStyle: 'normal',
      //   },
      // },
    },
  },
  plugins: [
    
  ],
}
