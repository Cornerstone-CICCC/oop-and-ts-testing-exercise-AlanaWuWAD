// Create two test cases for converting between celsius and fahrenheit
// Test case 1: Converting 30 deg celsius will return 86 deg fahrenheit
// Test case 2: Converting 104 deg fahrenheit will return 40 deg celsius
// Both test cases need to pass

const Converter = require('../src/convertTemp')

test('30 deg celsius will return 86 deg fahrenheit',()=>{
    const convert = new Converter()
    expect(convert.convertToFahrenheit(30)).toBe(86)
})

test('104 deg fahrenheit will return 40 deg celsius', ()=>{
    const convert = new Converter()
    expect(convert.convertToCelsius(104)).toBe(40)
})
