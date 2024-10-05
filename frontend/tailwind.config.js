// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'btn-bg': '#0EABEB',
        'text-color' : '#0EABEB',
        'bg-color' : '#F6F8FB',
        'button-bg' : '#39973D1A',
        'btn-color': '#5678E91A',
        'btn-light' : '#718EBF'


 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)',

        
      },
     
    },
  },
  plugins: [],
};

