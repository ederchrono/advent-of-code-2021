const input = require('./input.js')
const inputArray = input.split('\n')

let oxygenNumbers = [...inputArray]
let co2Numbers = [...inputArray]

let currentIndex = 0
while(oxygenNumbers.length > 1) {
  let zeroCount = 0
  let onesCount = 0
  oxygenNumbers.forEach(number => {
    if(number.charAt(currentIndex) === '0') {
      zeroCount++
    } else {
      onesCount++
    }
  })
  if(zeroCount>onesCount) {
    oxygenNumbers = oxygenNumbers.filter(number => number.charAt(currentIndex) === '0')
  } else {
    oxygenNumbers = oxygenNumbers.filter(number => number.charAt(currentIndex) === '1')
  }
  currentIndex++
}

currentIndex = 0
while(co2Numbers.length > 1) {
  let zeroCount = 0
  let onesCount = 0
  co2Numbers.forEach(number => {
    if(number.charAt(currentIndex) === '0') {
      zeroCount++
    } else {
      onesCount++
    }
  })
  if(onesCount<zeroCount) {
    co2Numbers = co2Numbers.filter(number => number.charAt(currentIndex) === '1')
  } else {
    co2Numbers = co2Numbers.filter(number => number.charAt(currentIndex) === '0')
  }
  currentIndex++
}

console.log({oxygenNumbers, co2Numbers})
// { oxygenNumbers: [ '010000101111' ], co2Numbers: [ '111001111010' ] }
