/* global generateFilterOptions, applyGalleryFilter */

document.addEventListener('DOMContentLoaded', function () {
  // Event listeners for animal filter buttons
  document.querySelectorAll('#singleAnimalFilter div[data-type]').forEach(activeFilterElements => {
    activeFilterElements.addEventListener('click', function () {
      // Toggle 'active' class on click
      this.classList.toggle('active')
    })
  })
  const applyFiltersButton = document.querySelector('#apply-filters')

  applyFiltersButton.addEventListener('click', function (event) {
    event.preventDefault()

    // Retrieve selected filter values
    const genderFilter = document.querySelector('input[name="gender"]:checked')?.value
    const typeFilters = document.querySelectorAll('#singleAnimalFilter div[data-type].active')
    const ratingFilter = document.querySelector('.star-rating input[type="radio"]:checked')?.getAttribute('data-rating')

    // Prepare the selected filters object
    const userSelectedFilters = {
      gender: genderFilter ? [genderFilter] : [],
      type: Array.from(typeFilters, filter => filter.getAttribute('data-type')),
      rating: ratingFilter ? [parseInt(ratingFilter)] : []
    }

    const activeFilters = generateFilterOptions(userSelectedFilters)

    console.log('Applying filters:', activeFilters) // Debugging line
    applyGalleryFilter(activeFilters)
  })
})
