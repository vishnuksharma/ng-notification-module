function sumSmallestNumbers(numbers) {
  let sum = numbers.sort((a, b)=>a - b)
              .slice(0,2)
              .reduce( (first, second) => first+ second, 0);
  return sum;
  }
