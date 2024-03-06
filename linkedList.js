import Node from "./node.js";

export default class LinkedList {
  constructor(root = null) {
    this.root = root;
  }
  #tail;

  get size() {
    if (!this.root) {
      return 0;
    }

    let count = 1;
    let curr = this.root;

    while (true) {
      let next = curr.nextNode;

      if (!next) {
        return count;
      }

      curr = next;
      count++;
    }
  }

  get head() {
    return this.root.value;
  }

  get tail() {
    return this.#tail.value;
  }

  append(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let curr = this.root;

    while (true) {
      let next = curr.nextNode;

      if (!next) {
        const newNode = new Node(value);
        curr.nextNode = newNode;
        this.#tail = newNode;
        return;
      } else {
        curr = next;
      }
    }
  }

  pop() {
    if (!this.root) {
      return;
    }
    let curr = this.root;
    let previous;

    while (true) {
      let next = curr.nextNode;

      if (!next) {
        previous.nextNode = null;
        return;
      }
      previous = curr;
      curr = next;
    }
  }

  at(index) {
    if (index >= this.size) {
      return new RangeError("Index outside range");
    }

    let curr = this.root;

    while (index) {
      let next = curr.nextNode;
      curr = next;
      index--;
    }

    return curr.value;
  }

  toString() {
    let res = "";

    if (!this.root) {
      return null;
    }

    let curr = this.root;

    while (true) {
      res += `( ${curr.value} ) -> `;

      let next = curr.nextNode;

      if (!next) {
        res += "null";
        return res;
      }

      curr = next;
    }
  }
}
