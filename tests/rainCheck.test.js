// Complete the test cases below by adding the expected inputs and returns
// All test cases should pass

const rainCheck = require('../src/rainCheck')

describe('Weather check', () => {
  test(`should return "Bring an umbrella" when it is raining`, () => {
    expect(rainCheck(1)).toBe("Bring an umbrella.")
  });

  test(`should return "No need for an umbrella" when it is not raining`, () => {
    expect(rainCheck(false)).toBe("No need for an umbrella.")
  });

  test(`should return "Bring a sturdy umbrella, it's windy." when it's raining and windy`, () => {
    expect(rainCheck(1,25)).toBe("Bring a sturdy umbrella, it's windy.")
  });

  test(`should return "Bring an umbrella and a warm coat, it's cold." when it's raining and cold`, () => {
    expect(rainCheck(1,12,6)).toBe(`Bring an umbrella and a warm coat, it's cold.`)
  });

  test(`should return "No umbrella needed, but stay hydrated—it's hot outside!" when it's hot and not raining`, () => {
    expect(rainCheck(0,25,60)).toBe(`No umbrella needed, but stay hydrated—it's hot outside!`)
  });

  test(`should return "No need for an umbrella, but it's quite windy. Hold onto your hat!" when it's windy and not raining`, () => {
    expect(rainCheck(0,35,60)).toBe(`No need for an umbrella, but it's quite windy. Hold onto your hat!`)
  });
});