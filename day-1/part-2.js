const input = require('./input.js')
const inputArray = input.split('\n')
let prev = 99999999
let count = 0
inputArray.forEach((number, index) => {
  let currentSum = 99999999
  if(index >= 2) {
    currentSum = parseInt(number) + parseInt(inputArray[index-1]) + parseInt(inputArray[index-2])
    if(currentSum > prev) {
      count++
    }
  }
  prev = currentSum
})

console.log('result =', count)