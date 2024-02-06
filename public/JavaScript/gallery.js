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
  console.log('Active Filters:', activeFilters) // Debugging line
  const galleryItems = document.querySelectorAll('.gallery-items')
  console.log('Found gallery items:', galleryItems.length) // Debugging line

  galleryItems.forEach(item => {
    const gender = item.getAttribute('data-gender')
    const type = item.getAttribute('data-type')
    const rating = parseInt(item.getAttribute('data-rating'), 10)

    // Explicitly log each item's data for debugging
    console.log(`Item data - Gender: ${gender}, Type: ${type}, Rating: ${rating}`)

    // Hide or show gallery item based on active filters
    const shouldShow = (!activeFilters.gender || activeFilters.gender === gender) &&
                        (!activeFilters.type || activeFilters.type === type) &&
                        (!activeFilters.rating || activeFilters.rating === rating)

    item.style.display = shouldShow ? 'block' : 'none'
    console.log('Item:', item, 'Should Show:', shouldShow) // Debugging line
  })
}

module.exports = { reportGalleryStats, generateFilterOptions, applyGalleryFilter }
