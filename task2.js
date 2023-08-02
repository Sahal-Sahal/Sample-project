// Task 2: Data Manipulation
// Write a function in Node.js that takes an array of integers
//  as input and returns the sum of all the numbers.


function sumOfIntegers(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array of integers.')
    }
  
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number' || !Number.isInteger(numbers[i])) {
        throw new Error('Input array must contain only integers.')
      }
      sum += numbers[i]
      
    }
  
    return sum
  }
  const numbersArray = [1,2,3,4,5,6];
  const result = sumOfIntegers(numbersArray)
  console.log(result)
    