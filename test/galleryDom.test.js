/* eslint no-undef: 0 */
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { displayGalleryItemsNum } = require('../public/JavaScript/gallery-dom.js')

describe("Gallery Counter", () => {
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

