class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res: { [key: string]: string[] } = {};

        for (const s of strs) {
            // Create a frequency array of size 26 for 'a' through 'z'
            const count = new Array(26).fill(0);
            
            for (const char of s) {
                // Find the index (0-25) by subtracting the ASCII value of 'a'
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            // Convert the array to a string string to use as a hash map key
            const key = count.join(',');

            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }

        return Object.values(res);
    }
}