// interview questions https://www.sitepoint.com/5-common-coding-interview-challenges/

// #1 PALINDROME

// This challenge revolves around the idea of reversing a string. If the reversed string is the same as the original input string, then you have a palindrome and your function should return true. Conversely, if the reversed string isn’t the same as the original input string, the latter is not a palindrome and your function is expected to return false.

// const palindrome = str => {
//   // turn the string to lowercase
//   str = str.toLowerCase()
//   // reverse input string and return the result of the
//   // comparison
//   return str === str.split('').reverse().join('')
// }

// // palindrome("racecar");
// palindrome("jonny");


// function palindrome(word) {
//   var string = word.toLowerCase()
//   if(string === string.split('').reverse().join('')) {
//     return true;
//   }
//   return false;
// }

// palindrome("racecar");
// // palindrome("jonny");




// #2 FIZZ BUZZ CHALLENGE

// Reasoning about the challenge
// One important point about FizzBuzz relates to how you can find multiples of a number in JavaScript. You do this using the modulo or remainder operator, which looks like this: %. This operator returns the remainder after a division between two numbers. A remainder of 0 indicates that the first number is a multiple of the second number:

// const fizzBuzz = num => {
//   for(let i = 1; i <= num; i++) {
//     // check if the number is a multiple of 3 and 5
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz')
//     } // check if the number is a multiple of 3
//       else if(i % 3 === 0) {
//       console.log('fizz')
//     } // check if the number is a multiple of 5
//       else if(i % 5 === 0) {
//       console.log('buzz')
//     } else {
//       console.log(i)
//     }
//   }
// }

// fizzBuzz(22);


// function fizzBuzz(number){
//   for(let i = 1; i <= number; i++){
//     if(i % 3=== 0 && i % 5 === 0){
//       console.log('fizzbuzz');
//   }
//     else if(i % 3 === 0){
//       console.log('fizz');
//   }
//     else if(i % 5 === 0){
//       console.log('buzz');
//   } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);




// #3 ANAGRAM

// You can state this challenge in the following terms: write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. 

// The first thing to notice is that you’ll need to compare each letter in the two input strings, not only in terms of which letters they are but also how many of each letter there are in both strings. A way of mapping this information would look something like this:

// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false

// helper function that builds the
// object to store the data
// const buildCharObject = str => {
//   const charObj = {}
//   for(let char of str.replace(/[^\w]/g).toLowerCase()) {
//     // if the object has already a key value pair
//     // equal to the value being looped over,
//     // increase the value by 1, otherwise add
//     // the letter being looped over as key and 1 as its value
//     charObj[char] = charObj[char] + 1 || 1
//   }
//   return charObj
// }

// // main function
// const anagram = (strA, strB) => {
//   // build the object that holds strA data
//   const aCharObject = buildCharObject(strA)
//   // build the object that holds strB data
//   const bCharObject = buildCharObject(strB)

//   // compare number of keys in the two objects
//   // (anagrams must have the same number of letters)
//   if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
//     return false
//   }
//   // if both objects have the same number of keys
//   // we can be sure that at least both strings
//   // have the same number of characters
//   // Now we can compare the two objects to see if both
//   // have the same letters in the same amount
//   for(let char in aCharObject) {
//     if(aCharObject[char] !== bCharObject[char]) {
//       return false
//     }
//   }
//   // if both the above checks succeed,
//   // you have an anagram: return true
//   return true
// }

 
// Input : Two strings // 'dog', 'god' ; 'foo','bar'
// Output : Boolean // True ; False

// Clarifications :
// Is the comparison of our string permutation case sensitive? Yes
// Is whitespace significant? Yes

// Approach 1 :
// Logic :
// If both the strings are of different lengths then they can not be permutations of each other. Hence, return false.
// Sort both the strings.
// Compare both the sorted strings.

// Time Complexity :
// O(N log N); where N is the length of the string

// function isAnagram (str1, str2) {

//     if (str1.length !== str2.length) {
//         return false;
//     }
    
//     var sortStr1 = str1.split('').sort().join('');
//     var sortStr2 = str2.split('').sort().join('');

//     return (sortStr1 === sortStr2);
// }

// console.log(isAnagram('dog','god')); // true
// console.log(isAnagram('foo','bar')); // false
// console.log(isAnagram('foo','fooo')); // false




// #4 VOWELS 

// Understanding the challenge
// You can state the vowels challenge as follows: write a function that takes a string as argument and returns the number of vowels contained in that string.

// The vowels are “a”, “e”, “i”, “o”, “u”.

// Examples:

// findVowels('hello') // --> 2
// findVowels('why') // --> 0

// Solution
// Here’s a simple iterative solution to the Vowels challenge:

// const findVowels = str => {
//   let count = 0
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   for(let char of str.toLowerCase()) {
//     if(vowels.includes(char)) {
//       count++
//     }
//   }
//   return count
// }

// findVowels('georgia');



// const findVowels = str => {
//   const matched = str.match(/[aeiou]/gi)
//   return matched ? matched.length : 0
// }


// findVowels('georgia');




// The one thing to notice here is the use of the .includes() method. This method is available both on strings and arrays. You can leverage it to determine if an array contains a certain value. It returns true if the array contains the specified value and false if it doesn’t.






// #5 FIBONACCI

// Reasoning about the challenge
// The Fibonacci challenge involves iterating over the number of times indicated by the function’s argument and returning the entry in the Fibonacci series that you find in that position.

// This way of stating the challenge immediately points to an iterative approach to solve the problem. Alternatively, you could try out a recursive solution, which would certainly impress the interviewer.

// const fibonacci = num => {
//   // store the Fibonacci sequence you're going
//   // to generate inside an array and
//   // initialize the array with the first two
//   // numbers of the sequence
//   const result = [0, 1]

//   for(let i = 2; i <= num; i++) {
//     // push the sum of the two numbers
//     // preceding the position of i in the result array
//     // at the end of the result array
//     const prevNum1 = result[i - 1]
//     const prevNum2 = result[i - 2]
//     result.push(prevNum1 + prevNum2)
//   }
//   // return the last value in the result array
//   return result[num]
// }

// fibonacci(4);


// FIBONACCI USING RECURSION
// const fibonacci = num => {
//   // if num is either 0 or 1 return num
//   if(num < 2) {
//     return num
//   }
//   // recursion here
//   return fibonacci(num - 1) + fibonacci(num - 2)
// }

// fibonacci(4);

// function fibonacci(num){
//   if(num < 2) {
//     return num
//   }
//   return fibonacci(num -2) + fibonacci(num -1);
// }

// fibonacci(10);

// function isPalindrome(str){
//   var string = str.toLowerCase();
//   return string === string.split('').reverse().join('')
//   }
// isPalindrome('racecars');

function fizzBuzz(num){
    for (let i = 1; i<= num; i ++){
      if( i % 3 === 0 && i % 5 === 0 ){
        console.log('fizzbuzz');
      }
      else if( i % 3 === 0){
        console.log('fizz');
      }
      else if ( i % 5 === 0){
        console.log('buzz');
      }
      else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz(15);jkkjiu58 