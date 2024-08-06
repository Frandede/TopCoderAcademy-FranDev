function smallestCommons(arr) {
  // Función que calcula el Máximo Común Divisor usando el algoritmo de Euclides
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Función que calcula el Mínimo Común Múltiplo de dos números usando la fórmula MCM = |a * b| / MCD(a, b)
  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }

  // Ordenar el array para asegurarse de que min <= max
  const [min, max] = [Math.min(...arr), Math.max(...arr)];
  
  // Inicializar el MCM con el primer número en el rango
  let result = min;
  
  // Calcular el MCM de todos los números en el rango [min, max]
  for (let i = min + 1; i <= max; i++) {
    result = lcm(result, i);
  }
  
  return result;
}

smallestCommons([1,5]);
