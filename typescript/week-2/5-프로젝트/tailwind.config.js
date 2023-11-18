/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            border: {
                'primary-100': `1px solid #DBE8FF`
            },
            color: {
                'primary-100': `#DBE8FF`
            }
            ,
            backgroundColor: {
                'primary-100': `#DBE8FF`
            },
            padding: {
                'button': '8px 16px'
            },
            width: {
                'layout': '1440px'
            }
        },
    },
    plugins: [],
}

