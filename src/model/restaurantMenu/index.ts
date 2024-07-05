type TImage = {
  id: number;
  image: string;
};

export type TItem = {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  images: TImage[];
  available: boolean;
};

export type TSection = {
  id: number;
  name: string;
  description: null;
  position: number;
  visible: number;
  images: TImage[];
  items: TItem[];
  price?: number;
};

export type TStore = {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: TSection[];
};
