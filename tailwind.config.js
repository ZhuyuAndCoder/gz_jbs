/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        space: {
          950: '#0B1426', // 深空蓝
          900: '#1a2332',
          800: '#2d3748',
          700: '#4a5568',
        },
        cosmic: {
          600: '#6B46C1', // 神秘紫
          500: '#805ad5',
          400: '#9f7aea',
        },
        starlight: {
          400: '#C0C0C0', // 星光银
          300: '#d1d5db',
          200: '#e5e7eb',
        },
        neon: {
          500: '#FF1493', // 霓虹粉
          400: '#ff66b3',
          300: '#ff99cc',
        }
      },
      fontFamily: {
        'tech': ['Orbitron', 'monospace'], // 未来感科技字体
        'chinese': ['Noto Sans SC', 'sans-serif'], // 思源黑体
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          'from': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor' },
          'to': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
