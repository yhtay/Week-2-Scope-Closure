/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

function recVolume(height) { // height === 10

  let measurements = [height]; // measurements === [10 , 5]

  let calc = (num) => {// num === 5 // num ===10
    if (measurements.length < 3) {
      measurements.push(num) // measurements === [10, 5] // measurements === [10, 5 , 10]

      if (measurements.length === 3) {
        return measurements.reduce((a, b) => a * b) //10 * 5 * 10 === 500
      }

      return calc
    }
    else {
      return measurements.reduce((a, b) => a * b)
    }
  }
  return calc
}

let first = recVolume(10) // returns calc, initializes measurements variable === [10]
console.log(first(5))     // returns calc, pushes 5 into measurement array === [10, 5]
console.log(first(10))    // 500
console.log(first(10))    // 500




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
