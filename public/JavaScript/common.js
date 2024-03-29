// Drop down menu functionality
function toggleElements (buttonSelector, elementSelectors) {
  const button = document.querySelector(buttonSelector)

  if (!button || !Array.isArray(elementSelectors)) {
    console.warn('Button not found or invalid element selectors')
    return
  }

  button.addEventListener('click', () => {
    elementSelectors.forEach(selector => {
      const element = document.querySelector(selector)
      if (element) {
        element.classList.toggle('hidden')
        element.classList.toggle('flex')
      }
    })
  })
}
toggleElements('#navButton', ['#navBar'])
toggleElements('#filtersButton', ['#filtersButton', '#filtersMenu', '#closeFilters'])
toggleElements('#closeFilters', ['#filtersButton', '#filtersMenu', '#closeFilters'])
toggleElements('#animalsFilterButton', ['#single-animal-filter'])
