/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                space: {
                    900: '#050B14',
                    800: '#0F172A',
                    accent: '#00F0FF'
                },
                glass: 'rgba(255, 255, 255, 0.03)'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace']
            },
            animation: {
                'float': 'float 8s ease-in-out infinite',
                'scan': 'scan 4s linear infinite',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                scan: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '0% 100%' }
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            }
        },
    },
    plugins: [],
}
