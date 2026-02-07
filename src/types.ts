export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

export type PaymentMethod = "credit_card" | "paypal" | "cash";

export interface Order {
  orderId: number;
  products: Product[];
  total: number;
  paymentMethod: PaymentMethod;
}
