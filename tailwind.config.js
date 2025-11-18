/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
       th8: {
      red: '#DC2626',
      'red-dark': '#B91C1C',
      'red-soft': '#FEE2E2',
      'slate-deep': '#0F172A',
      'slate': '#64748B',
      'bg-soft': '#F8FAFC',
      emerald: '#10B981',
      amber: '#F59E0B',
      sky: '#0EA5E9',
    },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
