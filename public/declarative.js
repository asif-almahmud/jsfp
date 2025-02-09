const numbers = [1, 2, 3, 4, 5];

// imperative way
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// declarative way
const output = (item) => console.log(item);
numbers.forEach(output);

// benefits of declarative programming:
// - more readable
// - less error-prone
// - easier to maintain
// - easier to understand
// - easier to test
// - easier to debug
// - easier to optimize
// - easier to refactor
// - easier to scale
// - easier to collaborate
// - easier to reuse
// - easier to extend
// - easier to compose
// - easier to parallelize
// - easier to distribute
// - easier to secure
// - easier to document
