function palindrome(str) {
  const word = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const wordReverse = word.split('').reverse().join('');
  return word === wordReverse;
}

palindrome("eye");
