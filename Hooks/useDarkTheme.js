import { useState, useEffect } from "react";

export default function useDarkSide() {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== "undefined") {
			// Access localStorage only on the client side
			return localStorage.theme || "light";
		} else {
			// Default to 'light' if localStorage is not available (e.g., during server-side rendering)
			return "light";
		}
	});

	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme, colorTheme]);

	return [colorTheme, setTheme];
}
