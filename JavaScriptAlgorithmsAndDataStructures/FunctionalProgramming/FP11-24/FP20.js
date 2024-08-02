function sentensify(str) {
  // Only change code below this line
 const arr = str.split(/[^a-zA-Z0-9]+/);
 return arr.join(" ");
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
