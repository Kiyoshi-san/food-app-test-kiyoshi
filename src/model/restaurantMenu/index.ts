type TImage = {
  id: number;
  image: string;
};

type TModifierItem = {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: true;
};

type TModifier = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: TModifierItem[];
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
  modifiers: TModifier[];
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
