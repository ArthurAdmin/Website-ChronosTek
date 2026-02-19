/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        cyber: {
          black: '#000000',
          dark: '#0a0a0f',
          darkSecondary: '#0d1117',
          card: '#161b22',
          border: '#21262d',
          text: '#c9d1d9',
          textMuted: '#8b949e',
          blue: '#00d4ff',
          blueDark: '#0099cc',
          blueGlow: '#58a6ff',
          accent: '#7c3aed',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)',
        'blue-gradient': 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
        'glow-pattern': 'radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-blue-lg': '0 0 40px rgba(0, 212, 255, 0.4)',
      },
    },
  },
  plugins: [],
}
