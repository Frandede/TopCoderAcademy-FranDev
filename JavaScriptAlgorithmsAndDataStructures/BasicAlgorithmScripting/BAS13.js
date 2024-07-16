function bouncer(arr) {
  let res=[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      res.push(arr[i]);
    }
  }
  return res;
}

bouncer([7, "ate", "", false, 9]);
