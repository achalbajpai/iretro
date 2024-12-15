/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            "terminal-black": "#000000",
            "terminal-green": "#00ff00",
            "terminal-yellow": "#ffff00",
            "terminal-blue": "#0000ff",
         },
         fontFamily: {
            mono: ["Courier New", "monospace"],
         },
         animation: {
            pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
         },
         backgroundImage: {
            "screen-lines":
               "repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.1) 0px, rgba(0, 255, 0, 0.1) 1px, transparent 1px, transparent 2px)",
         },
      },
   },
   plugins: [],
};
