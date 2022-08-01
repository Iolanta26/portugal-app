export type Region = {
  id: string;
  regionName: string;
  regionDesc: string;
  mainImage: string;
  images: {
    firstImage: string;
    secondImage: string;
  };
};

export type Place = {
  id: string;
  region: string;
  location: string;
  visual: string;
  placeName: string;
  placeDesc: string;
  placeImage: string;
};

export type RegionVisual =
  | "north"
  | "central"
  | "lisbon"
  | "alentejo"
  | "algarve";

export type CapitalCity = "Evora" | "Lisbon" | "Porto" | "Faro" | "Coimbra";
