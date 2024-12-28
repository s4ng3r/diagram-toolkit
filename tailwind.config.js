/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#6366f1',
        container: '#c7d2fe',
        on: '#ffffff',
      },
      secondary: {
        DEFAULT: '#10b981',
        container: '#10b981',
        on: '#ffffff',
      },
      tertiary: {
        DEFAULT: '#10b981',
        container: '#10b981',
        on: '#ffffff',
      },
      outline: {
        DEFAULT: '#64748b',
        var: '#cbd5e1',
      },
      surface: {
        DEFAULT: '#f8fafc',
        dim: '#e2e8f0',
        on: '#0f172a',
      },
      error: {
        DEFAULT: '#ef4444',
        container: '#fca5a5',
      },
      white: {
        DEFAULT: '#ffffff',
      },
    },
    spacing: {
      none: '0px',
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      '2xl': '40px',
      '3xl': '48px',
      '4xl': '56px',
      '5xl': '64px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
