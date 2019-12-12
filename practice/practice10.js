// Programming Questions
// You may program the following questions in any language of your choice (JavaScript, pseudocode, etc.).

// Before beginning to code, write out a plan explaining how to solve the question.

// 1.  The Linked List push function should take a value, create a node, and add it to the end of a list. Below is a push function for a singly linked list. However, there is something wrong with it. Find the bug and fix the code.

// LinkedList.prototype.push = function(element) {
//  SET node = {
//    value: element,
//    next: null
//  }

//  IF the head node does not exist
//    THEN SET head to node
//  ELSE
//    SET current node to head
//    SET current.next to node
//  }
// }

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
    
//     while(current.next){
//         current = current.next;
//       }
//       current.next = node;
//     }
//   }
// let list = new LinkedList();  

// list.push(123);  
// list.push(456);  
// list.push(23);

// list.head;  //Object value: 123  
// // list.head.next; //Object value: 456  
 

// // 2.  Given an unsorted singly linked list, remove all duplicates from the linked list.
// // Example
// // Input: a -> c -> d -> d -> a
// // Output: a -> c -> d

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


// Given an unsorted singly linked list, reverse it.
// Example
// Input: a -> b -> c -> d
// Output: d -> c -> b -> a

function LinkedList () {
    this.head = null;
}

LinkedList.prototype.push = function (val) {
    var node = {
        data: val,
        next:null
    };

    if (!this.head) {
        this.head = node;
    } else {
        var p1 = this.head;
        while (p1.next) {
            p1 = p1.next;
        }
        p1.next = node;
    }
};

LinkedList.prototype.reverseLinkedList = function () {
  var p1 = null;
  var p2 = this.head;
  var p3;

  while (p2) {
    p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }
  this.head = p1;
}

var list = new LinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');

console.log(JSON.stringify(list));

console.log('-------');

list.reverseLinkedList();
console.log(JSON.stringify(list));