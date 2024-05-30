export function getColorFromCode(colorCode: string) {
	switch (colorCode.toUpperCase()) {
		case "B":
			return "black";
		case "R":
			return "red";
		case "G":
			return "gray";
		case "Y":
			return "yellow";
		case "P":
			return "purple";
		case "brown":
			return "brown";
		// Add more cases as needed
		default:
			return colorCode;
	}
}
