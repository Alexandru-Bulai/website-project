/* eslint no-undef: 0 */

// Gallery filters

const { reportGalleryStats, generateFilterOptions } = require('../public/JavaScript/gallery')

// Trigger: click pe apply button
// Business decisions: multiple filtre, 1 value per filter, if multiple filters selected se aplica AND, counter of displayed images
// Filter options: type (cat, dog, others), gender (male, female), rating (1-5)

describe('Gallery Images Counter', () => {
  test('Show text if no images', () => {
    // input ? int, obiect/collection
    // output: int 0
    expect(reportGalleryStats(0)).toBe('There are no images in the gallery')
  })

  test('Show 1 if there is only one image', () => {
    expect(reportGalleryStats(1)).toBe('1')
  })

  test('Show 50 if there are 50 images in the gallery', () => {
    expect(reportGalleryStats(50)).toBe('50')
  })

  test('Show ? if < 0', () => {
    expect(() => {
      reportGalleryStats(-2)
    }).toThrow()
  })
})

// 1 functie care face efectiv modificarile vizuale (ea nu va fi testata aici, *poate* in E2E).
// Aceasta functie primeste ca input un obiect. Obiectul va fi generat de o alta functie interna.
// 1 functie interna care primeste ca input dom content/values selected by user si le transforma intr-un obiect pe care il paseaza functiei de afisare.
// In Jest noi vom testa DOAR functia interna.

/**
 *
 * @param {Object} activeFilters
 * @param {String} activeFilters.type - Type of animal
 * @param {String} activeFilters.gender
 * @param {Number} activeFilters.rating - Rating received from users
 */

// function applyGalleryFilter (activeFilters) {
// }

describe('Applying Gallery Filters - allow only 1 value per filter', () => {
  test('if user selects [cat], it cannot received dog or something else', () => {
    const userSelectedFilters = { type: ['cat'] }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('type', 'cat')
  })
  test('if user selects cats and dogs, it will generate on object for dogs only', () => {
    const userSelectedFilters = { type: ['cat', 'dog'] }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('type', 'dog')
  })

  test('if user selects [dog] and [male], it will generate an object with 3 properties with the correct values for the first 2 and null for ratings', () => {
    const userSelectedFilters = { type: 'dog', gender: 'male' }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('type', 'dog')
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('gender', 'male')
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('rating', null)
  })

  test('if user selects [others] and [female] and [rating-5], it will generate an object with 3 members', () => {
    const userSelectedFilters = { type: ['cat'], gender: ['male'], rating: [5] }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('type', 'cat')
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('gender', 'male')
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('rating', 5)
  })

  test('if user selected gender filters contains invalid value, it will not apply that filter', () => {
    let userSelectedFilters = { type: ['cat'], gender: ['extraterestru'] }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('gender', null)
    userSelectedFilters = { type: ['cat'], gender: 'banana' }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('gender', null)
  })

  test('if user selected type filters contains invalid value, it will not apply that filter', () => {
    const userSelectedFilters = { type: ['extraterestru'] }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('type', null)
  })

  test('if user selects outside of range, higher, rating, it will not apply it', () => {
    const userSelectedFilters = { rating: [6] }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('rating', null)
  })

  test('if user selects outside of range, lower, rating, it will not apply it', () => {
    const userSelectedFilters = { rating: [0] }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('rating', null)
  })

  test('if user selects invalid rating, it will not apply it', () => {
    let userSelectedFilters = { rating: [-5] }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('rating', null)
    userSelectedFilters = { rating: '3' }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('rating', null)
  })

  test('if user selects [female] and [male], it will it will generate an object for male only', () => {
    const userSelectedFilters = { gender: ['female', 'male'] }
    expect(generateFilterOptions(userSelectedFilters)).toHaveProperty('gender', 'male')
  })
})
