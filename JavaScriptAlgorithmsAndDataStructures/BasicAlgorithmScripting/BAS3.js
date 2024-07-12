function factorialize(num) {
  let res = 1;
  for(let i = 2; i <= num ; i++){
    res = i*res;
  }
  return res;
}

factorialize(5);
