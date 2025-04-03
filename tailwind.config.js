module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust paths based on your project structure
    theme: {
            extend: {
              keyframes: {
                shine: {
                  '0%': { 'background-position': '100%' },
                  '100%': { 'background-position': '-100%' },
                },
              },
              animation: {
                shine: 'shine 5s linear infinite',
              },
            },
          },
    plugins: [],
  };
  