function confirmEnding(str, target) {
  let strArray = str.split('');
  let end =  strArray.slice(strArray.length-target.length).join('');
  return end == target;
}

confirmEnding("Bastian", "n");
