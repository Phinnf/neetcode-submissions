class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(numbers) {
         let low = 0;
    let high = numbers.length - 1;
    let mid;
    while (low < high) {
      mid = Math.floor((low + high) / 2);
      if (numbers[mid] > numbers[high]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return numbers[low];
    }
}
