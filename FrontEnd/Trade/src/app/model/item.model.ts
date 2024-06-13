// Item Interface
export interface Item {
  itemId: number;
  sellerId: number;
  seller: Seller;
  itemName: string;
  description: string;
  price: number;
  category: string;
  condition: string;
  images: string;
  location: string;
}

// Seller Interface
export interface Seller {
  sellerId: number;
  sellerName: string;
  sellerPwd: string;
  sellerEmail: string;
  sellerAddress: string;
  sellerPhone: number;
}

// Order Interface
export interface Order {
  orderId: number;
  itemId: number;
  
  userId: number;
   // Ensure this property is included
  date: Date;
  shippingAddress: string;
  paymentMethod: string;
  status: string;
}

// User Interface
export interface User {
  userId: number;
  username: string;
  email: string;
  password:string;
  phoneNumber: number;
  address: string;
}
