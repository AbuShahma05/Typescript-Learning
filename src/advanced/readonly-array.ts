export function printNumbers(numbers: readonly number[]): void {
  console.log("Numbers:", numbers);

  // numbers.push(4);    //  not allowed
  // numbers[0] = 999;   //  not allowed
}

export const names: ReadonlyArray<string> = ["Alice", "Bob", "Charlie"];
