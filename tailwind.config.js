/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'theme-bg': 'var(--color-bg)',
        'theme-panel': 'var(--color-panel)',
        'theme-text': 'var(--color-text)',
        'theme-muted': 'var(--color-text-muted)',
        'theme-border': 'var(--color-border)',
        'theme-accent': 'var(--color-accent)',
        'theme-accent-hover': 'var(--color-accent-hover)',
        'theme-accent-bg': 'var(--color-accent-bg)',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        japanese: ['"Noto Sans JP"', '"Hiragino Kaku Gothic Pro"', 'Meiryo', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
