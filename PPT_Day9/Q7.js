/*Given an array of integers, find the inversion of an array. Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
N=5, arr[] = {2, 4, 1, 3, 5}
Output: 3
Explanation: (2,1) (4,1) and (4,3) forms an inversion in an array */

function countInversions(arr) {
    let inversions = 0;
  
    function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
  
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
      return merge(left, right);
    }
  
    function merge(left, right) {
      let merged = [];
      let i = 0;
      let j = 0;
  
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          merged.push(left[i]);
          i++;
        } else {
          merged.push(right[j]);
          j++;
          inversions += left.length - i;
        }
      }
  
      merged = merged.concat(left.slice(i)).concat(right.slice(j));
      return merged;
    }
  
    mergeSort(arr);
    return inversions;
  }
  
  // Example usage
  const arr = [2, 4, 1, 3, 5];
  const inversionCount = countInversions(arr);
  console.log(inversionCount); // Output: 3
  