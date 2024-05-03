// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

import { Planet } from "../data/types";

// Note: This input should be destructured from the function parameter
export function getPlanetNamesWithMassValue({
  planets,
  greaterThanOrEqualTo,
}: {
  planets: Planet[];
  greaterThanOrEqualTo: number;
}) {
  return planets
    .map(
      (planet) => planet.mass.massValue >= greaterThanOrEqualTo && planet.name
    )
    .filter((planet) => planet);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
