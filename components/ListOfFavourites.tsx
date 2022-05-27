import React from "react";
import styled from "styled-components";
import { PLACES } from "../dummy-data";
import { RegionVisual } from "../types";
import { PlaceCard } from "./PlaceCard";

type Props = {
  placeName: string;
  placeImage: string;
  location: string;
  placeDesc: string;
  regionVisual: RegionVisual;
};

export const ListOfFavourites = ({
  placeName,
  placeDesc,
  placeImage,
  location,
  regionVisual,
}: Props) => {
  const favouritePlaces = PLACES.filter(
    (place) => place.placeName === placeName
  );

  return (
    <div>
      ListOfFavourites
      {favouritePlaces.map((place) => (
        <CardsContainer key={place.id}>
          <PlaceCard
            placeName={placeName}
            placeImage={placeImage}
            location={location}
            placeDesc={placeDesc}
            regionVisual={regionVisual}
          />
        </CardsContainer>
      ))}
    </div>
  );
};

const CardsContainer = styled.div`
  display: flex;
`;
