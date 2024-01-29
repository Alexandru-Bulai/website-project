//Gallery filters

const countImages = require('../public/JavaScript/gallery');

// Trigger: click pe apply button
// Business decisions: multiple filtre, > 1 selectie se aplica AND, counter of displayed images
// Filter options: type (cat, dog, others), gender (male, female), rating (1-5)

describe("Gallery Images Counter", () => {
    test('Show text if no images', () => {
        //input ? int, obiect/collection
        //output: int 0
        expect(countImages(0)).toBe('There are no images in the gallery');
    });

    test('Show 1 if there is only one image', () => {
        expect(countImages(1)).toBe('1');
    })

    test('Show 50 if there are 50 images in the gallery', () => {
        expect(countImages(50)).toBe('50');
    })

    test('Show ? if < 0', () => {
        expect(()=> { 
            countImages(-2)}).toThrow();
    })
})
