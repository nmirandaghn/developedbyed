// Function declaration
console.log("Function declaration");
function sayHello(name) {
  console.log(`Hello ${name}`);
}

const sayHello2 = (name) => {
  console.log(`Hello ${name}`);
}

const sayHello3 = (name) => {
  return `Hello ${name}`;
}

sayHello('Nelson');
sayHello2('Nelson');
console.log(sayHello3('Nelson'));

// Deconstruct
console.log("Deconstruct");
const user = {
  name: "Nelson",
  lastName: "Miranda",
  age: 45
};

console.log(user.name);
console.log(user.lastName);
console.log(user.age);

const numbers = [1, 2, 3, 4, 5];
const [yolo, lol] = numbers;

console.log(yolo);
console.log(lol);

// Map and filter
console.log("Map and filter");
const users = [
  { name: "Suni", age: 5 },
  { name: "Nelson", age: 10 },
  { name: "Mauricio", age: 5 }
];

const modifiedUsers = users.map(x => `${x.name} + ${x.age}`)
console.log(modifiedUsers);

const filteredUsers = users.filter(x => x.age < 10);
console.log(filteredUsers);