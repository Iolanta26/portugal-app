import styled from "styled-components";
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
        <DescriptionContainer>
          <RegionName $regionVisual={regionVisual}>
            {region?.regionName}
          </RegionName>
          <div>{region?.regionDesc}</div>
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
      ? "#248cf9"
      : props.$regionVisual === "lisbon"
      ? "#2E70B2"
      : props.$regionVisual === "central"
      ? "#2DBE5A"
      : props.$regionVisual === "alentejo"
      ? "#FCB743"
      : props.$regionVisual === "algarve"
      ? "#B07420"
      : "transparent"};
  border-radius: 30px;
  z-index: 20;
`;

const CarouselDiv = styled.div`
  white-space: nowrap;
  overflow: scroll;
  overflow-y: hidden;
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
