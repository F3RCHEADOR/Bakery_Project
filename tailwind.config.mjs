/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
				script: ['Pacifico', 'cursive'],
				// Otras configuraciones
			},
		},
	},
	plugins: [],
}
