/* global generateFilterOptions, applyGalleryFilter */
document.addEventListener('DOMContentLoaded', function () {
  // Event listeners for animal filter buttons
  document.querySelectorAll('#single-animal-filter div[data-type]').forEach(activeFilterElements => {
    activeFilterElements.addEventListener('click', function () {
      // Toggle 'active' class on click
      this.classList.toggle('selected')
    })
  })

  const applyFiltersButton = document.querySelector('#apply-filters')

  applyFiltersButton.addEventListener('click', function (event) {
    event.preventDefault()

    // Retrieve selected filter values
    const genderFilter = document.querySelector('input[name="gender"]:checked')?.value
    const typeFilters = document.querySelectorAll('#single-animal-filter div[data-type].selected')
    const ratingFilter = document.querySelector('.star-rating input[type="radio"]:checked')?.getAttribute('data-rating')

    // Prepare the selected filters object
    const userSelectedFilters = {
      gender: genderFilter ? [genderFilter] : [],
      type: Array.from(typeFilters, filter => filter.getAttribute('data-type')),
      rating: ratingFilter ? [parseInt(ratingFilter)] : []
    }

    const activeFilters = generateFilterOptions(userSelectedFilters)

    // console.log('Applying filters:', activeFilters) // Debugging line
    applyGalleryFilter(activeFilters)
    displayGalleryItemsNum()
    // Reset Filters after applying
    document.querySelectorAll('#single-animal-filter div[data-type].selected').forEach(element => {
      element.classList.remove('selected')
    })
    resetFilters()
  })

  function resetFilters () {
    // Reset gender filter
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
      radio.checked = false
    })

    // Reset type filters visual cue
    document.querySelectorAll('#single-animal-filter div[data-type].selected').forEach(typeFilter => {
      typeFilter.classList.remove('selected')
    })

    // Reset rating filter
    document.querySelectorAll('.star-rating input[type="radio"]').forEach(radio => {
      radio.checked = false
    })
  }

  function displayGalleryItemsNum () {
    const galleryItems = document.querySelectorAll('.gallery-items')
    const visibleGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none').length
    const returnCount = document.querySelector('#number-items')

    const message = reportGalleryStats(visibleGalleryItems)

    if (returnCount) {
      returnCount.textContent = message
    } else {
      console.error('Display div could not be found or does not exist')
    }
  }

  displayGalleryItemsNum()
})
