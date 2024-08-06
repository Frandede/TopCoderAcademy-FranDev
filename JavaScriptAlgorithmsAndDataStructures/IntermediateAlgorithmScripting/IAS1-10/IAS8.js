function pairElement(str) {
  let res = [];
  for(let i = 0; i < str.length; i++){
    let newPair = [];
    newPair.push(str[i]);
    if(str[i] === "A"){newPair.push("T");}
    if(str[i] === "T"){newPair.push("A");}
    if(str[i] === "G"){newPair.push("C");}
    if(str[i] === "C"){newPair.push("G");}
    res.push(newPair);
  }
  return res;
}

pairElement("GCG");
