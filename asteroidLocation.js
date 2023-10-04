const locationGenerator = require('./locationGenerator');
const distanceCalculator = require('./distance');

function findAsteroidLocation() {
  const asteroidLocation = locationGenerator();
  let zontCount = 0;
  const zonts = [];
  let closestZont = null;

  const sectorSize = 10;
  const gridSize = 10;

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      for (let z = 0; z < gridSize; z++) {
        const zontCoordinates = {
          x: x * sectorSize + sectorSize / 2,
          y: y * sectorSize + sectorSize / 2,
          z: z * sectorSize + sectorSize / 2,
        };

        const distance = distanceCalculator(zontCoordinates, asteroidLocation);
        zonts.push({ coordinates: zontCoordinates, distance });

        if (!closestZont || distance < closestZont.distance) {
          closestZont = { coordinates: zontCoordinates, distance };
        }
        zontCount++;
      }
    }
  }
  const firstZont = zonts[0].coordinates;
  const lastZont = zonts[zonts.length - 1].coordinates;
  const coordinatesString = `{"x": ${firstZont.x}, "y": ${firstZont.y}, "z": ${firstZont.z}}, ... , {"x": ${lastZont.x}, "y": ${lastZont.y}, "z": ${lastZont.z}}`;
    

  return {
    result: {
      location: asteroidLocation,
      probes: {
        count: zontCount,
        coordinates: `[${coordinatesString}]`,

      },
      closestProbe: closestZont.coordinates,
    },
  };
}

module.exports = findAsteroidLocation;
