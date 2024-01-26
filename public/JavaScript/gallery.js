document.addEventListener('DOMContentLoaded', () => {
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
      document.querySelectorAll(`.gallery-items[data-animal-type="${selectedAnimalType}"]`).forEach(item => {
        item.style.display = 'block'
      })
    }
  }
  //
  document.querySelectorAll('[data-animal-type]').forEach(filterOption => {
    filterOption.addEventListener('click', () => {
      selectedAnimalType = filterOption.dataset.animalType
      console.log(`Selected animal type: ${selectedAnimalType}`)
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
