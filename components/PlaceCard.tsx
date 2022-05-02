import styled from "styled-components";
import { RegionVisual } from "../types";

type Props = {
  placeName: string;
  placeImage: string;
  location: string;
  regionVisual: string;
  onClick: () => void;
};

export const PlaceCard = ({
  placeImage,
  placeName,
  location,
  regionVisual,
  onClick,
}: Props) => {
  return (
    <Card onClick={onClick}>
      <PlaceImage src={placeImage} alt="place image" />
      <Gradient $regionVisual={regionVisual}>
        <ShortDesc>
          <Name>{placeName}</Name>
          <Location>Location: {location}</Location>
        </ShortDesc>
      </Gradient>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff5e8;
  width: 270px;
  height: 150px;
  overflow: hidden;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 0;
`;

const ShortDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  width: 135px;
`;

const Name = styled.div`
  font-size: 16px;
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

const Gradient = styled.div<{
  $regionVisual: string;
}>`
  display: flex;
  position: absolute;
  width: 135px;
  height: 150px;
  bottom: 0;
  left: 0;
  border-radius: 15px;
  background: linear-gradient(
    ${(props) =>
      props.$regionVisual === "alentejo"
        ? "0deg,#fcb743 14.13%,rgba(252, 183, 67, 0.86) 64.67%,rgba(252, 183, 67, 0) 100%"
        : props.$regionVisual === "lisabon"
        ? "0deg, #2E70B2 14.13%, rgba(46, 112, 178, 0.86) 58.69%, rgba(46, 112, 178, 0) 100%"
        : props.$regionVisual === "central"
        ? "0deg, #2DBE5A 14.13%, rgba(45, 190, 90, 0.86) 64.67%, rgba(45, 190, 90, 0) 100%"
        : props.$regionVisual === "algarve"
        ? "0deg, #B07420 14.13%, rgba(176, 116, 32, 0.86) 64.67%, rgba(176, 116, 32, 0) 100%"
        : props.$regionVisual === "north"
        ? "0deg, #248CF9 14.13%, rgba(36, 140, 249, 0.86) 64.67%, rgba(36, 140, 249, 0) 100%"
        : "transparent"}
  );
`;

const PlaceImage = styled.img`
  width: 300px;
  height: 150px;
  object-fit: cover;
  position: absolute;
`;
