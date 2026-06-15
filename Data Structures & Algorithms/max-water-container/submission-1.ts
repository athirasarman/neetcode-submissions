class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        
        let left = 0;
        let right = heights.length-1;
        let result = 0;
        while(left<right){
            const width = right-left;
            const height = Math.min(heights[left], heights[right]);
            const area = width * height;
            result= Math.max(result,area);
            if(heights[left]<heights[right]){
                left++;
            } else{
                right--;
            }
        }
        return result;
    }
}
