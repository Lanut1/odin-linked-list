import LinkedList from "./LinkedList.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("turtle");

console.log(list.toString());
console.log(list.at(3));
console.log(list.contains("cat"));
console.log(list.contains("HI"));
console.log(list.find("dog"));

list.insertAt("snail", 1);
list.removeAt(2);
list.pop();

console.log(list.toString());
