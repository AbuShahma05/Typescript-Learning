export enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

export enum LogLevel {
  Info = "INFO",
  Warning = "WARNING",
  Error = "ERROR",
  Debug = "DEBUG"
}

function processOrder(status: OrderStatus): void {
  console.log(`Order status: ${status}`);
}

function log(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

processOrder(OrderStatus.Pending);
processOrder(OrderStatus.Shipped);

log(LogLevel.Info, "Application started");
log(LogLevel.Error, "Something went wrong");