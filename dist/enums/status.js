"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
  OrderStatus["Pending"] = "PENDING";
  OrderStatus["Processing"] = "PROCESSING";
  OrderStatus["Shipped"] = "SHIPPED";
  OrderStatus["Delivered"] = "DELIVERED";
  OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var LogLevel;
(function (LogLevel) {
  LogLevel["Info"] = "INFO";
  LogLevel["Warning"] = "WARNING";
  LogLevel["Error"] = "ERROR";
  LogLevel["Debug"] = "DEBUG";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
function processOrder(status) {
  console.log(`Order status: ${status}`);
}
function log(level, message) {
  console.log(`[${level}] ${message}`);
}
processOrder(OrderStatus.Pending);
processOrder(OrderStatus.Shipped);
log(LogLevel.Info, "Application started");
log(LogLevel.Error, "Something went wrong");
