export function getTextColor(backgroundColor) {
	// Convert the background color to RGB format
	//This removes the '#' symbol from the beginning of the hexadecimal color code and
	//converts the remaining hexadecimal string to an integer in base 16 (hexadecimal) format, resulting in the RGB value as a decimal integer.
	const rgb = parseInt(backgroundColor.slice(1), 16);

	//rgb >> 16 shifts the bits 16 positions to the right, isolating the red component.
	const r = (rgb >> 16) & 0xff;
	const g = (rgb >> 8) & 0xff;
	const b = (rgb >> 0) & 0xff;

	// Calculate the brightness
	//The brightness of the background color is calculated using a common formula that takes into account the human perception of color:
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;

	// Set the text color based on brightness
	if (brightness > 128) {
		return "#000"; // Light background, use dark text
	} else {
		return "#fff"; // Dark background, use light text
	}
}

//how this works in example
/**
 * the color  #ff0033 
 * remove the '#' symbol from the hexadecimal color code: ff0033.

Convert the remaining hexadecimal string to an integer in base 16 (hexadecimal) format: parseInt("ff0033", 16).

Perform bitwise operations to extract the RGB components:

Red (R): (rgb >> 16) & 0xff
Green (G): (rgb >> 8) & 0xff
Blue (B): (rgb >> 0) & 0xff
Let's do the conversions:

Remove '#' symbol: ff0033
Convert to decimal: parseInt("ff0033", 16) results in 16711731 in decimal.
Now, let's extract the RGB components:

Red (R): (16711731 >> 16) & 0xff gives 255 (ff in hexadecimal).
Green (G): (16711731 >> 8) & 0xff gives 0 (00 in hexadecimal).
Blue (B): (16711731 >> 0) & 0xff gives 51 (33 in hexadecimal).
So, the RGB components of the hexadecimal color code #ff0033 in decimal base are as follows:

Red: 255
Green: 0
Blue: 51
 */
