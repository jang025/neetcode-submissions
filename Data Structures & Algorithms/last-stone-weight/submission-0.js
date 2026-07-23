// creating max-heap from scratch because js doesnt have built-in heaps
    class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // returns the maximum element without removing it
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
        while( parentIndex >= 0 && this.heap[parentIndex] <= val){
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
        let largest = index;
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]){
            largest = leftChildIndex;
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
            largest = rightChildIndex;
        }
        if(largest === index) break;

        // swap
        const temp = this.heap[index];
        this.heap[index] = this.heap[largest];
        this.heap[largest] = temp;
        // update index , leftChildIndex , rightChildIndex
        index = largest;
        leftChildIndex = 2 * index + 1;
        rightChildIndex = 2 * index + 2;
      }
        // 5. return the saved root value
        return root
    }
}



class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // push every stone weight into the MaxHeap
        // while there's more than 1 stone , pop the two heaviest stones 
        // if heaviest and second heaviest is the same , both are destroyed , push nothing
        // if heaviest and second heaviest is not the same , push the difference back into the heap
        // at the end , return 0 or the last remaining stone 
        const maxHeap = new MaxHeap();
        for(let i = 0; i < stones.length; i++){
            const stone = stones[i];
            maxHeap.push(stone);
        }
        while(maxHeap.size() > 1){
            // heaviest
            const y = maxHeap.pop();
            // second heaviest
            const x = maxHeap.pop();
            if(y !== x) maxHeap.push(y - x)
        }
        if(maxHeap.size()) return maxHeap.peek();
        return 0;
    }
}
