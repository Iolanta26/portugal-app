import styled, { keyframes } from "styled-components";
import { NextRouter, withRouter } from "next/router";
import back from "../public/back-icon.svg";
import Image from "next/image";
import { getRegionById } from "../functions/functions";
import { useEffect, useState } from "react";
import { RegionVisual } from "../types";
import {
  BackWrapper,
  ImageFrame,
  ImageOfPlace,
} from "../components/StyledComponents";
import { colors } from "../theme";
import { opacityAnimation, tramMove } from "../components";

type Props = {
  router: NextRouter;
};

const Region = ({ router }: Props) => {
  const [regionVisual, setRegionVisual] = useState<RegionVisual>("north");
  const { regionId } = router.query;

  const region = getRegionById(regionId as string);

  useEffect(() => {
    switch (region?.regionName) {
      case "North":
        region.regionName === "North";
        setRegionVisual("north");
        break;
      case "Greater Lisbon":
        region.regionName === "Greater Lisbon";
        setRegionVisual("lisbon");
        break;
      case "Central Portugal":
        region.regionName === "Central Portugal";
        setRegionVisual("central");
        break;
      case "Alentejo":
        region.regionName === "Alentejo";
        setRegionVisual("alentejo");
        break;
      case "Algarve":
        region.regionName === "Algarve";
        setRegionVisual("algarve");
        break;
    }
  }, [regionVisual]);

  return (
    <MainDiv $regionVisual={regionVisual}>
      <ImageFrame $regionDiv={true}>
        <BackWrapper
          onClick={() => router.push({ pathname: "./ChooseRegion" })}
        >
          <Image src={back} alt="back" />
        </BackWrapper>
        <CarouselDiv>
          <ImageOfPlace
            $regionDiv={true}
            src={region?.mainImage}
            alt="region"
          />

          <OtherImage src={region?.images.firstImage} alt="" />
          <OtherImage src={region?.images.secondImage} alt="" />
          <OtherImage src={region?.images.thirdImage} alt="" />
        </CarouselDiv>
      </ImageFrame>
      <DescriptionWrapper $regionVisual={regionVisual}>
        {regionVisual === "lisbon" && <ImageTram src="./tram.svg" alt="tram" />}
        {regionVisual === "algarve" && (
          <ImageBeach src="./beach.svg" alt="tram" />
        )}
        <DescriptionContainer>
          <RegionName $regionVisual={regionVisual}>
            {region?.regionName}
          </RegionName>
          <DescriptionText $regionVisual={regionVisual}>
            {region?.regionDesc}
          </DescriptionText>
        </DescriptionContainer>
        <ButtonWrapper>
          <ExploreBtn
            $regionVisual={regionVisual}
            onClick={() =>
              router.push({
                pathname: "./ListOfPlaces",
                query: { regionId, regionVisual },
              })
            }
          >
            Explore more
          </ExploreBtn>
        </ButtonWrapper>
      </DescriptionWrapper>
    </MainDiv>
  );
};

export default withRouter(Region);

const MainDiv = styled.div<{
  $regionVisual: string;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  position: relative;
  background-color: white;
`;

const DescriptionWrapper = styled.div<{
  $regionVisual: string;
}>`
  position: absolute;
  top: 450px;
  max-width: 1200px;
  height: 100%;
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
  border-radius: 30px;
  z-index: 20;
`;

const DescriptionText = styled.div<{
  $regionVisual: string;
}>`
  color: ${(props) =>
    props.$regionVisual === "north"
      ? `${colors.lightTextColor}`
      : props.$regionVisual === "lisbon"
      ? `${colors.lightTextColor}`
      : props.$regionVisual === "central"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "alentejo"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "algarve"
      ? `${colors.lightTextColor}`
      : "transparent"};
`;

const CarouselDiv = styled.div`
  white-space: nowrap;
  overflow: scroll;
  overflow-y: hidden;
`;

const ImageTram = styled.img`
  width: 70px;
  animation: ${tramMove} ease-in-out 3s;
  animation-fill-mode: forwards;
  position: absolute;
  top: 0px;
  left: 350px;
  z-index: 15;
`;

// const beachMove = keyframes`
// 0% {
//   transform: rotate(3deg);

// }
// 50% {
//   transform: rotate(0deg);

// }
// 100% {
//   transform: rotate(3deg);

// }

// `;

const ImageBeach = styled.img`
  width: 100px;
  animation: ease-in-out 2s infinite;
  position: absolute;
  top: -20px;
  right: 10px;
  transform: scaleX(-1);
`;

const OtherImage = styled.img``;

const DescriptionContainer = styled.div`
  margin: 20px 24px;
`;

const RegionName = styled.div<{
  $regionVisual: string;
}>`
  font-size: 34px;
  margin-bottom: 20px;
  animation: ${opacityAnimation} 0.7s ease;
  color: ${(props) =>
    props.$regionVisual === "north"
      ? "#FCB743"
      : props.$regionVisual === "lisbon"
      ? "#FCB743"
      : props.$regionVisual === "central"
      ? "#2E70B2"
      : props.$regionVisual === "alentejo"
      ? "#B07420"
      : props.$regionVisual === "algarve"
      ? "#FCB743"
      : "transparent"};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const ExploreBtn = styled.button<{
  $regionVisual: string;
}>`
  border: none;
  background: #fcb743;
  border-radius: 15px;
  font-size: 15px;
  padding: 20px 25px;
  animation: ${opacityAnimation} 0.5s ease;
  background-color: ${(props) =>
    props.$regionVisual === "north"
      ? "#FCB743"
      : props.$regionVisual === "lisbon"
      ? "#FCB743"
      : props.$regionVisual === "central"
      ? "#2E70B2"
      : props.$regionVisual === "alentejo"
      ? "#B07420"
      : props.$regionVisual === "algarve"
      ? "#FCB743"
      : "transparent"};
  color: ${(props) =>
    props.$regionVisual === "north"
      ? "black"
      : props.$regionVisual === "lisbon"
      ? "black"
      : props.$regionVisual === "algarve"
      ? "black"
      : "#fff5e8"};
  margin-bottom: 100px;
  &:hover,
  :focus {
    transform: translateY(2px);
    transition: ease 0.2s;
    box-shadow: 0 7px 7px rgba(0, 0, 0, 0.15);
  }
`;
