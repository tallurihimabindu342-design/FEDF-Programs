export {};

function identity<T>(value: T): T {
  return value;
}

const numberResult = identity(10);
const stringResult = identity("Hello");

console.log(numberResult);
console.log(stringResult);