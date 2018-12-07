function findOddAmount(numbers) {
  let odNum = null;
  for(let i = 0; i < numbers.length; i++) {
    let count = 1;
    for (let j = 0; j < numbers.length; j++) {
      if(numbers[i] == numbers[j] && i != j) {
      count++;
    }
    }
    if(count % 2 == 1) {
      odNum = numbers[i];
      break;
      }
    }

    return odNum;
  }
