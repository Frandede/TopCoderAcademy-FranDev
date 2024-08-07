function orbitalPeriod(arr) {
  const GM = 398600.4418; 
  const earthRadius = 6367.4447; 

  const calculateOrbitalPeriod = (avgAlt) => {
    const semiMajorAxis = earthRadius + avgAlt;
    const period = 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM);
    return Math.round(period);
  };

  return arr.map(obj => {
    return {
      name: obj.name,
      orbitalPeriod: calculateOrbitalPeriod(obj.avgAlt)
    };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
