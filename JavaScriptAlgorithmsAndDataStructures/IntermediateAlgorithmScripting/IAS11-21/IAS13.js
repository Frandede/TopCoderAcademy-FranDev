function sumPrimes(num) {
  function isPrime(n) {
    if (n <= 1) return false; // Los números menores o iguales a 1 no son primos
    if (n <= 3) return true;  // 2 y 3 son primos
    if (n % 2 === 0 || n % 3 === 0) return false; // Eliminar múltiplos de 2 y 3
    for (let i = 5; i * i <= n; i += 6) { // Probar divisores hasta la raíz cuadrada de `n`
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }

  let sum = 0;
  
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  
  return sum;
}

sumPrimes(10);
