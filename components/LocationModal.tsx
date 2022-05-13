import Image from "next/image";
import styled from "styled-components";

import back from "../public/back-icon.svg";

type Props = {
  placeName: string;
  placeImage: string;
  location: string;
  regionVisual: string;
  description: string;
  onClose: () => void;
};

export const LocationModal = ({
  placeImage,
  placeName,
  location,
  description,
  regionVisual,
  onClose,
}: Props) => {
  console.log(placeName);
  return (
    <MainContainer>
      <BackWrapper onClick={onClose}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <ImageFrame>
        <ImageOfPlace src={placeImage} alt="place image" />
      </ImageFrame>
      <Text>
        <div>{placeName}</div>
        <div>{location}</div>
      </Text>
      <div>
        {description}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi
        temporibus sed quod dolor, tenetur magnam distinctio maiores ab odio
        aliquid, enim hic officiis, accusamus sapiente natus in iure quibusdam
        laudantium dolores incidunt deserunt voluptates voluptas. Aliquid
      </div>
      <Back onClick={onClose}>Close</Back>
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
  // justify-content: center;
  flex-direction: column;
  z-index: 98;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const BackWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: fixed;
  z-index: 150;
  top: 10px;
  left: 10px;
  background-color: white;
  width: 55px;
  height: 55px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);
`;

const ImageFrame = styled.div`
  position: relative;
  object-fit: cover;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
  overflow: hidden;
`;

const ImageOfPlace = styled.img`
  object-fit: cover;
`;

const Text = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  color: white;
  z-index: 150;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Back = styled.button`
  position: absolute;
  bottom: 200px;
  z-index: 150;
`;
