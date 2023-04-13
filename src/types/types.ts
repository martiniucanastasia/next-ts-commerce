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

export type currentOffer = {
  id: number;
  value: string;
};

export type Categories = {
  value: number;
  label: string;
}[];

export type Shippings = {
  value: number;
  label: string;
  icon: any;
}[];

export type Languages = {
  value: string;
  label: string;
  icon: any;
}[];

export type HeaderLinks = {
  value: string;
  label: string;
  icon: any;
}[];

export type BurgerContents = {
  general: {
    value: string;
    label: string;
    icon?: any;
  }[];

  additional: {
    value: string;
    label: string;
    icon?: any;
  }[];

  info: {
    value: string;
    label: string;
  }[];
};

export type BannersInfo = {
  id: number;
  name: string;
  image: string;
  category: string;
}[];
export type Suppliers = {
  value: string;
  label: string;
  site: string;
  icon: any;
}[];
