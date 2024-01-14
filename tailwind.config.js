/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				logoFont: ['Lemon', 'serif']
			}
		}
	},
	plugins: [require('daisyui')]
};
