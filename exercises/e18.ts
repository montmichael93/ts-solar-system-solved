// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/types";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const mapYears = new Map();
  let max = -1;
  let entriesWithMaxValue: number[] = [];
  asteroids.forEach((asteroid) => {
    if (mapYears.has(asteroid.discoveryYear)) {
      let currentValue = mapYears.get(asteroid.discoveryYear);
      mapYears.set(asteroid.discoveryYear, currentValue + 1);
    } else {
      mapYears.set(asteroid.discoveryYear, 1);
    }
  });

  mapYears.forEach((value: number, key: number) => {
    if (value > max!) {
      max = value;
      entriesWithMaxValue = [key, value];
    } else if (value === max) {
      entriesWithMaxValue.push(key, value);
    }
  });
  return entriesWithMaxValue[0];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
