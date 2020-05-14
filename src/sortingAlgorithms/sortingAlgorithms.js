export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    //These are the values that we're comparing: we push them once
    //to change their color
    animations.push([i, j]);
    //These are the values that we're comparing: we push them a second time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      //we overwrite the value at index k in the original array with the value
      //at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      //we overwrite the value at index k in the original array with the value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIdx) {
    //These are the values that we're comparing; we push them once
    //to change their colors.
    animations.push([i, i]);
    //These are the values that we're comparing; we push them a second
    //time to revert their color.
    animations.push([i, i]);
    //We overwrite the value at index k in the original array with the
    //value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIdx) {
    //These are the values that we're comparing; we push them once
    //to change their colors.
    animations.push([j, j]);
    //These are the values that we're comparing; we push them a second
    //time to revert their color.
    animations.push([j, j]);
    //We overwrite the value at index k in the original array with the
    //value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  bubbleSortHelper(array, animations);
  return animations;
}

function bubbleSortHelper(array, animations) {
  var n = array.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        animations.push([j, array[j + 1]]);
        animations.push([j + 1, array[j]]);
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return animations;
}

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  quickSortHelper(array, 0, array.length, animations);
  console.log(array);
  return animations;
}

function quickSortHelper(arr, start = 0, end = arr.length, animations) {
  let pivotIndex = pivot(arr, start, end, animations);

  if (start >= end) return arr;
  quickSortHelper(arr, start, pivotIndex, animations);
  quickSortHelper(arr, pivotIndex + 1, end, animations);

  return arr;
}

function pivot(arr, start = 0, end = arr.length + 1, animations) {
  let pivot = arr[start],
    pointer = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pointer++;
      swap(arr, pointer, i, animations);
    }
  }
  swap(arr, start, pointer, animations);

  return pointer;
}
function swap(list, a, b, animations) {
  animations.push([a, b]);
  animations.push([a, b]);
  animations.push([a, list[b]]);
  animations.push([b, list[a]]);
  let tmp = list[a];
  list[a] = list[b];
  list[b] = tmp;
}

function heapify(array, length, i, animations) {
  let largest = i;
  let left = i * 2 + 1;
  let right = left + 1;
  if (left < length && array[left] > array[largest]) {
    largest = left;
  }
  if (right < length && array[right] > array[largest]) {
    largest = right;
  }
  if (largest != i) {
    swap2(array, i, largest, animations);
    heapify(array, length, largest, animations);
  }
  return array;
}

export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  heapSortHelper(array, animations);
  return animations;
}

function heapSortHelper(array, animations) {
  let length = array.length;
  let i = Math.floor(length / 2 - 1);
  let k = length - 1;

  while (i >= 0) {
    heapify(array, length, i, animations);
    i--;
  }
  while (k >= 0) {
    swap2(array, 0, k, animations);
    heapify(array, k, 0, animations);
    k--;
  }
  return animations;
}

function swap2(list, a, b, animations) {
  animations.push([a, b]);
  animations.push([a, b]);
  animations.push([a, list[b]]);
  animations.push([b, list[a]]);
  let tmp = list[a];
  list[a] = list[b];
  list[b] = tmp;
}
