/* global generateFilterOptions, applyGalleryFilter, reportGalleryStats */
function displayGalleryItemsNum (className) {
  const galleryItems = document.querySelectorAll(className)
  const visibleGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none').length
  const returnCount = document.querySelector('#number-items')

  const message = reportGalleryStats(visibleGalleryItems)

  if (returnCount) {
    returnCount.textContent = message
  } else {
    console.error('Display div could not be found or does not exist')
  }
  return message
}

if (typeof document !== 'undefined') {
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

      applyGalleryFilter(activeFilters)
      displayGalleryItemsNum('.gallery-items')
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
    getPets('#img-container')
  })
}

// FETCH OPTION 1

// fetch('JavaScript/gallery-items.json').then(response => response.json()).then(data => {
//   const allPets = data.payload.pets;
//   allPets.forEach(pet => {
//     document.querySelector('#img-container').insertAdjacentHTML('afterend', `<div data-type=${pet.type} data-gender=${pet.gender} data-rating=${pet.rating} class="gallery-items relative transform hover:scale-105  duration-500">\n'
//       <img src="Assets/images/gallery/gallery_grid/${pet.img}" alt="${pet.type} portrait">\n
//       <div class="stats-box flex flex-col justify-center items-center  absolute bottom-0 inset-x-0 bg-purple-400 h-24 bg-opacity-90 opacity-0">\n
//       <div class="text-15 font-bold text-blue-800">Gender: ${pet.gender}</div>\n
//       <div class="text-15 font-bold text-blue-800">Rating: ${pet.rating}☆</div>\n
//       </div></div>` );
//   })
// })

// FETCH OPTION 2
async function getPets (item) {
  const response = await fetch('JavaScript/gallery-items.json')
  const data = await response.json()
  const allPets = data.payload.pets
  const galleryContainer = document.querySelector(item)
  allPets.forEach(pet => {
    galleryContainer.insertAdjacentHTML('beforeend',
      `<div data-type=${pet.type} data-gender=${pet.gender} data-rating=${pet.rating} class="gallery-items relative transform hover:scale-105  duration-500">\n'
        <img src="Assets/images/gallery/gallery_grid/${pet.img}" alt="${pet.type} portrait">\n
        <div class="stats-box flex flex-col justify-center items-center absolute bottom-0 inset-x-0 bg-purple-400 h-24 bg-opacity-90 opacity-0">\n
        <div class="text-15 font-bold text-blue-800">Gender: ${pet.gender}</div>\n
        <div class="text-15 font-bold text-blue-800">Rating: ${pet.rating}☆</div>\n
            </div></div>\n
            `)
  })
  displayGalleryItemsNum('.gallery-items')
}
module.exports = { displayGalleryItemsNum, getPets }
