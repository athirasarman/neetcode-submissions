class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
     let left = 0;                  // First pointer at the start
    let right = numbers.length - 1;    // Second pointer at the end

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];

        if (currentSum === target) {
            return [left+1, right+1];  // Target found! Return the indices.
        } else if (currentSum < target) {
            left++;                // Sum is too low; move left pointer rightward.
        } else {
            right--;               // Sum is too high; move right pointer leftward.
        }
    }

    return null; // No pair matches the target sum.
}
}
