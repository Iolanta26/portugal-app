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
import { colors, theme } from "../theme";
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
  };

  const instagramLink = `https://www.instagram.com/explore/tags/${place.instagram}`;

  console.log(instagramLink);
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
          <SocialBarContainer>
            <InstaLink href={instagramLink} target="_blank">
              <InstaIcon src="./instagram.png" alt="instagram-icon" />
            </InstaLink>
          </SocialBarContainer>
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
  top: 0;
  left: 0;
  right: 0;
`;

const MainContainer = styled.div`
  position: fixed;
  z-index: 200;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 1000px;
  background-color: white;
  overflow: hidden;
`;

const Description = styled.div`
  width: 80vw;
  max-width: 750px;
  text-align: center;
  font-size: 12px;
  position: absolute;
  top: 60vh;
`;

const SocialBarContainer = styled.div`
  top: 80px;
  left: 30px;
  position: absolute;
  background-color: transparent;
  border: 0.3px solid ${theme.colors.beigePallete};
  border-radius: 10px;
  width: 45px;
  height: 45px;
  backdrop-filter: blur(5px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InstaLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InstaIcon = styled.img`
  width: 28px;
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
  width: 80vw;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
  top: 38vh;
  z-index: 120;
  padding: 20px 30px;
`;

const HeartButtonWrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 27px;
  cursor: pointer;
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
  bottom: 5vh;
`;
