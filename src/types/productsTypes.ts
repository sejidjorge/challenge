export interface DataProps {
    products: ProductProps[];
    count:    number;
}

export interface ProductProps {
    id:          number;
    name:        string;
    brand:       string;
    description: string;
    photo:       string;
    price:       number;
    createdAt?:   Date;
    updatedAt?:   Date;
}
