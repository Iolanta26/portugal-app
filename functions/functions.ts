import { PLACES, REGIONS } from "../dummy-data";

export const getRegionById = (regionId: string) =>
  REGIONS.find((region) => region.id === regionId);

export const getPlaceById = (placeId: string) =>
  PLACES.find((place) => place.id === placeId);

export const getAllPlaces = PLACES.sort();
