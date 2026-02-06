type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";
type PaymentMethod = "credit_card" | "paypal" | "bank_transfer";

interface Order {
  orderId: number;
  customerName: string;
  total: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
}

let order1: Order = {
  orderId: 1001,
  customerName: "Alice",
  total: 299.99,
  status: "pending",
  paymentMethod: "credit_card"
};

let order2: Order = {
  orderId: 1002,
  customerName: "Bob",
  total: 149.50,
  status: "shipped",
  paymentMethod: "paypal"
};

function displayOrder(order: Order): void {
  console.log(`Order #${order.orderId}`);
  console.log(`Customer: ${order.customerName}`);
  console.log(`Total: $${order.total}`);
  console.log(`Status: ${order.status}`);
  console.log(`Payment: ${order.paymentMethod}`);
  console.log("---");
}

displayOrder(order1);
displayOrder(order2);