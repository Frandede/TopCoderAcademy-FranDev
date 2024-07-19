// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {
  let res = [...list];
  res.push(bookName);
  return res;
  
  // Change code above this line
}

// Change code below this line
function remove(list, bookName) {
  let res = [...list];
  const book_index = res.indexOf(bookName);
  if (book_index >= 0) {

    res.splice(book_index, 1);
    return res;

    // Change code above this line
    }
}
