import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();

linkedList.append(5);
linkedList.append(6);
linkedList.append(7);
linkedList.pop();
linkedList.pop();

console.log(linkedList.toString());
