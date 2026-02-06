interface CartItem {
  product: string;
  price: number;
  quantity: number;
}

let cart: CartItem[] = [
  { product: "Laptop", price: 999, quantity: 1 },
  { product: "Mouse", price: 25, quantity: 2 },
  { product: "Keyboard", price: 75, quantity: 1 }
];

function calculateTotal(items: CartItem[]): number {
  let total = 0;
  
  for (let item of items) {
    total += item.price * item.quantity;
  }
  
  return total;
}

console.log("Shopping Cart:");
console.log("--------------");

for (let item of cart) {
  let itemTotal = item.price * item.quantity;
  console.log(`${item.product} x${item.quantity}: $${itemTotal}`);
}

console.log("--------------");
console.log("Total: $" + calculateTotal(cart));