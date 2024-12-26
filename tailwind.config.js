/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#6366f1',
        container: '#6366f1',
        on: '#ffffff',
      },
      secondary: {
        DEFAULT: '#10b981',
        container: '#10b981',
      },
      tertiary: {
        DEFAULT: '#10b981',
        container: '#10b981',
      },
      outline: {
        DEFAULT: '#6366f1',
        var: '#10b981',
      },
      error: {
        DEFAULT: '#ef4444',
        container: '#fca5a5',
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
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
