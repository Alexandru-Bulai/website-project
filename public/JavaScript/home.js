const findMyLocation = () => {
  const location = document.getElementById('location')
  if (!location) {
    console.error('location could not be found on the page')
    return
  }

  const allow = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    const locationApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

    fetch(locationApi)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        location.textContent = data.principalSubdivision
      })
      .catch(error => {
        console.error('Error fetching the location:', error)
        location.textContent = 'Location not found'
      })
  }

  const deny = () => {
    location.textContent = 'Permission denied'
  }

  navigator.geolocation.getCurrentPosition(allow, deny)
}

const locationButton = document.getElementById('location-button')
if (locationButton) {
  locationButton.addEventListener('click', findMyLocation)
} else {
  console.error('The location button could not be found on the page.')
}
