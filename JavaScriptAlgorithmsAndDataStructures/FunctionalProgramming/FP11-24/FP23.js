function checkPositive(arr) {
  // Only change code below this line
  return arr.some(function(currentValue){
    return currentValue > 0
  });

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
