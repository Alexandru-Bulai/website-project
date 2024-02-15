/* eslint no-undef: 0 */
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { displayGalleryItemsNum, getPets } = require('../public/JavaScript/gallery-dom.js')

describe('Gallery Counter', () => {
  it('sets the count to 1 when having 1 item gallery hidden and one shown', () => {
    const dom = new JSDOM(`
      <div class="gallery-items" style="display: block;"></div>
      <div class="gallery-items" style="display: none;"></div>
      <div id="number-items"></div>
    `)
    global.document = dom.window.document

    // Mock the reportGalleryStats function globally
    global.reportGalleryStats = (count) => `Count: ${count}`

    // Call the function with the mock DOM
    const message = displayGalleryItemsNum('.gallery-items')

    expect(message).toBe('Count: 1')
  })

  it('sets the count to 3 when having 3 (all) items set to shown', () => {
    const dom = new JSDOM(`
      <div class="gallery-items" style="display: block;"></div>
      <div class="gallery-items" style="display: block;"></div>
      <div class="gallery-items" style="display: block;"></div>
      <div id="number-items"></div>
    `)
    global.document = dom.window.document
    global.reportGalleryStats = (count) => `Count: ${count}`
    const message = displayGalleryItemsNum('.gallery-items')

    expect(message).toBe('Count: 3')
  })

  it('sets the count to 0 when having no items set to shown', () => {
    const dom = new JSDOM(`
      <div class="gallery-items" style="display: none;"></div>
      <div class="gallery-items" style="display: none;"></div>
      <div id="number-items"></div>
    `)
    global.document = dom.window.document
    global.reportGalleryStats = (count) => `Count: ${count}`
    const message = displayGalleryItemsNum('.gallery-items')

    expect(message).toBe('Count: 0')
  })
})

// Mock fetch globally if using Jest
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      payload: {
        pets: [
          {
            type: 'dog',
            gender: 'male',
            rating: 5,
            img: 'dog.jpg'
          }
        ]
      }
    })
  })
)

describe('json file fetching data on gallery.html', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    fetch.mockClear()
  })

  it('Populate galleryContainer with pet elements from JSON', async () => {
    const dom = new JSDOM('<!DOCTYPE html><html><body><div id="img-container"></div></body></html>')
    global.document = dom.window.document

    await getPets('#img-container')

    const galleryContainer = document.querySelector('#img-container')
    const galleryItems = galleryContainer.querySelectorAll('.gallery-items')

    // Check if the gallery items are correctly added to the galleryContainer
    expect(galleryItems.length).toBeGreaterThan(0)

    // Check the content of the first gallery item
    const firstItem = galleryItems[0]
    expect(firstItem.dataset.type).toBe('dog')
    expect(firstItem.querySelector('img').src).toContain('dog.jpg')
    expect(firstItem.querySelector('.text-15.font-bold.text-blue-800').textContent).toContain('Gender: male')
  })

  it('should handle empty data response gracefully', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ payload: { pets: [] } })
      })
    )

    const dom = new JSDOM('<!DOCTYPE html><html><body><div id="img-container"></div></body></html>')
    global.document = dom.window.document

    await getPets('#img-container')

    const galleryContainer = document.querySelector('#img-container')
    expect(galleryContainer.children.length).toBe(0)
  })
})
