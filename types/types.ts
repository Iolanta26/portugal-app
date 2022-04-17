export type Region = {
  id: string;
  regionName: string;
  regionDesc: string;
  mainImage: string;
  images: string[];
};

export type Place = {
  id: string;
  region: string;
  location: string;
  placeName: string;
  placeDesc: string;
  placeImage: string;
  otherImages: string[];
};

export type RegionVisual =
  | "north"
  | "central"
  | "lisabon"
  | "alentejo"
  | "algarve";
