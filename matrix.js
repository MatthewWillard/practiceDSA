// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
  
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
  
    while (startColumn <= endColumn && startRow <= endRow) {
      //Top row
      for (let i = startColumn; i < endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
      //Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
      //Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
      }
      endRow--;
      //Start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
  
    return results;
  }
  
  console.log(matrix(4));
  
  module.exports = matrix;

  //test
  const matrix = require('./index');

  test('matrix is a function', () => {
    expect(typeof matrix).toEqual('function');
  });
  
  test('matrix produces a 2x2 array', () => {
    const m = matrix(2);
    expect(m.length).toEqual(2);
    expect(m[0]).toEqual([1, 2]);
    expect(m[1]).toEqual([4, 3]);
  });
  
  test('matrix produces a 3x3 array', () => {
    const m = matrix(3);
    expect(m.length).toEqual(3);
    expect(m[0]).toEqual([1, 2, 3]);
    expect(m[1]).toEqual([8, 9, 4]);
    expect(m[2]).toEqual([7, 6, 5]);
  });
  
  test('matrix produces a 4x4 array', () => {
    const m = matrix(4);
    expect(m.length).toEqual(4);
    expect(m[0]).toEqual([1, 2, 3, 4]);
    expect(m[1]).toEqual([12, 13, 14, 5]);
    expect(m[2]).toEqual([11, 16, 15, 6]);
    expect(m[3]).toEqual([10, 9, 8, 7]);
  });