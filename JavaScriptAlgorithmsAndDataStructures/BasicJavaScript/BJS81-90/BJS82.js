let count = 0;

function cc(card) {
  // Only change code below this line
  if (typeof card === 'number') {
    if (card >= 2 && card <= 6) {
      count++;
    } else if (card >= 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
      count--;
    }
  } else if (typeof card === 'string') {
    switch (card) {
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        count++;
        break;
      case '10':
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
        count--;
        break;
    }
  }

  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
