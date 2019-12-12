// // A.  This example is not clean code because it uses comments, isn’t named properly to know what is going on and does not store values in variables.  Here is my refactored code;

// function toFahrenheit(celsius) {
//   var fahrenheit = (celsius * 1.8) + 32;
//   return fahrenheit;
// }
// toFahrenheit(0);

// function toCelsius(fahrenheit) {
//   var celsius = (fahrenheit - 32) * (5/9);
//   return celsius;
// }
// toCelsius(32);





// // 6.  Square Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

// // Answer:

// var integers = [10,1,4,6,1,1,2];
// var sumIntegers = integers.reduce((total, item ) => total + item);
// var squared = Math.sqrt(sumIntegers); 

// function isSquared() {
//   if(sumIntegers % squared === 0) {
//     return squared;
//     } else {
//     return sumIntegers;
//     }
// }
// isSquared(integers);




// // 7. Duplicate Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.

// // Answer:

// var integers = [9,1,4,6,1,1,2];

// function isDuplicated() {
//   return integers.length !== new Set(integers).size;
// }
// isDuplicated(integers);





// // 1.  A line of people at an amusement park ride.
  
// var riderLine = [ {'Vivian', 'Ava', 'Josh', 'Patrick', 'Mike'} ];


// riderLine.push('Mary');


// // c) Find a person in line named "Josh." This function should return the position of 2 in the array, (recall that arrays are 0-based).

// function findPerson (rider) {
//   return riderLine.indexOf(rider);
//   }
// findPerson('Josh');

// // returns 2


// // d) Find a person in line named "Emily." What should your function return if it does not find the item in the array?

// function findPerson (rider) {
//   for(var i = 0; i < riderLine.length; i++) {
//      if (riderLine[i] === rider) {
//   return riderLine.indexOf(rider);
//     }
//   }
//   return "This person is not in line";
// }
// findPerson(‘Emily’);

// // returns “This person is not in Line”


// // e) What if Ava wants to allow a friend, "Melissa", to cut in line in front of her? How would you code this so Melissa appears before Ava?

// riderLine.splice(1, 0, 'Melissa');


// // f) If Patrick wants to leave the line, how would you delete him from the array?

// riderLine.splice(4,1);





// 1.  Given a Binary Search Tree and a value, write a function that checks to see whether the value exists within the tree.

// Example: The value 10 exists in the tree. The value 23 does not exist in the tree.

// A.  I would add the numbers to a BST then use boolean logic to see if the value exists in the tree.

// function Node(data) {
//   this.data = data;
//   this.left = null;
//   this.right = null;
// }

// function BinarySearchTree() {
//   this.root = null;
// }

// BinarySearchTree.prototype.add = function(data) {
//   var node = new Node(data);
//   if(!this.root) {
//     this.root = node;
//   } else {
//     var current = this.root;
//     while(current) {
//       if(node.data < current.data) {
//         if(!current.left) {
//           current.left = node;
//           break;
//         }
//         current = current.left;
//       } else if (node.data > current.data) {
//         if(!current.right) {
//           current.right = node;
//           break;
//         }
//         current = current.right;
//       } else {
//         break;
//       }
//     }
//   }
// };

// BinarySearchTree.prototype.contains = function(data) {
//   var current = this.root;
//   while(current) {
//     if(data === current.data) {
//       return true;
//     }
//     if(data < current.data) {
//       current = current.left;
//     } else {
//       current = current.right;
//     }
//   }
//   return false;
// };

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.add(8);
// binarySearchTree.add(3);
// binarySearchTree.add(10);
// binarySearchTree.add(6);
// binarySearchTree.add(1);
// binarySearchTree.add(7);
// binarySearchTree.add(4);
// binarySearchTree.add(14);
// binarySearchTree.add(13);

// console.log(JSON.stringify(binarySearchTree));

// binarySearchTree.contains(10);
// binarySearchTree.contains(23);




// 2.  Given a Binary Search Tree and two nodes, n1 and n2, write a function that finds the distance between the two nodes.

// Example: The distance between the nodes 4 and 10 is 4. The distance between the nodes 8 and 10 is 1. The distance between the nodes 1 and 14 is 4.

// A.  	calculate the list of ancestors for each node
// 	find the common prefix
// 	the last element from the common prefix is the lowest common ancestor
// 	remove the common prefix from both ancestor lists
// 	the distance is the sum of lengths of the remaining lists +1

