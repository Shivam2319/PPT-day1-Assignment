function merge(nums1, m, nums2, n) {
    let i = m - 1; // Index of last element in nums1
    let j = n - 1; // Index of last element in nums2
    let k = m + n - 1; // Index of last position in merged array (nums1)
  
    // Merge the arrays from the end to the beginning
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    // Copy remaining elements from nums2, if any
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  
  // Example usage:
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  
  merge(nums1, m, nums2, n);
  console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
  