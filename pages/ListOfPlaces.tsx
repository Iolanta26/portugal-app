import Image from "next/image";
import { NextRouter, withRouter } from "next/router";
import styled from "styled-components";
import { PlaceCard } from "../components/PlaceCard";

import { PLACES } from "../dummy-data/places";
import { getRegionById } from "../functions/functions";

import back from "../public/back-icon.svg";
import { Place } from "../types";

type Props = {
  regionId: string;
  placeId: string;
  region: string;
  router: NextRouter;
  place: Place[];
};

const ListOfPlaces = ({ router, placeId }: Props) => {
  const { regionId } = router.query;
  console.log(regionId);

  const PlacesAccordingToRegion = PLACES.filter(
    (place) => place.region === regionId
  );

  const getRegionName = getRegionById(regionId as string)?.regionName;

  return (
    <>
      <BackWrapper onClick={() => router.back()}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <div>Places to visit in {getRegionName}</div>
      <MainListContainer>
        {PlacesAccordingToRegion.map((place) => (
          <CardsContainer key={place.id}>
            <PlaceCard
              placeName={place.placeName}
              placeImage={place.placeImage}
              location={place.location}
            />
          </CardsContainer>
        ))}
      </MainListContainer>
    </>
  );
};

export default withRouter(ListOfPlaces);

const BackWrapper = styled.div`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
`;

const MainListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 350px;
  margin-top: 40px;
`;

const CardsContainer = styled.div`
  display: flex;
`;
