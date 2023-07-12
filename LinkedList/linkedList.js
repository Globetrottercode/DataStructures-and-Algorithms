class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertAtEnd(data) {
    let node = this.head;
    if (node === null) {
      this.head = new Node(data);
      this.tail = this.head;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(data);
    this.tail = node.next;
    return;
  }
  removeFromEnd() {
    let node = this.head;
    if (node === null) {
      return "null";
    }
    if (!node.next) {
      let removeNode = node.data;
      this.head = null;
      this.tail = null;
      return removeNode;
    } else {
      let prevNode;
      while (node.next) {
        prevNode = node;
        node = node.next;
      }
      let removeNode = node.data;
      prevNode.next = null;
      this.tail = prevNode;
      return removeNode;
    }
  }
  insertAtStart(data) {
    let node = this.head;
    if (node === null) {
      this.head = new Node(data);
      this.tail = this.head;
      return;
    }
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return;
  }
  removeFromStart() {
    let node = this.head;
    if (node === null) {
      return null;
    }
    if (!node.next) {
      let removeNode = node.data;
      this.head = null;
      this.tail = null;
      return removeNode;
    } else {
      let temp = node.data;
      this.head = node.next;
      return temp;
    }
  }
  findEnd() {
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }
  partitionLast(start, end) {
    if (start == end || start == null || end == null) return start;
    let prev_Node = start;
    let curr = start;
    let pivot = end.data;
    // Iterate till pen-ultimate node, since the last node is the PIVOT
    while (start != end) {
      if (start.data < pivot) {
        prev_Node = curr;
        let temp = curr.data;
        curr.data = start.data;
        start.data = temp;
        curr = curr.next;
      }
      start = start.next;
    }
    let temp = curr.data;
    curr.data = end.data;
    end.data = temp;
    return prev_Node;
  }

  Quicksort(start = this.head, end) {
    if (!end) end = this.findEnd();
    if (start == null || start == end || start == end.next) return;
    let prev_Node = this.partitionLast(start, end);
    this.sort(start, prev_Node);

    // if prev_node at start
    if (prev_Node !== null && prev_Node === start) {
      this.sort(prev_Node.next, end);
    }
    // if prev_node in middle
    else if (prev_Node !== null && prev_Node.next !== null) {
      this.sort(prev_Node.next.next, end);
    }
  }
  printList() {
    let node = this.head;
    let result = [this.head.data];
    while (node.next !== null) {
      node = node.next;
      result.push(node.data);
    }
    console.log(result);
    return result;
  }
}

let link = new LinkedList();

link.insertAtEnd(4);
link.insertAtEnd(5);
link.insertAtEnd(6);

link.insertAtEnd(7);
link.insertAtEnd(8);
link.insertAtEnd(9);
link.insertAtEnd(10);
link.insertAtStart(3);
link.insertAtStart(2);
link.insertAtStart(12);
link.printList();
link.sort();
link.printList();
console.log(link.findEnd(), "The end");
console.log(link.removeFromEnd()); // 10
console.log(link.removeFromEnd()); // 9
console.log(link.tail); // 8
console.log(link.removeFromEnd()); // 8
console.log(link.tail); // 7
console.log(link.removeFromEnd()); // 7
console.log(link.removeFromStart()); // 2
console.log(link.removeFromStart()); // 3
console.log(link.removeFromStart()); // 4
console.log(link.removeFromStart()); // 5
