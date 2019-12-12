var values = ['A','B','A','A','B','C'];
var counts = {}, i, value;

function countOccurences(arr) {
  for (i = 0; i < arr.length; i++) {
    value = arr[i];
    if (typeof counts[value] === "undefined") {
        counts[value] = 1;
    } else {
        counts[value]++;
    }
  }
    return counts;

}
countOccurences(values);


// var values = ['A','B','A','A','B','C'];
// var count = {};

// values.forEach(function(el){
//     count[el] = count[el] + 1 || 1
// });

// console.log(count)





var values = ['A','B','A','A','B','C'];
var count = {};

function countOccurences(){
  values.forEach(function(el){
      count[el] = count[el] + 1 || 1
    });
    return count;
  }

countOccurences(values);


// REDUCE = higher order function

