import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mythic: ['"Cinzel Decorative"', 'serif'], // For narrative/brand elements
      },
      colors: {
        // DEUS Core Palette
        divine: {
          50: '#f8faff',
          100: '#eef4ff',
          500: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        quantum: {
          50: '#f5f0ff',
          500: '#8b5cf6',
          900: '#4c1d95',
        },
        mythic: {
          50: '#fefaf5',
          500: '#d97706',
          900: '#78350f',
        },
        hardware: {
          50: '#f9fafb',
          500: '#6b7280',
          900: '#1f2937',
        },
      },
      animation: {
        'quantum-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'narrative-fade': 'fadeIn 1.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;
