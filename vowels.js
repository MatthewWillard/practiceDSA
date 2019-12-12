function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }
  
  console.log(vowels('Yo whats up my man, baby!'));
  
  module.exports = vowels;
  
  /* 
  Iterative Solution
  function vowels(str) {
    let count = 0;
    const isVowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
      if (isVowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  */

  //test
  const vowels = require('./index');

test('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(vowels('AEIOU')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});