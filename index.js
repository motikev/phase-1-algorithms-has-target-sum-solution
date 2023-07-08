function hasTargetSum(array, target) {
  let numSet = new Set();
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(array[i]);
  }
  return false;
}

/* 
  Time complexity of the function: O(n)
  The function uses a hash set to keep track of the numbers seen so far. In the worst case, it will iterate over the entire input array exactly once, performing constant time operations for each element. Therefore, the time complexity of the function is O(n).
*/

/* 
  Add your pseudocode here:
  1. Create an empty hash set.
  2. Loop through each element in the input array.
  3. Compute the complement of the current element with respect to the target.
  4. Check if the complement is already in the hash set.
  5. If the complement is in the hash set, return true.
  6. If the complement is not in the hash set, add the current element to the hash set.
  7. If the loop completes without finding a pair of elements that sum to the target, return false.
*/

/*
  Add written explanation of your solution here:
  The `hasTargetSum` function takes an array of integers and a target integer as input, and returns `true` if there exist two distinct elements in the array whose sum is equal to the target, and `false` otherwise. To solve this problem, we can use a hash set to keep track of the numbers we have seen so far. For each element in the input array, we can compute its complement with respect to the target, and check if the complement is already in the hash set. If the complement is in the hash set, we can immediately return `true` since we have found a pair of elements that sum to the target. Otherwise, we can add the current element to the hash set and continue iterating through the array. If the loop completes without finding a pair of elements that sum to the target, we can return `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;