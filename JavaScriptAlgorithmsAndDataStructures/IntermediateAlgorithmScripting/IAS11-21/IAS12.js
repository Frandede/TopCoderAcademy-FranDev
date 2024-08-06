function sumFibs(num) {
   let a = 1; 
  let b = 1; 
  let sum = 0; 
  
  while (a <= num) {
    if (a % 2 !== 0) {
      sum += a;
    }

    let next = a + b;
    a = b;
    b = next;
  }
  
  return sum; 
}

sumFibs(4);
