let userInput: unknown = "Hello, TypeScript!";

// TypeScript doesn't know what type userInput is
// We can tell TypeScript we know it's a string

let strLength: number = (userInput as string).length;
console.log("String length:", strLength);

// Alternative syntax (same thing)
let strUpper: string = (<string>userInput).toUpperCase();
console.log("Uppercase:", strUpper);

// Real-world example: working with DOM
function getElementValue(id: string): string {
  let element = document.getElementById(id);
  
  // TypeScript knows element might be null
  // And doesn't know it's an input element
  
  if (element) {
    return (element as HTMLInputElement).value;
  }
  
  return "";
}

// Note: This won't run in Node.js (no DOM)
// Just showing the pattern
console.log("Type assertions demonstrated");