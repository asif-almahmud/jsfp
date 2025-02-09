function greet(salutation) {
  return function (name) {
    return `${salutation} ${name}`;
  };
}

const salam = greet("Salam");
const hello = greet("Hello");
const howdy = greet("Howdy");

console.log(salam("Muhammad")); // Salam Muhammad
console.log(salam("Ibrahim")); // Salam Ibrahim

console.log(hello("John")); // Hello John
console.log(hello("Jey")); // Hello Jey

console.log(howdy("Jack")); // Howdy Jack
console.log(howdy("Doe")); // Howdy Doe
