class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] < this.heap[index]) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    extractMax() {
      if (this.heap.length === 0) {
        return null;
      }
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return max;
    }
  
    heapifyDown() {
      let index = 0;
      const length = this.heap.length;
      
      while (this.getLeftChildIndex(index) < length) {
        let largest = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
  
        if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
          largest = rightChildIndex;
        }
  
        if (this.heap[index] >= this.heap[largest]) {
          break;
        }
        this.swap(index, largest);
        index = largest;
      }
    }
  
    heapSort() {
      const result = [];
      const originalHeap = [...this.heap];
      
      while (this.heap.length > 0) {
        result.push(this.extractMax());
      }

      this.heap = originalHeap;

      return result.reverse();
    }
  }
  
  
  const maxHeap = new MaxHeap();
  const elements = [10, 20, 5, 30, 15];
  elements.forEach(element => maxHeap.insert(element));
  
  console.log("Heap:", maxHeap.heap);
  console.log("Sorted:", maxHeap.heapSort());
  