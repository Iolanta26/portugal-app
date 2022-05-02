import Image from "next/image";
import { NextRouter, withRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { LocationModal } from "../components/LocationModal";
import { PlaceCard } from "../components/PlaceCard";

import { PLACES } from "../dummy-data/places";
import { getPlaceById, getRegionById } from "../functions/functions";

import back from "../public/back-icon.svg";
import { Place, RegionVisual } from "../types";

type Props = {
  router: NextRouter;
  place: Place;
};

const ListOfPlaces = ({ router, place }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const { regionId, regionVisual } = router.query;

  // const place = getPlaceById(placeId as string);

  // const { placeDesc, placeName, placeImage, location } = place;

  // console.log("regionVisual", regionVisual);

  const placesAccordingToRegion = PLACES.filter(
    (place) => place.region === regionId
  );
  console.log(placesAccordingToRegion);

  const getRegionName = getRegionById(regionId as string)?.regionName;

  return (
    <>
      <div>
        <BackWrapper onClick={() => router.back()}>
          <Image src={back} alt="back" />
        </BackWrapper>
        <div>Places to visit in {getRegionName}</div>
        <MainListContainer>
          {placesAccordingToRegion.map((place) => (
            <CardsContainer key={place.id}>
              <PlaceCard
                placeName={place.placeName}
                placeImage={place.placeImage}
                location={place.location}
                regionVisual={regionVisual as string}
                onClick={() => setOpenModal(true)}
              />
            </CardsContainer>
          ))}
          {openModal && (
            <LocationModal
              // placeName={placeName}
              // placeImage={placeImage}
              // location={location}
              // description={placeDesc}
              // regionVisual={regionVisual as string}
              onClose={() => setOpenModal(false)}
            />
          )}
          2
        </MainListContainer>
      </div>
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
