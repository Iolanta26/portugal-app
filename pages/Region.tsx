import styled from "styled-components";
import { useEffect, useState } from "react";
import { NextRouter, withRouter } from "next/router";

import {
  GenericButton,
  IconsForRegions,
  opacityAnimation,
  pictureMoveUp,
} from "../components";
import {
  BackButton,
  ImageFrame,
  ImageOfPlace,
} from "../components/StyledComponents";

import { getRegionById } from "../functions";
import { RegionVisual } from "../types";
import { colors } from "../theme";

import Image from "next/image";
import back from "../public/back-icon.svg";

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
    <>
      <BackButtonWrapper>
        <BackButton onClick={() => router.push({ pathname: "./ChooseRegion" })}>
          <Image src={back} alt="back" />
        </BackButton>
      </BackButtonWrapper>
      <MainDiv $regionVisual={regionVisual}>
        <ImageFrame $regionDiv={true}>
          <FlexImages>
            <FirstImage src={region?.mainImage} alt="region" />
            <OtherImage src={region?.images.firstImage} alt="" />
            <ThirdImage src={region?.images.secondImage} alt="" />
          </FlexImages>
        </ImageFrame>
        <ButtonWrapper>
          <GenericButton
            regionVisual={regionVisual}
            text="Explore"
            style="circle"
            onClick={() =>
              router.push({
                pathname: "./ListOfPlaces",
                query: { regionId, regionVisual },
              })
            }
          />
        </ButtonWrapper>
        <DescriptionWrapper $regionVisual={regionVisual}>
          <DescriptionContainer>
            <RegionName $regionVisual={regionVisual}>
              {region?.regionName}
            </RegionName>
            <DescriptionText $regionVisual={regionVisual}>
              {region?.regionDesc}
              <BestKnownText $regionVisual={regionVisual}>
                Best known for:
                <IconsForRegions regionVisual={regionVisual} />
              </BestKnownText>
            </DescriptionText>
          </DescriptionContainer>
        </DescriptionWrapper>
      </MainDiv>
    </>
  );
};

export default withRouter(Region);

const BackButtonWrapper = styled.div`
  background-color: red;
  width: 280px;
  margin-left: 10px;
`;

const BestKnownText = styled.div<{
  $regionVisual: string;
}>`
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
  color: ${(props) =>
    props.$regionVisual === "north"
      ? `${colors.orangePalette}`
      : props.$regionVisual === "lisbon"
      ? `${colors.orangePalette}`
      : props.$regionVisual === "central"
      ? `${colors.darkBluePalette}`
      : props.$regionVisual === "alentejo"
      ? `${colors.brownPalette}`
      : props.$regionVisual === "algarve"
      ? `${colors.orangePalette}`
      : "transparent"};
`;

const MainDiv = styled.div<{
  $regionVisual: string;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  top: -30px;
  position: relative;
`;

const FlexImages = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  // width: 330px;
  width: 100%;
`;

const DescriptionWrapper = styled.div<{
  $regionVisual: string;
}>`
  position: absolute;
  top: 305px;
  height: 340px;
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
  border-radius: 20px;
  z-index: 20;
`;

const DescriptionText = styled.div<{
  $regionVisual: string;
}>`
  color: ${(props) =>
    props.$regionVisual === "north"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "lisbon"
      ? `${colors.lightTextColor}`
      : props.$regionVisual === "central"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "alentejo"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "algarve"
      ? `${colors.lightTextColor}`
      : "transparent"};
  font-size: 12px;
`;

const FirstImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  animation: ${pictureMoveUp} 1.5s ease-in-out;
  animation-delay: 1.5s;
`;

const OtherImage = styled.img`
  height: 400px;
  margin-top: 8px;
  animation: ${pictureMoveUp} 1.5s ease-in-out;
  animation-delay: 1.5s;
`;

const ThirdImage = styled.img`
  height: 400px;
  margin-top: 8px;
`;

const DescriptionContainer = styled.div`
  margin: 20px 24px;
`;

const RegionName = styled.div<{
  $regionVisual: string;
}>`
  font-size: 24px;
  margin-bottom: 10px;
  animation: ${opacityAnimation} 0.7s ease;
  color: ${(props) =>
    props.$regionVisual === "north"
      ? `${colors.orangePalette}`
      : props.$regionVisual === "lisbon"
      ? `${colors.orangePalette}`
      : props.$regionVisual === "central"
      ? `${colors.darkBluePalette}`
      : props.$regionVisual === "alentejo"
      ? `${colors.brownPalette}`
      : props.$regionVisual === "algarve"
      ? `${colors.orangePalette}`
      : "transparent"};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 100;
  top: 280px;
  right: 20px;
`;
