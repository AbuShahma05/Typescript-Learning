"use strict";
let order1 = {
  orderId: 1001,
  customerName: "Alice",
  total: 299.99,
  status: "pending",
  paymentMethod: "credit_card",
};
let order2 = {
  orderId: 1002,
  customerName: "Bob",
  total: 149.5,
  status: "shipped",
  paymentMethod: "paypal",
};
function displayOrder(order) {
  console.log(`Order #${order.orderId}`);
  console.log(`Customer: ${order.customerName}`);
  console.log(`Total: $${order.total}`);
  console.log(`Status: ${order.status}`);
  console.log(`Payment: ${order.paymentMethod}`);
  console.log("---");
}
displayOrder(order1);
displayOrder(order2);
