/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    container: {
      center: true,
    },

     screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        "payroll-purple": "#611076",
        "light-purple": "#781490",
        "active-purple": "#25032E",
        "payroll-lilac": "#F6DFFC",
        "light-white": "rgba(255,255,255,0.18)",
      },
     
    
    },
  },
  variants:{ backgroundColor: ['responsive','hover', 'focus','active', 'checked'] },
  plugins: [],
};
