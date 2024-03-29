// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

//node
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insert(data) {
      if (data < this.data && this.left) {
        this.left.insert(data);
      } else if (data < this.data) {
        this.left = new Node(data);
      } else if (data > this.data && this.right) {
        this.right.insert(data);
      } else if (data > this.data) {
        this.right = new Node(data);
      }
    }
  }
  
  module.exports = Node;

//solution
function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
      return false;
    }
  
    if (min !== null && node.data < min) {
      return false;
    }
    if (node.left && !validate(node.left, min, node.data)) {
      return false;
    }
  
    if (node.right && !validate(node.right, node.data, max)) {
      return false;
    }
  
    return true;
  }
  
  module.exports = validate;

  //test

  const Node = require('./node');
const validate = require('./index');

test('Validate recognizes a valid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

test('Validate recognizes an invalid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);

  expect(validate(n)).toEqual(false);
});