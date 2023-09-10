# `getTextColor` Function

The `getTextColor` function is a utility function used to determine the text color that should be used based on the brightness of a background color. It calculates the brightness of the background color and returns either a dark or light text color accordingly.

## Usage

```javascript
import { getTextColor } from './getTextColor';

// Example usage:
const backgroundColor = '#ff0033'; // Replace with your background color
const textColor = getTextColor(backgroundColor);

```
# Overview
The getTextColor function performs the following steps:

1. Convert Background Color to RGB: It removes the '#' symbol from the hexadecimal color code and converts the remaining hexadecimal string to an integer in base 16 (hexadecimal) format, resulting in the RGB value as a decimal integer.

2. Extract RGB Components: It uses bitwise operations to extract the red (R), green (G), and blue (B) components of the RGB color.

3. Calculate Brightness: It calculates the brightness of the background color using a common formula that takes into account the human perception of color. The formula used is: (R * 299 + G * 587 + B * 114) / 1000.

4. Determine Text Color: Based on the calculated brightness, it returns either a dark text color (#000) for light backgrounds or a light text color (#fff) for dark backgrounds.

# Parameters
- backgroundColor (String): The background color for which you want to determine the text color. This should be in hexadecimal format (e.g., '#ff0033').
# Returns
- textColor (String): The recommended text color ('#000' for dark text or '#fff' for light text) based on the brightness of the background color.
# Example
```javascript
// Example background color: #ff0033
const backgroundColor = '#ff0033';

// Remove '#' symbol from the hexadecimal color code and convert to decimal
const rgb = parseInt(backgroundColor.slice(1), 16);

// Extract RGB components
const r = (rgb >> 16) & 0xff;
const g = (rgb >> 8) & 0xff;
const b = (rgb >> 0) & 0xff;

// Calculate brightness
const brightness = (r * 299 + g * 587 + b * 114) / 1000;

// Determine text color based on brightness
const textColor = brightness > 128 ? '#000' : '#fff';

// Resulting text color is '#000' for this example

```

# Notes
- Ensure that the backgroundColor parameter passed to the function is in the correct hexadecimal format.

- You can customize the function's logic and color choices to suit your application's design and accessibility requirements.