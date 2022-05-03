module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        // Bounces for a total of 1 seconds
        'bounce-short': 'bounce 0.5s ease-out 0.5'
      }
    }
  },
  plugins: [],
};
