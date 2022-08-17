import styled from "styled-components";
import { useState } from "react";

import { Place, RegionVisual } from "../types";

import { GenericButton } from "./UI/GenericButton";

import {
  ImageFrame,
  ImageOfPlace,
  LocationName,
  PlaceName,
} from "./styles/StyledComponents";
import { colors } from "../theme";
import { HeartButton, HeartButtonClicked } from "./UI";
import { ActionType } from "../store";
import { useDispatch } from "react-redux";

type Props = {
  regionVisual: RegionVisual;
  place: Place;
  onClose: () => void;
};

export const LocationModal = ({ place, regionVisual, onClose }: Props) => {
  const [placeFavourite, setPlaceFavourite] = useState(Boolean(false));

  const { placeName, placeImage, location, placeDesc } = place;

  const dispatch = useDispatch();

  const addToFavourites = () => {
    dispatch({
      type: ActionType.ADD_PLACE_TO_FAVOURITE,
      payload: place,
    });
    setPlaceFavourite(true);
    // console.log("place", place);
  };

  const removeFromFavourites = () => {
    dispatch({
      type: ActionType.REMOVE_PLACE_FROM_FAVORITE,
      payload: place,
    });
    setPlaceFavourite(false);
    // console.log("place", place);
  };

  console.log("placefavourite:", placeFavourite);

  return (
    <ModalContainer>
      <MainContainer>
        <ImageFrame $regionDiv={false}>
          <ImageOfPlace
            src={placeImage}
            alt="place image"
            loading="eager"
            $regionDiv={false}
          />
        </ImageFrame>
        <MainTextContainer $regionVisual={regionVisual}>
          <PlaceName $regionVisual={regionVisual}>{placeName}</PlaceName>
          <LocationName $regionVisual={regionVisual}>{location}</LocationName>
          <HeartButtonWrapper>
            <HeartEllipseButton
              onClick={() => {
                addToFavourites();
              }}
            >
              {placeFavourite ? <HeartButtonClicked /> : <HeartButton />}
            </HeartEllipseButton>
          </HeartButtonWrapper>
        </MainTextContainer>
        <Description>{placeDesc}</Description>
        <ButtonWrapper>
          <GenericButton
            regionVisual={regionVisual}
            onClick={onClose}
            text="Close"
          />
        </ButtonWrapper>
      </MainContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
`;

const MainContainer = styled.div`
  position: fixed;
  z-index: 200;
  border-radius: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 630px;
  width: 320px;
  background-color: white;
  overflow: hidden;
`;

const Description = styled.div`
  width: 280px;
  text-align: center;
  margin-bottom: 30px;
  font-size: 12px;
  position: absolute;
  top: 350px;
`;

const MainTextContainer = styled.div<{
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
  width: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  position: absolute;
  bottom: 310px;
  z-index: 120;
  padding: 20px 30px;

  // @media (max-width: 768px) {
  //   top: -110px;
  //   width: 100%;
  // }

  // @media (max-height: 840px) {
  //   top: -50px;
  // }
`;

const HeartButtonWrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 30px;
  cursor: pointer;

  // @media (max-height: 840px) {
  //   top: 70px;
  // }
`;

const HeartEllipseButton = styled.button<{
  $isClicked?: boolean;
  $disabledMode?: boolean;
}>`
  background-color: ${(props) => (props.$isClicked ? "#FA3593" : "#ffd1fd")} ;
  width: 45px;
  height: 45px;
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

const ButtonWrapper = styled.div`
  position: absolute;
  top: 530px;
`;
