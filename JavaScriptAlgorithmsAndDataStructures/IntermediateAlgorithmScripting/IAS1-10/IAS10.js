function uniteUnique(arr) {
  const args = Array.from(arguments);
  let arrArgs = [];
  
  for(let i = 0; i < args.length; i++){
    arrArgs= arrArgs.concat(args[i]);
  }
  let res = [];
  for(let i = 0; i< arrArgs.length; i++){
    if(res.indexOf(arrArgs[i])===-1){
      res.push(arrArgs[i]);
    }
  }
  return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
