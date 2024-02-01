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
 *
 * @param {Array} userSelectedFilters
 * @returns {Object} activeFilters
 */
function generateFilterOptions (userSelectedFilters) {
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

  Object.keys(userSelectedFilters).forEach(filterKey => {
    //  If the filter selected is not allowed then skip the process and go to the next
    if (!Object.prototype.hasOwnProperty.call(allowedFilters, filterKey)) {
      return activeFilters
    }
    // If filter option is not in the allowed array set it too null
    const filterValues = userSelectedFilters[filterKey]
    if (!Array.isArray(filterValues)) {
      return activeFilters
    }
    // If the last filter selected is not in the allowed array then set it to null
    const lastFilterValue = filterValues[filterValues.length - 1]
    if (!allowedFilters[filterKey].includes(lastFilterValue)) {
      return activeFilters
    }

    activeFilters[filterKey] = lastFilterValue
  })
  return activeFilters
};
module.exports = { reportGalleryStats, generateFilterOptions }
