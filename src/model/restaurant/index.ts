export type TWebSettings = {
  id: number;
  venueId: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
};

export type TRestaurant = {
  id: number;
  name: string;
  internalName: string;
  description: string;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: TWebSettings;
  ccy: string;
  ccySymbol: string;
  currency: string;
};
