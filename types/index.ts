export interface Product {
  _id: string;

  name: string;

  // unique?: string;

  price: number;

  oldPrice?: number;

  image: string;

  category: string;

  rating?: number;

  sold?: string;

  delay?: number;

  description?: string;

  stock?: number;

  featured?: boolean;

  brand?: string;

  flashSale?: boolean;

  createdAt?: string;

  updatedAt?: string;
}