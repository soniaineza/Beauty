export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
  badge?: 'New' | 'Best Seller';
}

export type ProductCategory =
  | 'Skincare'
  | 'Makeup'
  | 'Haircare'
  | 'Body Care'
  | 'Beauty Accessories'
  | 'Fragrance';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CategoryCard {
  name: ProductCategory;
  image: string;
  description: string;
}
