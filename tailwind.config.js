/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': "'Montserrat', sans-serif;",
        'Rajdhani':'font-family: "Rajdhani"'
      },
      backgroundImage: {
        'youtube-channel': "url('/src/imgs/youtube-chanel.jpg')",
        'characters': "url('/src/imgs/Chacacters.png')",
      },
      width:{
        '15vh': "15vh",
        '30vh': "30vh",
        '45vh': "45vh",
        '60vh': "60vh",
        '70vh': "70vh",
        '80vh': "80vh",
        // Pixels
        '168': "42rem",
        '193': "48rem",
      },
      height:{
        '15vh': "15vh",
        '30vh': "30vh",
        '45vh': "45vh",
        '50vh': "50vh",
        '60vh': "60vh",
        '70vh': "70vh",
        '80vh': "80vh",
        '90vh': "90vh",
        '100vh': "100vh",
        // Pixels
        '168': "42rem",
        '193': "48rem",
      },
      colors:{
        'violet-100': "#873EFF",
      },
    },
  },
  plugins: [],
};
