/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const asteroidDiscoveries = data.asteroids.reduce((accumulator, { discoveryYear }) => {
    accumulator[discoveryYear] = (accumulator[discoveryYear] || 0) + 1;
    return accumulator;
  }, {});
  let maxYear = null;
  let maxCount = 0;
  for (const [year, count] of Object.entries(asteroidDiscoveries)) {
    if (count > maxCount) {
      maxYear = parseInt(year);
      maxCount = count;
    }
  }
  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
