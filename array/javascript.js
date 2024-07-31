//Array manipulation with slice()

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-3, -1);
console.log(myBest);

//Implementing a queue with arrays

var queue = [];
queue.push(1);
queue.push(2);
console.log(queue);


//Implmenting a stack arrays

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  const stack = new Stack();

  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); 
  console.log(stack.pop()); 
  console.log(stack.pop()); 
  console.log(stack.isEmpty());


//Array of objects sorting with multiple properties

const users = [
    { firstName: 'John', lastName: 'Doe', age: 30 },
    { firstName: 'Jane', lastName: 'Doe', age: 25 },
    { firstName: 'Alice', lastName: 'Smith', age: 35 },
    { firstName: 'Bob', lastName: 'Smith', age: 28 }
  ];
  
  // Sort by lastName, then by firstName if last names are equal
  users.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    // If last names are equal, compare first names
    return a.firstName.localeCompare(b.firstName);
  });
  
  console.log(users);
  
