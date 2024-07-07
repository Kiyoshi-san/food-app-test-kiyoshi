type TProduct = {
  id: number;
  name: string;
  price: number;
  additionalOptionName: string;
  additionalOptionPrice: number;
  quantity: number;
  total: number;
};

export type TCart = {
  products: TProduct[];
  total: number;
};
