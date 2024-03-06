import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();

linkedList.append(5);
linkedList.append(6);
linkedList.append(7);
linkedList.prepend(4);

console.log(linkedList.toString())
console.log(linkedList.insertAt(5.5, 2).toString());

