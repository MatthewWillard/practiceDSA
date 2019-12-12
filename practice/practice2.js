// function palindrome(word){
//   let string = word.toLowerCase()
//   if(string === string.split('').reverse().join('')) {
//     return true;
//   } 
//   return false;  
// }

// palindrome('racecar');
// palindrome('tighty');


// function fizzBuzz(num){
//   for(let i= 1; i <= num; i++){
//     if(i % 3=== 0  && i % 5=== 0){
//       console.log('fizzbuzz');
//     }
//     else if(i % 3 === 0){
//       console.log('fizz');
//     }
//     else if(i % 5 === 0){
//       console.log('buzz');
//     }
//     else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(50);


// // The sort() method sorts the items of an array.

// // The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

// // By default, the sort() method sorts the values as strings in alphabetical and ascending order.

// // This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".


// function isAnagram(str1, str2) {
//   if(str1.length !== str2.length) {
//     return false;
//   }
//   var sortStr1 = str1.split('').sort().join('');
//   var sortStr2 = str2.split('').sort().join('');

//   return (sortStr1 === sortStr2);
// }

// isAnagram('friend', 'finder');
// isAnagram('friend', 'fonder');


// function findVowels(string){
//   let count= 0;
//   let vowels = ['a','e','i','o','u'];
//   for(let char of string.toLowerCase()) {
//     if(vowels.includes(char)) {
//       count++
//     }
//   }
//   return count
// }

// findVowels('eek');


// FIBONACCI


// fibonacci(4);

// function fibonacci(num){
//   if(num < 2) {
//     return num
//   }
//   return fibonacci(num -2) + fibonacci(num -1);
// }

// fibonacci(10);


// function vowelCount(str){
//   let count = 0;
//   let vowels = ['a','e','i','o','u'];
//   for(let char of str.toLowerCase()) {
//     if(vowels.includes(char)) {
//       count ++
//     }
//   }
//   return count;
// }

// vowelCount('assmanea');


// function fibonacci(num){
//   if(num < 2){
//     return num;
//   }
//   return fibonacci(num -1) + fibonacci(num - 2);
// }

// fibonacci(10);

// function reverseString(str){
//   return str.split('').reverse().join('');
// }

// reverseString('hello');
  
function wordReverser(str){
  
}