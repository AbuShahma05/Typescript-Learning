"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let product1 = {
  id: 1,
  name: "Laptop",
  price: 999,
  inStock: true,
};
let product2 = {
  id: 2,
  name: "Mouse",
  price: 25,
  inStock: true,
};
let payment = "credit_card";
let order = {
  orderId: 1001,
  products: [product1, product2],
  total: 1024,
  paymentMethod: payment,
};
console.log("Order ID:", order.orderId);
console.log("Products:", order.products.length);
console.log("Total:", order.total);
console.log("Payment:", order.paymentMethod);
