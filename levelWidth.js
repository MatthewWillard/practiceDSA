// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, 's'];
    const counters = [0];
    while (arr.length > 1) {
      const node = arr.shift();
      if (node === 's') {
        counters.push(0);
        arr.push('s');
      } else {
        arr.push(...node.chilldren);
        counters[counters.length - 1]++;
      }
    }
    console.log(counters);
    return counters;
  }
  
  module.exports = levelWidth;

  //FROM NODE.js
  module.exports = class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    add(data) {
      this.children.push(new Node(data));
    }
  };
  //test
  const Node = require('./node');
const levelWidth = require('./index');

test('levelWidth is a function', () => {
  expect(typeof levelWidth).toEqual('function');
});

test('levelWidth returns number of nodes at widest point', () => {
  const root = new Node(0);
  root.add(1);
  root.add(2);
  root.add(3);
  root.children[0].add(4);
  root.children[2].add(5);

  expect(levelWidth(root)).toEqual([1, 3, 2]);
});

test('levelWidth returns number of nodes at widest point', () => {
  const root = new Node(0);
  root.add(1);
  root.children[0].add(2);
  root.children[0].add(3);
  root.children[0].children[0].add(4);

  expect(levelWidth(root)).toEqual([1, 1, 2, 1]);
});