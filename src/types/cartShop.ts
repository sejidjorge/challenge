export interface CartProducts {
  products: ProductsCartProps[];
}

export interface ProductsCartProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
}
