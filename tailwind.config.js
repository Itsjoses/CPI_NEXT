/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'hoverPurple' : '#c9cedd',
      }
    },
    minWidth:{
      '16': '4rem',
      '32': '8rem',
      'screen': '100vh'
    }

  },
  plugins: [require("daisyui")],
}