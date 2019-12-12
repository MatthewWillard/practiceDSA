  
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = n
      .toString()
      .split('')
      .reverse()
      .join('');
  
    //   if (n < 0) {
    //     return parseInt(reversed) * -1;
    //   }
  
    return parseInt(reversed) * Math.sign(n);
  }
  
  console.log(reverseInt(-90));
  
  module.exports = reverseInt;

  //test
  const reverseInt = require('./index');

  test('ReverseInt function exists', () => {
    expect(reverseInt).toBeDefined();
  });
  
  test('ReverseInt handles 0 as an input', () => {
    expect(reverseInt(0)).toEqual(0);
  });
  
  test('ReverseInt flips a positive number', () => {
    expect(reverseInt(5)).toEqual(5);
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
  });
  
  test('ReverseInt flips a negative number', () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
  });
