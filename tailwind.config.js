/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        "chatapp-purple": "#611076",
        "light-purple": "#781490",
        "active-purple": "#25032E",
        "chatapp-lilac": "#F6DFFC",
        "light-white": "rgba(255,255,255,0.18)",
      },
      // backgroundColor: {
      //   "main-bg": "#FAFBFB",
      //   "main-dark-bg": "#20232A",
      //   "secondary-dark-bg": "#33373E",
      //   "light-gray": "#F7F7F7",
      //   "half-transparent": "rgba(0, 0, 0, 0.5)",
      //   "chatapp-purple": "#611076",
      //   "light-purple": "#781490",
      //   "active-purple": "#25032E",
      //   "chatapp-lilac": "#F6DFFC",
      //   "light-white": "rgba(255,255,255,0.18)",
      // },

      backgroundImage: {
        "hero-pattern": "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        "greek-vase":
          "url('C:WorkspaceMy AppchatAppFrontendpublicgreek-vase.webp')",
        "white-bg":
          "url('https://images.pexels.com/photos/7233310/pexels-photo-7233310.jpeg')",
        "paint-bg":
          "url('https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};