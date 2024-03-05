/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		//background image for signup
		extend: {
			backgroundImage: {
				bb: "url('./src/assets/Ic.png')",
			},
			screens: {
				sm: { min: "300px", max: "767px" },
				// => @media (min-width: 640px and max-width: 767px) { ... }
				md: { min: "768px", max: "1023px" },
				// => @media (min-width: 768px and max-width: 1023px) { ... }
				lg: { min: "1024px", max: "1279px" },
				// => @media (min-width: 1024px and max-width: 1279px) { ... }
				xl: { min: "1280px", max: "1535px" },
				// => @media (min-width: 1280px and max-width: 1535px) { ... }
				"2xl": { min: "1536px" },
				// => @media (min-width: 1536px) { ... }
			},
			colors: {
				border: "#AEAEAE",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				primary: "#0030AD",
				secondary: "#DE801C",
				secondaryAscent: "#FFE6CC",
				ascentBlue: "#F5F8FF",
				brown: "#553B3B",
				ascentGray: "#CCD6EF",
				lightGray: "#F3F3F3",
				red: "#DA0000",
				iconGray: "#757575",
				cardBrown: "#B80000",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
