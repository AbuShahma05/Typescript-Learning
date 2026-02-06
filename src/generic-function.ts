function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

let numbers = [10, 20, 30];
let strings = ["apple", "banana", "cherry"];
let booleans = [true, false, true];

let firstNumber = getFirstItem(numbers);
let firstString = getFirstItem(strings);
let firstBoolean = getFirstItem(booleans);

console.log("First number:", firstNumber);
console.log("First string:", firstString);
console.log("First boolean:", firstBoolean);