import styled from "styled-components";
import { NextRouter, withRouter } from "next/router";
import back from "../public/back-icon.svg";
import Image from "next/image";
import { getRegionById } from "../functions/functions";
import { useEffect, useState } from "react";
import { RegionVisual } from "../types";
import { BackWrapper } from "../components/StyledComponents";
import tram from "../public/tram.svg";

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
      case "Lisbon":
        region.regionName === "Lisbon";
        setRegionVisual("lisabon");
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
      <BackWrapper onClick={() => router.push({ pathname: "./ChooseRegion" })}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <RegionImageWrapper>
        <RegionImage src={region?.mainImage} alt="region" />
      </RegionImageWrapper>
      <DescriptionWrapper $regionVisual={regionVisual}>
        <TramDiv>
          <Image src={tram} alt="tram" />
        </TramDiv>
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
  background-color: white;
  height: 100vh;
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

const RegionImageWrapper = styled.div`
  overflow: hidden;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const RegionImage = styled.img`
  height: 500px;
  min-width: 500px;
  object-fit: cover;
  position: absolute;
`;

const DescriptionWrapper = styled.div<{
  $regionVisual: string;
}>`
  position: absolute;
  top: 430px;
  width: 100%;
  height: fit-content;
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
  border-radius: 30px;
`;

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
      : props.$regionVisual === "lisabon"
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
      : props.$regionVisual === "lisabon"
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
      : props.$regionVisual === "lisabon"
      ? "black"
      : props.$regionVisual === "algarve"
      ? "black"
      : "#fff5e8"};
  margin-bottom: 100px;
`;

const TramDiv = styled.div`
  width: 80px;
  position: absolute;
  right: 40px;
  top: -55px;
`;
