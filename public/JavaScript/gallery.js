// document.addEventListener('DOMContentLoaded', () => {
//   let selectedAnimalType = null
//   const galleryItems = document.querySelectorAll('.gallery-items')

//   // Function to hide all gallery items
//   const hideAllAnimals = (elements) => {
//     elements.forEach(item => {
//       item.style.display = 'none'
//     })
//   }
//   // Function to display selected animal
//   const showSelectedAnimals = () => {
//     hideAllAnimals(document.querySelectorAll('.gallery-items'))
//     if (selectedAnimalType) {
//       galleryItems.forEach(item => {
//         if (item.dataset.animalType === selectedAnimalType) {
//           item.style.display = 'block'
//         }
//       })
//     }
//   }
//   // Target animal type
//   function setSelectedAnimalType (type) {
//     const filterContainer = document.querySelector('#singleAnimalFilter')
//     if (filterContainer) {
//       filterContainer.addEventListener('click', (event) => {
//         const filterOption = event.target.closest('[data-animal-type]')
//         if (filterOption) {
//           selectedAnimalType = filterOption.dataset.animalType
//           console.log(`Selected animal type: ${selectedAnimalType}`)
//         }
//       })
//     } else {
//       console.error('Filter container not found!')
//     }
//   }
//   // Apply button functionality
//   const applyFilters = document.querySelector('#apply-filters')
//   if (applyFilters) {
//     applyFilters.addEventListener('click', showSelectedAnimals)
//   } else {
//     console.error('Apply filters button not found')
//   }
//   setSelectedAnimalType()
// })

/**
 *
 * @param {Number} imagesInDom
 * @returns {string}
 * @throws Invalid Number
 */
function reportGalleryStats (imagesInDom) {
  if (imagesInDom === 0) {
    return 'There are no images in the gallery'
  }

  if (imagesInDom < 0) {
    throw new Error('Invalid number')
  }

  return String(imagesInDom)
}

/**
 * Generates active filters based on user selected filters
 * @param {Object.<string, (string|number)[]>} userSelectedFilters - The user selected filters
 * @returns {Object.<string, (string|null)>} - The active filters
 */
function generateFilterOptions (userSelectedFilters) {
  const allowedFilters = {
    gender: new Set(['male', 'female']),
    type: new Set(['dog', 'cat', 'fox', 'parrot']),
    rating: new Set([1, 2, 3, 4, 5])
  }

  const activeFilters = {
    gender: null,
    type: null,
    rating: null
  }

  for (const [filterKey, filterValues] of Object.entries(userSelectedFilters)) {
    if (allowedFilters[filterKey]?.has(filterValues[filterValues.length - 1])) {
      activeFilters[filterKey] = filterValues[filterValues.length - 1]
    }
  }

  return activeFilters
}

/**
 *
 * @param {Object} activeFilters
 * @param {String} activeFilters.type - Type of animal
 * @param {String} activeFilters.gender
 * @param {Number} activeFilters.rating - Rating received from users
 */

function applyGalleryFilter (activeFilters) {
  // Access  gallery items
  const galleryItems = document.querySelectorAll('.gallery-item')

  galleryItems.forEach(item => {
    const gender = item.getAttribute('data-gender')
    const type = item.getAttribute('data-type')
    const rating = parseInt(item.getAttribute('data-rating'), 10)

    // Hide or show gallery item based on active filters
    const shouldShow = (!activeFilters.gender || activeFilters.gender === gender) &&
			(!activeFilters.type || activeFilters.type === type) &&
			(!activeFilters.rating || activeFilters.rating === rating)

    if (shouldShow) {
      item.style.display = ''
    } else {
      item.style.display = 'none'
    }
  })
}

module.exports = { reportGalleryStats, generateFilterOptions }
