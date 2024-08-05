function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(str[0])) {
    return str + "way";
  }
  
  let index = -1;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      index = i;
      break;
    }
  }
  
  if (index === -1) {
    return str + "ay";
  }

  const consonantCluster = str.slice(0, index);
  const restOfWord = str.slice(index);
  return restOfWord + consonantCluster + "ay";
}

translatePigLatin("consonant");
