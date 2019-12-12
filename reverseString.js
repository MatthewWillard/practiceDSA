// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
  
    for (let character of str) {
      reversed = character + reversed;
    }
  
    return reversed;
  }
  
  console.log(reverse('apple'));
  
  module.exports = reverse;
  
  //1ST SOLUTION
  // const arr = str.split('');
  // const reversedArr = arr.reverse();
  // const reversedResult = reversedArr.join('');
  
  // console.log(reversedResult);
  // return reversedResult;

  //test

  const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});