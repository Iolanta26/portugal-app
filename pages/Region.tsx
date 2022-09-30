import styled from "styled-components";
import { useEffect, useState } from "react";
import { NextRouter, withRouter } from "next/router";

import {
  BackButtonWithText,
  GenericButton,
  IconsForRegions,
  opacityAnimation,
  Weather,
} from "../components";
import { BackButtonWrapper } from "../components/styles/StyledComponents";

import { getRegionById } from "../functions";
import { CapitalCity, RegionVisual } from "../types";
import { colors } from "../theme";

import ScrollBar from "../components/UI/ScrollBar";

type Props = {
  router: NextRouter;
};

const Region = ({ router }: Props) => {
  const [regionVisual, setRegionVisual] = useState<RegionVisual>("north");
  const [city, setCity] = useState<CapitalCity>("");
  const { regionId } = router.query;

  const region = getRegionById(regionId as string);

  useEffect(() => {
    switch (region?.regionName) {
      case "North":
        region.regionName === "North";
        setCity("Porto");
        setRegionVisual("north");
        break;
      case "Greater Lisbon":
        region.regionName === "Greater Lisbon";
        setRegionVisual("lisbon");
        setCity("Lisbon");
        break;
      case "Central Portugal":
        region.regionName === "Central Portugal";
        setRegionVisual("central");
        setCity("Coimbra");
        break;
      case "Alentejo":
        region.regionName === "Alentejo";
        setRegionVisual("alentejo");
        setCity("Evora");
        break;
      case "Algarve":
        region.regionName === "Algarve";
        setRegionVisual("algarve");
        setCity("Faro");
        break;
    }
  }, [regionVisual]);

  return (
    <MainContainer>
      <BackButtonWrapper>
        <BackButtonWithText
          onClick={() => router.push({ pathname: "./ChooseRegion" })}
        />
      </BackButtonWrapper>
      <PlacementContainer>
        <Weather cityName={city} />
        <ScrollBar />
      </PlacementContainer>
      <ImageFrame $regionDiv={true}>
        <FlexImages>
          <FirstImage src={region?.mainImage} alt="region" />
          <SecondImage src={region?.images.firstImage} alt="" />
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
    </MainContainer>
  );
};

export default withRouter(Region);

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlacementContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 25vh;
  z-index: 2000;
`;

const ImageFrame = styled.div<{
  $regionDiv: boolean;
}>`
  overflow: hidden;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  position: absolute;
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

const FlexImages = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  max-width: 1000px;
`;

const DescriptionWrapper = styled.div<{
  $regionVisual: string;
}>`
  position: absolute;
  top: 48vh;
  height: 52vh;
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
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
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
  height: 50vh;
  object-fit: cover;
`;

const SecondImage = styled.img`
  height: 50vh;
  margin-top: 5px;
`;

const ThirdImage = styled.img`
  height: 50vh;
  margin-top: 5px;
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
  top: 45vh;
  right: 20px;
`;
