import { Product, Order, PaymentMethod } from "./types";

let product1: Product = {
  id: 1,
  name: "Laptop",
  price: 999,
  inStock: true
};

let product2: Product = {
  id: 2,
  name: "Mouse",
  price: 25,
  inStock: true
};

let payment: PaymentMethod = "credit_card";

let order: Order = {
  orderId: 1001,
  products: [product1, product2],
  total: 1024,
  paymentMethod: payment
};

console.log("Order ID:", order.orderId);
console.log("Products:", order.products.length);
console.log("Total:", order.total);
console.log("Payment:", order.paymentMethod);