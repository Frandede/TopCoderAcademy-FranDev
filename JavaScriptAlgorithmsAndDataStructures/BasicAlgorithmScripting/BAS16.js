function chunkArrayInGroups(arr, size) {
  let res = [];
  for(let i = 0; i < arr.length; i+=size){
    res.push(arr.slice(i,i+size));
  }
  return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
