class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
    this.peek = undefined;
  }
  push(data) {
    let node = this.head;
    if (this.head === null) {
      this.head = new Node(data);
      this.peek = this.head.val;
      this.length++;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(data);
    this.peek = node.next.val;
    this.length++;
    return;
  }
  pop() {
    let node = this.head;
    if (node === null) {
      return "Stack Empty";
    }
    if (this.length === 1) {
      let poppedVal = this.head.val;
      this.head = null;
      this.length--;
      return poppedVal;
    } else {
      while (node.next) {
        var prevNode = node;
        node = node.next;
      }
      let poppedVal = node.val;
      prevNode.next = null;
      this.peek = prevNode.val;
      this.length--;
      return poppedVal;
    }
  }
  top() {
    return this.peek;
  }
}

let stack = new Stack();
stack.push(4);
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
console.log(stack);
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
