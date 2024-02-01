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
function generateFilterOptions(userSelectedFilters) {
  const allowedFilters = {
    gender: ['male', 'female'],
    type: ['dog', 'cat', 'fox', 'parrot'],
    rating: [1, 2, 3, 4, 5]
  }

  const activeFilters = {
    gender: null,
    type: null,
    rating: null
  }

  for (const filterKey in userSelectedFilters) {
    if (Object.hasOwn(allowedFilters, filterKey)) {
      const filterValues = userSelectedFilters[filterKey]
      if (Array.isArray(filterValues) && allowedFilters[filterKey].includes(filterValues[filterValues.length - 1])) {
        activeFilters[filterKey] = filterValues[filterValues.length - 1]
      }
    }
  }

  return activeFilters
}
module.exports = { reportGalleryStats, generateFilterOptions }
