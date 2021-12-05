const input = require('./input.js')
const inputArray = input.split('\n')

let gamma = ''
let epsilon = ''
const bitsLength = inputArray[0].length

for (let index = 0; index < bitsLength; index++) {
  let onesCount = 0
  let zeroCount = 0
  inputArray.forEach((bitsString) => {
    if(bitsString.charAt(index) === '0'){
      zeroCount++
    } else {
      onesCount++
    }
  })
  
  if(onesCount>zeroCount) {
    gamma += '1'
    epsilon += '0'
  } else {
    gamma += '0'
    epsilon += '1'
  }
}

console.log({gamma, epsilon})

// converted at https://www.rapidtables.com/convert/number/binary-to-decimal.html
// 000010111101 = 189
// 111101000010 = 3906
// 189 x 3906 = 738234
    