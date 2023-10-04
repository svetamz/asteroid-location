function locationGenerator() {
  const location = {
    x: Math.round(Math.random() * 100),
    y: Math.round(Math.random() * 100),
    z: Math.round(Math.random() * 100),
  };
  return location;
}

module.exports = locationGenerator;