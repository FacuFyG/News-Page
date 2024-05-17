/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
    'Softorange': 'hsl(35, 77%, 62%)',
    'Softred': 'hsl(5, 85%, 63%)',
    'Off-white': 'hsl(36, 100%, 99%)',
    'Grayishblue': 'hsl(233, 8%, 79%)',
    'Darkgrayishblue': 'hsl(236, 13%, 42%)',
    'Verydarkblue': 'hsl(240, 100%, 5%)',

      }
    },
  },
  plugins: [],
}

