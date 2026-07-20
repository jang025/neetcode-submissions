// creating min-heap from scratch because js doesnt have built-in heaps
    class MinHeap {
    constructor() {
        this.heap = [];
    }

    // returns the minimum element without removing it
    peek() {
        return this.heap[0];
    }

    // returns current size
    size() {
        return this.heap.length;
    }

    push(val) {
        // 1. add val to the end of this.heap
        this.heap.push(val)
        // 2. bubble up
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2)
        while( parentIndex >= 0 && this.heap[parentIndex] >= val){
            // swap happens
            this.heap[index] = this.heap[parentIndex];
            this.heap[parentIndex] = val;
            // update index and parentIndex
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    pop() {
        // 1. save the root value (this is what you'll return)
        const root = this.heap[0];
        // 2. move the last element to the root position
        let index = this.heap.length - 1;
        this.heap[0] = this.heap[index];
        // 3. remove the last element (since it's now duplicated)
        this.heap.pop();
        // 4. bubble down
        index = 0;
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;

      while(true){
        let smallest = index;
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
            smallest = leftChildIndex;
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
            smallest = rightChildIndex;
        }
        if(smallest === index) break;

        // swap and update index , leftChildIndex, rightChildIndex
        const temp = this.heap[index];
        this.heap[index] = this.heap[smallest];
        this.heap[smallest] = temp;

        index = smallest;
        leftChildIndex = 2 * index + 1;
        rightChildIndex = 2 * index + 2;
      }
        // 5. return the saved root value
        return root
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // sort it in descending order
        // the kth largest element is always at the index k - 1
        // time complexity : O(n log n) space complexity : O(n)
        // return nums.sort((a,b) => b - a)[k - 1] 

        // can you solve it without sorting ?


        // min-Heap : time complexity O(n log k) space complexity O(k)
        // Iterate through nums
        // Push each element onto the min-heap
        // If the heap size exceeds k, pop (remove the smallest)
        // At the end, peek() gives you the Kth largest

        const myHeap = new MinHeap();
        for(let i = 0; i < nums.length; i++){
            const num = nums[i];
            myHeap.push(num);
            if(myHeap.size() > k) myHeap.pop();
        }
         return myHeap.peek();

    }
}
  