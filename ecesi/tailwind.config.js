/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        globalGreen : "#15803D",
        border : "#F1F5F9",
        borderMobile : "#E5E7EB",
        payButton : "#9CA3AF",
        bgSpeak : "#166752CC",
        input : "#94A3B8",
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bgHero.png')",
        'speaker' : "url('/src/assets/bgSpeaker.png')",
        'bgMap' : "url('/src/assets/bgMaps.png')"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jakarta': ["Plus Jakarta Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}