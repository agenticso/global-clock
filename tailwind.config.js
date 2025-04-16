/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-bg': '#1a1a2e', // Dark blue/purple
        'tech-card': 'rgba(22, 36, 71, 0.8)', // Semi-transparent darker blue
        'tech-border': '#0f3460', // Darker blue border
        'tech-text-primary': '#e94560', // Neon pink/red for titles
        'tech-text-secondary': '#e0e0e0', // Off-white for secondary text
        'tech-accent': '#53dd6c', // Neon green for accents (clock hands)
        'tech-analog-bg': 'rgba(15, 52, 96, 0.5)', // Semi-transparent background for analog clock
      },
      fontFamily: {
        'orbitron': ['"Orbitron"', 'sans-serif'], // Techy font for titles
        'mono': ['"Roboto Mono"', 'monospace'] // Monospace for digital clock
      },
      gridTemplateColumns: {
        '3-auto': 'repeat(3, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '3-auto': 'repeat(3, minmax(0, 1fr))',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(83, 221, 108, 0.5)', // Neon green glow
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}