// class Node {
//   constructor(data) {
//     this.data =  data;
//     this.left = null;
//     this.right = null;
//   }
// }

// function findLCA(root, n1, n2) {
// 		if (root != null) {
// 			if (root.data == n1 || root.data == n2) {
// 				return root;
// 			}
// 			var left = findLCA(root.left, n1, n2);
// 			var right = findLCA(root.right, n1, n2);

// 			if (left != null && right != null) {
// 				return root;
// 			}
// 			if (left != null) {
// 				return left;
// 			}
// 			if (right != null) {
// 				return right;
// 			}
// 		}
// 		return null;
// 	}

// function pathLength(root, n1) {
// 		if (root != null) {
// 			let x = 0;
// 			if ((root.data == n1) || (x = pathLength(root.left, n1)) > 0
// 					|| (x = pathLength(root.right, n1)) > 0) {
// 				return x + 1;
// 			}
// 			return 0;
// 		}
// 		return 0;
// 	}
  
// function findDistance(root, n1, n2) {
//   var x = pathLength(root, n1) -1;
//   var y = pathLength(root, n2) -1;
//   var lcaData = findLCA(root, n1, n2).data;
//   var lcaDistance = pathLength(root, lcaData) -1;
//   return (x + y) -2 * lcaDistance;
// }

// root = new Node(8);
// root.left = new Node(3);
// root.right = new Node(10);
// root.left.left = new Node(1);
// root.left.right = new Node(6);
// root.right.right = new Node(14);
// root.left.right.left = new Node(4);
// root.left.right.right = new Node(7);
// root.right.right.left = new Node(13);

// // console.log(root);
// findDistance(root, 4, 10); //4
// findDistance(root, 8, 10); //1
// findDistance(root, 1, 14); //4




// // 4.  Using the pseudocode you wrote for the previous question, implement it in any computer language of your choice.

// var phoneBook = [
//     {lastName: 'Thomas', firstName: 'Tim', number: '3038838405'},
//     {lastName: 'Johnson', firstName: 'John', number: '3028838405'},
//     {lastName: 'Sullivan', firstName: 'Steve', number: '3018838405'}
// ];

// function findPerson (search) {
//   for (var i = 0; i <= phoneBook.length; i++) {
//     if (phoneBook[i].lastName === search) {
//       return phoneBook[i];
//       }  
//   }
//       return 'Sorry this person is not found';
// }
// findPerson('Sullivan');




// // 1.  Given a string, reverse it using a stack. For example, the string "Bloc!" should be converted to "!colB".

// // I will create a function that will accept a string as an argument and I am going to create an empty array and `push()` the letters from the string into the array using a for loop by which creating an array named “stack”.  Then I will create an empty string and `pop()` the letters into it with a while loop by appending a letter at a time into the string until there are no letters left.  Then I will return that string.  Then I will call the function with any string I desire as an argument and it will be reversed. Voila!


// function reverse(original) {
//     var stack = [];
//     for (var i = 0; i < original.length; i++) {
//         stack.push(original[i]);
//     }
//     var reversed = "";
//     while (stack.length > 0) {
//         reversed += stack.pop();
//     }
//     return reversed;
// }
// reverse('Bloc!');





// // 2.  Implement the delete functionality of a stack using one queue. Make a FIFO data structure mirror the functionality of a LIFO data structure.

// // I will create a function that will loop through an array and remove the first index with the shift() method and push it to the last index of the array and log the result until there only 1 index left and it will return that result with an else statement and the shift() method.

// function deleteStack(queue) {
//   for (let i = 0; i < queue.length; i++) {
// 		if (i !== queue.length - 1) {
// 			first = queue.shift();
// 			queue.push(first);
// 			console.log(queue);
// 		} else {
// 			last = queue.shift();
// 			console.log(queue)
// 		}
// 	}
// 	return last;
// }
// deleteStack(['A','B','C']);





// // 3.  Fill in the methods for the following Queue class so that it will work as expected (FIFO).

// // I will fill in the enqueue and dequeue methods using the push and splice methods to allow me to adjust the array as I see fit

// class Queue {
//   constructor(items) {
//   this.items = items;
//   }

//   enqueue(items) {
//     this.items.push(items)
//     return this.items;
//   }

//   dequeue() {
//     this.items.splice(0, 1);
//     return this.items;
//   }

// }

// let ticketOrder = new Queue(['A','B','C']);

// ticketOrder.enqueue('D');
// ticketOrder.dequeue('A');
// ticketOrder.dequeue('C');




