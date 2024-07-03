/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            'custom-gradient': 'linear-gradient(20deg, #14344B, #0E141B)',
         },
         fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
         colors: {
            text: '#F0EBD8',
            background: {
              'main': '#0E141B',
              'highlight': '#1E2329',
              'hover': '#313843',
              'secondary': '#14344B',
              'tertiary': '#212B45',
               50: "#f3f5fc",
               100: "#e7ecf7",
               200: "#c9d6ee",
               300: "#9ab4df",
               400: "#648dcc",
               500: "#406eb7",
               600: "#2f569a",
               700: "#27447d",
               800: "#243c68",
               900: "#223458",
               950: "#0d1321",
            },
            
            primary: {
              DEFAULT: '#66C0F4',
               50: "#f5f8fa",
               100: "#eaeff4",
               200: "#d1dde6",
               300: "#a8c1d1",
               400: "#799fb7",
               500: "#59839e",
               600: "#456a84",
               700: "#3e5d75",
               800: "#32495a",
               900: "#2d3e4d",
               950: "#1e2933",
            },
            secondary: {
              DEFAULT: '#4B619B',
               50: "#f4f7f9",
               100: "#eaf2f5",
               200: "#d9e6ec",
               300: "#c2d5df",
               400: "#a9bfd0",
               500: "#92aac2",
               600: "#738bab",
               700: "#697d99",
               800: "#56667d",
               900: "#4a5665",
               950: "#2b323b",
            },
            'tertiary': '#212B45',
            'success': '#A1CD44',
            'warning': '#CD5444',
            'text': {
              'main': '#F3F3F3',
              'dim': '#76808C'
            }
         },
      },
      width: {
         '7/10': '70%', // Clase personalizada w-7/10 para ancho de formulario
       },
   },
   plugins: [],
};
