class Node {
  constructor(val, min, next = null) {
    this.val = val;
    this.next = next;
    this.min = min;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.peek = undefined;
  }
  push(data) {
    let node = this.head;
    if (this.head === null) {
      this.head = new Node(data, data);
      this.tail = this.head;
      this.peek = this.head.val;
      this.length++;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(data);
    this.tail = node.next;
    node.next.min = Math.min(node.min, node.next.val);
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
      this.tail = null;
      this.length--;
      return poppedVal;
    } else {
      while (node.next) {
        var prevNode = node;
        node = node.next;
      }
      this.tail = prevNode;
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
  min() {
    return this.tail.min;
  }
  print() {
    let node = this.head;
    if (this.head === null) {
      return [];
    }
    let arr = [node.val];
    while (node.next) {
      node = node.next;
      arr.push[node.val];
    }
    return arr;
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
stack.push(1);
stack.push(9);
stack.push(2);
console.log(stack);
console.log(stack.print(), "jj");
console.log("Min is :" + stack.min());
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
console.log("Min is :" + stack.min());
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
console.log("Min is :" + stack.min());
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
console.log("Min is :" + stack.min());
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
console.log("Min is :" + stack.min());
console.log("New Top is : " + stack.top());
console.log("Popped element is :" + stack.pop());