// // 1.  The Linked List push function should take a value, create a node, and add it to the end of a list. Below is a push function for a singly linked list. However, there is something wrong with it. Find the bug and fix the code.

// // A.  The else statement needs a while loop to find the last node and append a node to the end of the list.  To check this code I need to create a simple constructor function with a head position of null.  

// // BLOC Pseudocode
// // ```
// // LinkedList.prototype.push = function(element) {
// //  SET node = {
// //    value: element,
// //    next: null
// //  }

// //  IF the head node does not exist
// //    THEN SET head to node
// //  ELSE
// //    SET current node to head
// //    SET current.next to node
// //  }
// // }



// // MY CODE

// function LinkedList(){  
//   this.head = null;
// }

// LinkedList.prototype.push = function(value) {  
//     var node = {
//        value: value,
//        next: null
//     }
//     if(!this.head){
//       this.head = node;      
//     } else {
//       current = this.head;
//       while(current.next){
//         current = current.next;
//       }
//       current.next = node;
//     }
//   }
// let list = new LinkedList();  

// list.push(123);  
// list.push(456);  

// list.head;  //Object value: 123  
// list.head.next; //Object value: 456  







// 5.  Given a multi-dimensional collection (such as an array) where the number of dimensions is unknown, write a recursive algorithm to count the number of items in the entire collection.

// A.

// function countCollection(array) {
// let count = array.length;
// console.log(count);
// if (array.length <= 0 ) {
//   return 0;
//   }
//   return count;
// };

// countCollection([1, 2, 3]); 
// //3




// 6.  A palindrome is a word or phrase whose spelling is the same either direction (e.g., racecar). Write a recursive algorithm to determine if a given word or phrase is a palindrome.

// A.  

// function checkPalindrome (str){
//   str = str.toLowerCase();
//   if(str.length === 1){
//     return true;
//   }else if(str[0] !== str[str.length-1]){
//     return false;
//   }
//     return checkPalindrome(str.slice(1,-1));
// }

// checkPalindrome("racecar");





// 7.  Laura and Xander are going door-to-door around their block looking for their lost cat. Write a recursive algorithm showing one way they can visit every house on their block exactly once.

// A.

// function dfs(tree, fn, level) {
//   fn(tree, level)
//   tree.children.forEach(function(child){
//     dfs(child, fn, level + 1)
//   })
// }





// 2.  Write pseudocode for quicksort.

// A.  
// function quicksort(array)
//     less, equal, greater := three empty arrays
//     if length(array) > 1  
//         pivot := select any element of array
//         for each x in array
//             if x < pivot then add x to less
//             if x = pivot then add x to equal
//             if x > pivot then add x to greater
//         quicksort(less)
//         quicksort(greater)
//         array := concatenate(less, equal, greater)







// 1.  You and a friend have set a wager to see who can find the word "Albatross" in the dictionary the fastest. Write a program to allow you to win the bet. (Binary search because dictionary is sorted)

// function binarySearch(arrsy, target) {
//     let left = 0;
//     let right = array.length - 1;
//     while (left <= right) {
//         const mid = left + Math.floor((right - left) / 2);
//         if (array[mid] === target) {
//             return mid;
//         }
//         if (array[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// } 






// 2.  You work at a pet store, and a child has asked you to net the only white-spotted goldfish from the fish tank. Write a program that will help you net the right fish.  (Linear search because fish bowl is not sorted)

// var linearSearch = function(collection, target) {
//    var result = null, value;
//    for(var i = 0; i < collection.length; i++) {
//      value = collection[i];
//      if(value === target){
//        result = i;
//        break;
//      }
//    }
//    return result;
//  };  





// Linked List Practice 

// function LinkedList() {
//   this.head = null;
// }

// LinkedList.prototype.push = function(val){  
//     var node = {
//        value: val,
//        next: null
//     }
//     if(!this.head){
//       this.head = node;      
//     }
//     else{
//       current = this.head;
//       while(current.next){
//         current = current.next;
//       }
//       current.next = node;
//     }
//   }
// let ll = new LinkedList();

// ll.push(222);
// ll.push(111);
// ll.push(333);

// ll.head;


// function factorial(number) {
// 	if(number < 0) {
// 		return error;
// 	} else if (number == 0  || number == 1) {
// 		return 1;
// 	} else {
// 		let previousFactorial = factorial(number -1);
// 		return number*previousFactorial;
// 	}
// }
// factorial(5);