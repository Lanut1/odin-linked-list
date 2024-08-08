import Node from "./Node.mjs";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }

    this.tail = newNode;
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  at(index) {
    if (index > this.size - 1 || index < 0) return;

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.nextNode;
      counter++;
    }

    return currentNode;
  }

  pop() {
    if (this.tail === null) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode !== this.tail) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = null;
      this.tail = currentNode;
    }

    this.size--;
  }

  contains(value) {
    if (this.head === null) return false;

    let currentNode = this.head;

    while (currentNode.value !== value) {
      if (currentNode.nextNode === null) return false;
  
      currentNode = currentNode.nextNode;
    }

    return true;
  }

  find(value) {
    if (this.head === null) return null;

    let currentNode = this.head;
    let counter = 0;

    while (currentNode.value !== value) {
      if (currentNode.nextNode === null) return null;
  
      currentNode = currentNode.nextNode;
      counter++;
    }

    return counter;
  }

  toString() {
    if (this.size === 0) return null;

    let string = "";
    let currentNode = this.head;

    do {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    } while (currentNode !== null);

    string += "null";
    return string;
  }

  insertAt(value, index) {
    if ( index < 0) return;
    if (index > this.size - 1) this.append(value);

    const newNode = new Node(value);
    let counter = 0;
    let currentNode = this.head;
    let previousNode = null;
    
    while (counter !== index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      counter++;
    }

    if (currentNode === this.head) {
      newNode.nextNode = this.head;
      this.head = newNode;
    } else {
      newNode.nextNode = currentNode;
      previousNode.nextNode = newNode;
    }

    this.size++;
  }

  removeAt(index) {
    if (index > this.size - 1 || index < 0) return;

    let currentNode = this.head;
    let previousNode = null;
    let counter = 0;

    while (counter !== index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      counter++;
    }

    if (index === 0) {
      this.head = currentNode.nextNode;
      if (this.size === 1) {
        this.tail = null;
      }
    } else {
      previousNode.nextNode = currentNode.nextNode;
      if (index === this.size - 1) {
        this.tail = previousNode;
      }
    }

    currentNode.nextNode = null;
    this.size--;
  }
}