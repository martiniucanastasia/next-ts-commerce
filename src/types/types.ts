export type Product = {
  id: number;
  name: string;
  category: string;
  rating: number;
  price: number;
  seller: string;
  brand: string;
  condition: string;
  verified: boolean;
  image: string;
};

export type Category = {
  categories: [
    {
      value: number;
      label: string;
    }
  ];
};
