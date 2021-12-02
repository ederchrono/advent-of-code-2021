const input = require('./input.js')
const inputArray = input.split('\n')

let depth = 0
let hPosition = 0
inputArray.forEach(instruction => {
  const [direction, amount] = instruction.split(' ')
  const numAmount = parseInt(amount)
  switch(direction) {
    case 'forward':
      hPosition += numAmount
      break;
    case 'up':
      depth -= numAmount
      break;
    case 'down':
      depth += numAmount
      break;
  }
})

const result = depth * hPosition
console.log('result:', result)