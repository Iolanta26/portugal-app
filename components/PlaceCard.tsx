import { useState } from "react";
import styled from "styled-components";
import { RegionVisual } from "../types";
import { LocationModal } from "./LocationModal";

type Props = {
  placeName: string;
  placeImage: string;
  location: string;
  placeDesc: string;
  regionVisual: RegionVisual;
};

export const PlaceCard = ({
  placeImage,
  placeName,
  location,
  placeDesc,
  regionVisual,
}: Props) => {
  const [openModal, setOpenModal] = useState(false);

  console.log("regionalVisual", regionVisual);
  return (
    <>
      {!openModal && (
        <Card $regionVisual={regionVisual} onClick={() => setOpenModal(true)}>
          <PlaceImage src={placeImage} alt="place image" />
          <ShortDesc>
            <Name>{placeName}</Name>
            <Location>Location: {location}</Location>
          </ShortDesc>
        </Card>
      )}
      {openModal && (
        <LocationModal
          placeName={placeName}
          placeImage={placeImage}
          location={location}
          description={placeDesc}
          regionVisual={regionVisual as string}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

const Card = styled.div<{
  $regionVisual: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 170px;
  overflow: hidden;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.$regionVisual === "north"
      ? "#248cf9"
      : props.$regionVisual === "lisabon"
      ? "#2E70B2"
      : props.$regionVisual === "central"
      ? "#2DBE5A"
      : props.$regionVisual === "alentejo"
      ? "#FCB743"
      : props.$regionVisual === "algarve"
      ? "#B07420"
      : "transparent"};
`;

const ShortDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  width: 135px;
  position: absolute;
  right: 5px;
  color: #fff3e0;
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

const PlaceImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  position: absolute;
  border-radius: 15px;
  left: 10px;
`;
