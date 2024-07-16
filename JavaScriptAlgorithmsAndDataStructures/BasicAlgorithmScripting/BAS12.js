function frankenSplice(arr1, arr2, n) {
  let res = [];
  let finArr2 = arr2.slice(n, arr2.length);
  for(let i = 0; i < n; i++){
    res.push(arr2[i]);
  }
  for(let i = 0; i < arr1.length; i++){
    res.push(arr1[i]);
  }
  res.push(...finArr2);
  return res;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
