document.addEventListener('DOMContentLoaded', () => {
	let selectedAnimalType = null;
	let galleryItems= document.querySelectorAll('.gallery-items');

  // Function to hide all gallery items
  const hideAllAnimals = (elements) => {
    elements.forEach(item => {
      item.style.display = 'none'
    })
  }
  // Function to display selected animal
	const showSelectedAnimals = () => {
		hideAllAnimals(document.querySelectorAll('.gallery-items'));
		if (selectedAnimalType) {
			galleryItems.forEach(item => {
				if (item.dataset.animalType === selectedAnimalType) {
					item.style.display = 'block';
				}
			});
		}
	};
  // Target animal type
	function setSelectedAnimalType(type) {
		selectedAnimalType = type;
	}

  document.querySelectorAll('[data-animal-type]').forEach(filterOption => {
    filterOption.addEventListener('click', () => {
			setSelectedAnimalType(filterOption.dataset.animalType);
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
