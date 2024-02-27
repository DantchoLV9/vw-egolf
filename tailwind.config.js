/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "ui-sans-serif", "system-ui"],
				goldman: ["Goldman", "ui-sans-serif", "system-ui"],
			},
			colors: {
				accent: "#001E50",
				darkerAccent: "#001943",
				lighterAccent: "#003765",
				foreground: "#1A1A1A",
			},
			backgroundImage: {
				heroBg: "url('../images/hero_image.webp')",
			},
		},
	},
	plugins: [],
};
