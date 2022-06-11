import styled from "styled-components";
import { useContext, useState } from "react";

import { Place, RegionVisual } from "../types";
import { FavContext } from "../store";

import { HeartButton } from "./HeartButton";
import { GenericButton } from "./GenericButton";

import {
  Description,
  ImageFrame,
  LocationName,
  PlaceName,
} from "./StyledComponents";
import { colors } from "../theme";

type Props = {
  regionVisual: RegionVisual;
  place: Place;
  onClose: () => void;
};

export const LocationModal = ({ place, regionVisual, onClose }: Props) => {
  const [isClicked, setIsClicked] = useState(Boolean(false));
  const [disable, setDisable] = useState(false);

  const placesCtx = useContext(FavContext);

  const { placeName, placeImage, location, placeDesc } = place;

  const addToFavouriteList = () => {
    console.log("favourite: ", place);
    setIsClicked(true);
    setDisable(true);
    const foundId = placesCtx.selectedPlaces.find(
      (placeId: Place) => placeId?.id === place.id
    );
    console.log("foundId", foundId);
    if (foundId) {
      return;
    } else {
      return placesCtx.selectedPlaces?.push(place);
    }
  };

  return (
    <MainContainer>
      <ImageFrame $regionDiv={false}>
        <ImageOfPlace src={placeImage} alt="place image" />
      </ImageFrame>
      <Text $regionVisual={regionVisual}>
        <PlaceName $regionVisual={regionVisual}>{placeName}</PlaceName>
        <LocationName $regionVisual={regionVisual}>{location}</LocationName>
        <HeartButtonWrapper>
          <HeartEllipseButton
            disabled={disable}
            $isClicked={isClicked}
            onClick={() => {
              addToFavouriteList();
            }}
          >
            <HeartButton />
          </HeartEllipseButton>
        </HeartButtonWrapper>
      </Text>
      <Description>{placeDesc}</Description>
      <GenericButton
        regionVisual={regionVisual}
        onClick={onClose}
        text="Close"
      />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 98;
  height: 100%;
  width: 100vw;
  background-color: white;
`;

const ImageOfPlace = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: absolute;
`;

const Text = styled.div<{
  $regionVisual: string;
}>`
  background-color: ${(props) =>
    props.$regionVisual === "north"
      ? `${colors.bluePalette}`
      : props.$regionVisual === "lisbon"
      ? `${colors.darkBluePalette}`
      : props.$regionVisual === "central"
      ? `${colors.greenPalette}`
      : props.$regionVisual === "alentejo"
      ? `${colors.orangePalette}`
      : props.$regionVisual === "algarve"
      ? `${colors.brownPalette}`
      : "transparent"};
  width: 80%;
  height: 120px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
  top: -60px;
  z-index: 120;
  max-width: 1200px;
`;

const HeartButtonWrapper = styled.div`
  position: absolute;
  top: 90px;
  right: 40px;
  cursor: pointer;
`;

const HeartEllipseButton = styled.button<{
  $isClicked?: boolean;
  $disabledMode?: boolean;
}>`
  background-color: ${(props) => (props.$isClicked ? "#FA3593" : "#ffd1fd")} ;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex:
  justify-content: center;
  align-items: center;

  &:hover,
  :focus {
    transform: translateY(1px);
    transition: ease 0.1s;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }
  
`;
