function titleCase(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }
  
  return words.join(' ');
}

titleCase("I'm a little tea pot");
