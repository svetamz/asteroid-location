function distanceCalculator(zontCoordinates, asteroidCoordinates) {
    const distance = Math.sqrt(
      Math.pow((zontCoordinates.x - asteroidCoordinates.x), 2) +
      Math.pow((zontCoordinates.y - asteroidCoordinates.y), 2) +
      Math.pow((zontCoordinates.z - asteroidCoordinates.z), 2)
    );
    return distance;
  }
  
  module.exports = distanceCalculator;