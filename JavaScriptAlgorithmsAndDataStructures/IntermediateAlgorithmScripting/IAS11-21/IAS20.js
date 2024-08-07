const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
 let [firstName, lastName] = firstAndLast.split(' ');

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = function(first) {
    if (typeof first === 'string') {
      firstName = first;
    }
  };

  this.setLastName = function(last) {
    if (typeof last === 'string') {
      lastName = last;
    }
  };

  this.setFullName = function(firstAndLast) {
    if (typeof firstAndLast === 'string') {
      let [first, last] = firstAndLast.split(' ');
      if (first && last) {
        firstName = first;
        lastName = last;
      }
    }
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();
