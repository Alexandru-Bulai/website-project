/* global generateFilterOptions, applyGalleryFilter */
document.addEventListener('DOMContentLoaded', function () {
  // Event listeners for animal filter buttons
  document.querySelectorAll('#singleAnimalFilter div[data-type]').forEach(activeFilterElements => {
    activeFilterElements.addEventListener('click', function () {
      // Toggle 'active' class on click
      this.classList.toggle('selected')
    })
  })
  const applyFiltersButton = document.querySelector('#apply-filters');

  applyFiltersButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Retrieve selected filter values
    const genderFilter = document.querySelector('input[name="gender"]:checked')?.value;
    const typeFilters = document.querySelectorAll('#singleAnimalFilter div[data-type].selected')
    const ratingFilter = document.querySelector('.star-rating input[type="radio"]:checked')?.getAttribute('data-rating')

    // Prepare the selected filters object
    const userSelectedFilters = {
      gender: genderFilter ? [genderFilter] : [],
      type: Array.from(typeFilters, filter => filter.getAttribute('data-type')),
      rating: ratingFilter ? [parseInt(ratingFilter)] : []
    }

    const activeFilters = generateFilterOptions(userSelectedFilters);

    console.log('Applying filters:', activeFilters) // Debugging line
    applyGalleryFilter(activeFilters)

		// Reset Filters after applying
		document.querySelectorAll('#singleAnimalFilter div[data-type].selected').forEach(element => {
			element.classList.remove('selected');
		});

		resetFilters();
  })
	function resetFilters() {
    // Reset gender filter
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
      radio.checked = false;
    });

    // Reset type filters visual cue
    document.querySelectorAll('#singleAnimalFilter div[data-type].selected').forEach(typeFilter => {
      typeFilter.classList.remove('selected');
    });

    // Reset rating filter
		document.querySelectorAll('.star-rating input[type="radio"]').forEach(radio => {
			radio.checked = false;
		});
  }
});
