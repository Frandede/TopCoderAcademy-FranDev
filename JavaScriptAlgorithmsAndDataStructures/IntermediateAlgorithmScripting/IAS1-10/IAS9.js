function fearNotLetter(str) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let word = str.split("");
  let index = alphabet.indexOf(word[0]);
  for(index; index < alphabet.length; index++){
    if(word[0]!==alphabet[index]){
      return alphabet[index];
    }else{word.shift();}
  }
  return undefined;
}

fearNotLetter("abce");
