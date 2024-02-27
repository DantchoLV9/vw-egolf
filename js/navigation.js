// Toggle navigation on/off on mobile devices
function toggleNavigation() {
	// Get the navigation elements list
	const navigationElements = document.getElementById("navigation_elements");

	// Get the navigation toggle button icons/children
	const navToggleButtonIcons = document.getElementById("nav_toggle_button").children;

	// Toggle between hidden and flex classes for the navigation elements list
	if (navigationElements.classList.contains("hidden")) {
		navigationElements.classList.replace("hidden", "flex");
        // Toggle between burger and close icons
		for (const icon of navToggleButtonIcons) {
			icon.classList.toggle("hidden");
		}
	} else {
		navigationElements.classList.replace("flex", "hidden");
		for (const icon of navToggleButtonIcons) {
			icon.classList.toggle("hidden");
		}
	}
}
