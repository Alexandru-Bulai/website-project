const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { displayGalleryItemsNum } = require('../public/JavaScript/gallery-dom.js')

test('displayGalleryItemsNum returns correct message', () => {
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
