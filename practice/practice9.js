//  https://js-algorithms.tutorialhorizon.com/2015/09/13/determine-if-a-string-has-all-unique-characters/

function isUnique(str) {  
    var length = str.length;
    // edge case? stupid 
    // if (length >= 127) {
    //   return false;
    // }
    for (i = 0; i < length; i++) {
      var char = str[i];
      if (str.indexOf(char, i + 1) > -1) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isUnique('bar')); // true
  console.log(isUnique('foo')); // false