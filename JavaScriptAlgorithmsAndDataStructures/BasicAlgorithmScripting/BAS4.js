function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;
  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
