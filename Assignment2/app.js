let arr1 = [1, 2, 9, 6, 7, 8, 3, 4];
// let arr1 = [1, 3, 2, 4];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let arrSort = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      arrSort.push(leftArr.shift());
    } else {
      arrSort.push(rightArr.shift());
    }
  }
  return [...arrSort, ...leftArr, ...rightArr];
}

console.log(mergeSort(arr1));
