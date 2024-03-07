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
      return this;
    }
    let curr = this.root;

    while (true) {
      let next = curr.nextNode;

      if (!next) {
        const newNode = new Node(value);
        curr.nextNode = newNode;
        this.#tail = newNode;
        return this;
      } else {
        curr = next;
      }
    }
  }
  prepend(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }

    const curr = this.root;
    const newNode = new Node(value, curr);
    this.root = newNode;
    return this;
  }

  pop() {
    if (!this.root) {
      return this;
    }
    let curr = this.root;
    let previous;

    while (true) {
      let next = curr.nextNode;

      if (!next) {
        previous.nextNode = null;
        return this;
      }
      previous = curr;
      curr = next;
    }
  }

  at(index) {
    if (index < 0 || index >= this.size) {
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

  find(value){
    if (!this.root) {
      return null;
    }
    let index = 0; 

    let curr = this.root;
    const len = this.size;

    while (index < len) {
      let next = curr.nextNode;
      if (value === curr.value) return index;
      curr = next;
      index++;
    }

    return null;
  }

  contains(value){
    if (this.find(value) === null) return false;
    else return true;
  }

  insertAt(value, index){
    if (index < 0 || index >= this.size) {
      return new RangeError("Index outside range");
    }

    let curr = this.root;
    let previous; 

    while (index) {
      let next = curr.nextNode;
      previous = curr;
      curr = next;
      index--;
    }
    const newNode = new Node(value, curr);
    previous.nextNode = newNode;
    return this;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return new RangeError("Index outside range");
    }

    let curr = this.root;
    let previous; 

    while (index) {
      let next = curr.nextNode;
      previous = curr;
      curr = next;
      index--;
    }
    previous.nextNode = curr.nextNode;
    return this;
  }

  clone(){
    let newList = new LinkedList();

    if (!this.root) return newList;
    
    let curr = this.root;

    while (true) {
      let next = curr.nextNode;
      newList.append(curr.value);

      if (!next) {
        return newList;
      }

      curr = next;
    }
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
