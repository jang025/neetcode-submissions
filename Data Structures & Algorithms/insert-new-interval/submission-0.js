class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const updatedIntervals = [];

        // before newInterval, no overlap
        for(let i = 0; i < intervals.length; i++){
            if(intervals[i][1] < newInterval[0]){
                updatedIntervals.push(intervals[i])
            }
        }

        // overlapping with newInterval, take the smallest start and largest end 
        let mergedStart = newInterval[0];
        let mergedEnd = newInterval[1];

        for(let i = 0; i < intervals.length; i++){
            if(intervals[i][1] >= newInterval[0] && intervals[i][0] <= newInterval[1]){
                mergedStart = Math.min(intervals[i][0],mergedStart);
                mergedEnd = Math.max(intervals[i][1], mergedEnd);
            }
        }
        updatedIntervals.push([mergedStart, mergedEnd]);



        // after new interval , no overlap
        for(let i = 0; i < intervals.length; i++){
            if(intervals[i][0] > newInterval[1]){
                updatedIntervals.push(intervals[i]);
            }
        }
        return updatedIntervals;
    }
}
