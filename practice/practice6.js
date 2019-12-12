// // HASH TABLE FOR TECHNICAL INTERVIEW

// class Customer {
//    constructor(name, address, phoneNumber) {
//       this.name = name;
//       this.address = address;
//       this.phoneNumber = phoneNumber;
//    }

//     getHashcode() {
//         return parseInt(this.phoneNumber);
//     }
// }

// let customerList = {};

// let john = new Customer("John", "Spirit Lake, IA", "7204707836");
// let peter = new Customer("Peter Johnson", "Sioux Falls, SD", "3038838404");

// customerList[john.getHashcode()] = john;
// customerList[peter.getHashcode()] = peter;

// // console.log(customerList);

// console.log(customerList["3038838404"]);

// // MAKE A LINKED LIST

// function LinkedList () {
//   this.head = null ;
// }

// LinkedList.prototype.push = function(value) {
//   var node = {
//     data: value,
//     next: null 
//   }
//   if (!this.head) {
//     this.head = node;
//   } else {
//     var p1= this.head;
//     while(p1.next) {
//       p1= p1.next;
//     }
//     p1.next = node;
//     }
//   };

//   let list = new LinkedList();

//   list.push(4);
//   list.push(2);

// // console.log(list.head);
//   list.head;


// MERGE 2 LINKED LISTS

// console.log(JSON.stringify(merge));


// // Determine if a string has unique characters

// function isUnique(string) {
//   return new Set(string).size == string.length;
// }
// console.log(isUnique('abacadabra'));
// console.log(isUnique('theory'));
// isUnique('whathehoey');

// another one without .size JQuery method
// https://js-algorithms.tutorialhorizon.com/2015/09/13/determine-if-a-string-has-all-unique-characters/

// function isUnique(str) {  
//   var length = str.length;
//   // edge case? stupid 
//   // if (length >= 127) {
//   //   return false;
//   // }
//   for (i = 0; i < length; i++) {
//     var char = str[i];
//     if (str.indexOf(char, i + 1) > -1) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isUnique('bar')); // true
// console.log(isUnique('foo')); // false

// REMOVE DUPLICATES IN A LINKED LIST

// function LinkedList () {
//     this.head = null;
// }

// LinkedList.prototype.push = function (value) {
//     var node = {
//         data: value,
//         next:null
//     };

//     if (!this.head) {
//         this.head = node;
//     } else {
//         var p1 = this.head;
//         while (p1.next) {
//             p1 = p1.next;
//         }
//         p1.next = node;
//     }
// };

// LinkedList.prototype.removeDuplicates = function () {
//     if (!this.head || !this.head.next) {
//       console.log('No duplicates were found');
//       return;
//     }

//     var p1;
//     var p2;
//     var nodes = {};

//     p1 = this.head;
//     p2 = p1.next;
//     nodes[p1.data] = true;

//     while (p2) {
//         var data = p2.data;
//         if (nodes[data]) {
//             p1.next = p2.next;
//         } else {
//             nodes[data] = true;
//             p1 = p2;
//         }
//         p2 = p2.next;
//     }
// };

// var list = new LinkedList();
// list.push('a');
// list.push('c');
// list.push('d');
// list.push('d');
// list.push('a');
// console.log(JSON.stringify(list));

// console.log('-------');

// list.removeDuplicates();
// console.log(JSON.stringify(list));



// class Customer {
//   constructor(name, address, phoneNumber) {
//     this.name = name;
//     this.address = address;
//     this.phoneNumber = phoneNumber;
//   }
//   getHashCode() {
//     return parseInt(this.phoneNumber);
//   }
// }

// let customerList = {};

// let johnBrown = new Customer

// function Node (data, next) {
//   this.data = data;
//   this.next = next;
// }
// function merge(L1, L2){
//   var L3 = new Node(null, null);
//   var prev = L3;
//   while(L1 !== null && L2 !== null){
//     if(L1.data < L2.data){
//       prev.next = L1;
//       L1 = L1.next;
//     } else{
//       prev.next = L2;
//       L2 = L2.next;
//     }
//     prev = prev.next;
//   }
//   if(L1 === null){prev.next = L2}
//   if(L2 === null){prev.next = L1}
//   return L3.next;
// }

// var n6 = new Node(10, null);
// var n5 = new Node(8, n6);
// var n4 = new Node(6, n5);
// var L1 = n4; 

// var n3 = new Node(9, null);
// var n2 = new Node(7, n3);
// var n1 = new Node(5, n2);
// var L2 = n1;

// merge(L1, L2);
