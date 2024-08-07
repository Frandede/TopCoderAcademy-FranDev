const alphabetWithROT13 = [
  { letter: 'A', rot13: 'N' },
  { letter: 'B', rot13: 'O' },
  { letter: 'C', rot13: 'P' },
  { letter: 'D', rot13: 'Q' },
  { letter: 'E', rot13: 'R' },
  { letter: 'F', rot13: 'S' },
  { letter: 'G', rot13: 'T' },
  { letter: 'H', rot13: 'U' },
  { letter: 'I', rot13: 'V' },
  { letter: 'J', rot13: 'W' },
  { letter: 'K', rot13: 'X' },
  { letter: 'L', rot13: 'Y' },
  { letter: 'M', rot13: 'Z' },
  { letter: 'N', rot13: 'A' },
  { letter: 'O', rot13: 'B' },
  { letter: 'P', rot13: 'C' },
  { letter: 'Q', rot13: 'D' },
  { letter: 'R', rot13: 'E' },
  { letter: 'S', rot13: 'F' },
  { letter: 'T', rot13: 'G' },
  { letter: 'U', rot13: 'H' },
  { letter: 'V', rot13: 'I' },
  { letter: 'W', rot13: 'J' },
  { letter: 'X', rot13: 'K' },
  { letter: 'Y', rot13: 'L' },
  { letter: 'Z', rot13: 'M' }
];


const rot13Map = alphabetWithROT13.reduce((map, item) => {
  map[item.rot13] = item.letter;
  return map;
}, {});


function rot13(encodedStr) {
  return encodedStr
    .split('')   
    .map(char => rot13Map[char] || char) 
    .join('');          
}

rot13("SERR PBQR PNZC");
