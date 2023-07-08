class MaxHeap {
  constructor() {
    this.heap = [];
  }
  leftIndex(index) {
    return 2 * index + 1;
  }
  rightIndex(index) {
    return 2 * index + 2;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  insert(data) {
    this.heap.push(data);
    let curr = this.heap.length - 1;
    while (curr > 0) {
      let parent = this.parentIndex(curr);
      if (this.heap[parent] < this.heap[curr]) {
        this.swap(parent, curr);
        curr = parent;
      } else {
        break;
      }
    }
  }
  delete() {
    if (this.heap.length === 0) {
      return "Heap Empty";
    }
    let removedEl = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    let curr = 0;
    while (this.heap[this.leftIndex(curr)]) {
      let left = this.leftIndex(curr);
      let right = this.rightIndex(curr);
      let max = left;
      if (this.heap[right] && this.heap[right] > this.heap[left]) {
        max = right;
      }
      if (this.heap[curr] < this.heap[max]) {
        this.swap(curr, max);
        curr = max;
      } else {
        return removedEl;
        break;
      }
    }
    return removedEl;
  }
}

let max_heap = new MaxHeap();
max_heap.insert(10);
max_heap.insert(20);
max_heap.insert(15);
max_heap.insert(30);
max_heap.insert(40);
max_heap.insert(70);
max_heap.insert(22);
max_heap.insert(56);
// max_heap.insert(93);

console.log(max_heap.heap); // [ 70, 30, 40, 10, 20, 15 ]
max_heap.delete();
console.log(max_heap.heap); // [ 40, 30, 15, 10, 20 ]
max_heap.delete();
console.log(max_heap.heap); // [30 , 20 , 15 , 10]
max_heap.delete();
console.log(max_heap.heap); // [20 , 10 , 15]
max_heap.delete();
console.log(max_heap.heap); // [15 , 10]
// console.log(a.heap);

let a = [78, 98, 112, 21, 43, 56, 12, 98, 65, 56, 45];

function HeapSortDes(arr) {
  let sorted = [];
  let heap = new MaxHeap();
  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }
  while (heap.heap[0]) {
    sorted.push(heap.delete());
  }
  return sorted;
}

console.log(HeapSortDes(a));
