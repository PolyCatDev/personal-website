/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {

			background: {
				100: "#7C6F64",
				200: "#665C54",
				300: "#504945",
				400: "#3C3836",
				500: "#32302F",
				600: "#1D2021"
			},

			foreground: {
				100: "#A89984",
				200: "#BDAE93",
				300: "#D5C4A1",
				400: "#EBDBB2",
				500: "#FBF1C7",
			},

			red: {
				100: "#CC241D",
				200: "#9d0006"
			},

			green: {
				100: "#98971A",
				200: "#79740E"
			},

			yellow: {
				100: "#D79921",
				200: "#B57614"
			},

			blue: {
				100: "#458588",
				200: "#076678"
			},
			
			purple: {
				100: "#B16286",
				200: "#8F3F71"
			},

			aqua: {
				100: "#689D6A",
				200: "#427B58"
			},

			orange: {
				100: "#D65D0E",
				200: "#AF3A03"
			}
		},
		extend: {
			backgroundImage: {
				'bkg-pattern': "url('/src/assets/bkg_pattern.svg')"
			},
			cursor: {
				'capitaine': "url('/src/assets/capitaine-cursor.png'), auto"
			}
		},
	},
	plugins: [],
}
