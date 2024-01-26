document.addEventListener('DOMContentLoaded', () => {
  // Object mapping animal types to their respective classes
  const animals = {
    dogs: '.dog',
    cats: '.cat',
    foxes: '.fox',
    parrots: '.parrot'
  }

  let selectedAnimalType = null

  // Function to hide all gallery items
  const hideAllAnimals = () => {
    document.querySelectorAll('.gallery-items').forEach(item => {
      item.style.display = 'none'
    })
  }
  // Function to display selected animal
  const showSelectedAnimals = () => {
    hideAllAnimals()
    if (selectedAnimalType) {
      document.querySelectorAll(`${selectedAnimalType} .gallery-items`).forEach(item => {
        item.style.display = 'block'
      })
    }
  }

  // Update the selectedAnimalType based on user click
  Object.keys(animals).forEach(key => {
    document.querySelectorAll(animals[key]).forEach(element => {
      element.addEventListener('click', () => {
        selectedAnimalType = animals[key]
        console.log(`Selected animal type: ${key}`)
      })
    })
  })

  // Apply button functionality
  const applyFilters = document.querySelector('#apply-filters')
  if (applyFilters) {
    applyFilters.addEventListener('click', showSelectedAnimals)
  } else {
    console.error('Apply filters button not found')
  }
})
