function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== 'number') {
    return undefined;
  }
  if (arguments.length > 1) {
    if (typeof second !== 'number') {
      return undefined;
    }
    return first + second;
  }

  // Si solo hay un argumento, retornar una función que espera otro argumento
  return function(second) {
    if (typeof second !== 'number') {
      return undefined;
    }
    return first + second;
  };
}

addTogether(2,3);
