/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      laptop: "1201px"
    },
    container: {
      center: true,
    },
    boxShadow: {
      'primary': '0px 0px 23px 0px #9494942B',
    },
    colors: {
      'primary': "#000",
      "secondary": "red",
    },
    extend: {
      backgroundImage: {
        'hero': "url('/imgs/hed-bg.png')",
      },
    },
  },
  plugins: [],
}
