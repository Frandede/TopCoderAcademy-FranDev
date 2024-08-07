function steamrollArray(arr) {
  let res = [];
  function aplanar(item){
    if(Array.isArray(item)){
      for(let i = 0; i < item.length; i++){
        aplanar(item[i]);
      }
    }else{
      res.push(item)
    }
  }
  aplanar(arr);
  return res;
}

steamrollArray([1, [2], [3, [[4]]]]);
