// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const lesser = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = lesser;
        }
      }
    }
    return arr;
  }
  
  console.log(bubbleSort([50, 33, -1, 0, 100, 20]));
  
  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let indexOfMin = i;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[indexOfMin]) {
          indexOfMin = j;
        }
      }
      if (indexOfMin !== i) {
        let lesser = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = lesser;
      }
    }
    return arr;
  }
  
  console.log(selectionSort([50, 33, -1, 0, 100, 20, 1, 2, 13]));
  
  function mergeSort(arr) {
    if (arr.length === 1) {
      return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const results = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        results.push(left.shift());
      } else {
        results.push(right.shift());
      }
    }
  
    return [...results, ...left, ...right];
  }
  
  console.log(mergeSort([50, 33, -1, 0, 100, 20, 1, 2, 13, -3, -14, 1000, -324]));
  
  module.exports = { bubbleSort, selectionSort, mergeSort, merge };

  //test

  const S = require('./index');
const bubbleSort = S.bubbleSort;
const selectionSort = S.selectionSort;
const mergeSort = S.mergeSort;
const merge = S.merge;

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe('Bubble sort', () => {
  test('sorts an array', () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Selection sort', () => {
  test('sorts an array', () => {
    expect(selectionSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Merge sort', () => {
  test('merge function can join together two sorted arrays', () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1,2,8,10,12]);
  });
  
  test('sorts an array', () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });
});