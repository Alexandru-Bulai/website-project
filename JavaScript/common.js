// Drop down menu functionality
const nav_button = document.getElementById("nav_button");
const nav_bar = document.getElementById("nav_bar");

nav_button.addEventListener('click', () => {
  nav_bar.classList.toggle('hidden');
});

// Geolocation Api
const findState = () => {

	const location = document.getElementById("location");

	const allow = (position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		const locationApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

		fetch(locationApi)
		.then(response => response.json())
		.then(data => {
			location.textContent = data.principalSubdivision;
		})
	}

	const deny = () => {
		location.textContent = "Location?"
	}

		navigator.geolocation.getCurrentPosition(allow, deny);
}

window.addEventListener('load', findState);