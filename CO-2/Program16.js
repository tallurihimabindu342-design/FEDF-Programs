export {};

function handleValue(
  value: string | number
): number {

  if (typeof value === "string") {
    return value.length;
  } else {
    return value + 10;
  }
}

console.log(handleValue("TypeScript"));
console.log(handleValue(20));