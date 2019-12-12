// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    if (n === row) {
      return;
    }
    if (n === stair.length) {
      console.log(stair);
      return steps(n, row + 1);
    }
    if (stair.length <= row) {
      stair += '#';
    } else {
      stair += ' ';
    }
    steps(n, row, stair);
  }
  
  console.log(steps(3));
  
  module.exports = steps;
  
  /* 
  iterative solution
  function steps(n) {
    for (let row = 0; row < n; row++) {
      let stair = '';
      for (let column = 0; column < n; column++) {
        if (column <= row) {
          stair += '#';
        } else {
          stair += ' ';
        }
      }
      console.log('stair');
      return stair;
    }
  }
  */

  //test


  const steps = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('steps is a function', () => {
  expect(typeof steps).toEqual('function');
});

test('steps called with n = 1', () => {
  steps(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('steps called with n = 2', () => {
  steps(2);
  expect(console.log.mock.calls[0][0]).toEqual('# ');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('steps called with n = 3', () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toEqual('#  ');
  expect(console.log.mock.calls[1][0]).toEqual('## ');
  expect(console.log.mock.calls[2][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(3);
});