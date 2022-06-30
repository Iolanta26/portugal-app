import styled, { css } from "styled-components";
import { useState } from "react";

import { LocationModal } from "./LocationModal";
import { opacityAnimation } from "./KeyFrames";

import { colors } from "../theme";
import { Place, RegionVisual } from "../types";

type CardStyle = "full" | "image_only";

type Props = {
  regionVisual: RegionVisual;
  place: Place;
  style?: CardStyle;
};

export const PlaceCard = ({ regionVisual, place, style = "full" }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const { placeName, placeImage, location } = place;

  return (
    <>
      <Card
        $regionVisual={regionVisual}
        onClick={() => setOpenModal(true)}
        $style={style}
      >
        <PlaceImage
          src={placeImage}
          alt="place image"
          loading="eager"
          $style={style}
        />
        <ShortDesc $regionVisual={regionVisual} $style={style}>
          <Name>{placeName}</Name>
          <Location>Location: {location}</Location>
        </ShortDesc>
      </Card>

      {openModal && (
        <LocationModal
          place={place}
          regionVisual={regionVisual}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

const Card = styled.div<{
  $regionVisual: string;
  $style: CardStyle;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 250px;
  height: 150px;
  overflow: hidden;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  animation: ${opacityAnimation} 1s ease;
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
  &:hover,
  :focus {
    transform: translateY(2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  ${({ $style }) =>
    $style === "image_only" &&
    css`
      width: 130px;
      height: 130px;
    `}
`;

const ShortDesc = styled.div<{
  $regionVisual: string;
  $style: CardStyle;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  width: 100px;
  position: absolute;
  right: 5px;
  color: ${(props) =>
    props.$regionVisual === "alentejo"
      ? `${colors.darkTextColor}`
      : `${colors.lightTextColor}`};

  ${({ $style }) =>
    $style === "image_only" &&
    css`
      width: 115px;
      background-color: rgba(245, 245, 245, 0.6);
      right: 10px;
      left: 7.5px;
      height: 80px;
      color: ${colors.darkTextColor};
    `}
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Location = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

const PlaceImage = styled.img<{
  $style: CardStyle;
}>`
  width: 130px;
  height: 130px;
  object-fit: cover;
  position: absolute;
  border-radius: 15px;
  left: 10px;

  ${({ $style }) =>
    $style === "image_only" &&
    css`
      left: 7.5px;
      width: 115px;
      height: 115px;
    `}
`;
