const input = require('./input.js')
const inputArray = input.split('\n')

let prev = null
let count = 0
inputArray.forEach((number) => {
  if(prev && parseInt(number) > prev) {
    count++
  }
  prev = parseInt(number)
})

console.log('result =', count)