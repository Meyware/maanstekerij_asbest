/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'asbest-blue': '#48b9b2',
                'asbest-blue-dark': '#3e605e'
            },
        },
    },
    plugins: [require("daisyui")],
};

