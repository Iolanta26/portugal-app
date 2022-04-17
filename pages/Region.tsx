import styled from "styled-components";
import { REGIONS } from "../dummy-data/regions";
import { NextRouter, useRouter, withRouter } from "next/router";
import back from "../public/back-icon.svg";
import Image from "next/image";
import { getRegionById } from "../functions/functions";
import { useEffect, useState } from "react";
import { RegionVisual } from "../types";

type Props = {
  router: NextRouter;
};

const Region = ({ router }: Props) => {
  const [regionVisual, setRegionVisual] = useState<RegionVisual>();
  const [isNorth, setIsNorth] = useState(false);
  const [isLisabon, setIsLisabon] = useState(false);
  const [isAlentejo, setIsAlentejo] = useState(false);
  const [isCentral, setIsCentral] = useState(false);
  const [isAlgarve, setIsAlgarve] = useState(false);
  const { regionId } = router.query;

  const region = getRegionById(regionId as string);

  useEffect(() => {
    if (region?.regionName === "Lisbon") {
      setRegionVisual("lisabon");
      setIsLisabon(true);
    } else if (region?.regionName === "North") {
      setRegionVisual("north");
      setIsNorth(true);
    } else if (region?.regionName === "Algarve") {
      setRegionVisual("algarve");
      setIsAlgarve(true);
    } else if (region?.regionName === "Central Portugal") {
      setRegionVisual("central");
      setIsCentral(true);
    } else if (region?.regionName === "Alentejo") {
      setRegionVisual("alentejo");
      setIsAlentejo(true);
    }
  }, [regionVisual]);

  console.log("visualType", regionVisual);

  return (
    <div>
      <BackWrapper onClick={() => router.push({ pathname: "./ChooseRegion" })}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <RegionImageWrapper>
        <RegionImage src={region?.mainImage} alt="region" />
      </RegionImageWrapper>
      <DescriptionWrapper
        $isNorth={isNorth}
        $isLisabon={isLisabon}
        $isAlentejo={isAlentejo}
        $isCentral={isCentral}
        $isAlgarve={isAlgarve}
      >
        <DescriptionContainer>
          <RegionName
            $isNorth={isNorth}
            $isLisabon={isLisabon}
            $isAlentejo={isAlentejo}
            $isCentral={isCentral}
            $isAlgarve={isAlgarve}
          >
            {region?.regionName}
          </RegionName>
          <div>{region?.regionDesc}</div>
        </DescriptionContainer>
        <ButtonWrapper>
          <ExploreBtn
            onClick={() =>
              router.push({
                pathname: "./ListOfPlaces",
                query: { regionId },
              })
            }
          >
            Explore more
          </ExploreBtn>
        </ButtonWrapper>
      </DescriptionWrapper>
    </div>
  );
};

export default withRouter(Region);

const BackWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
`;

const RegionImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 700px;
`;

const RegionImage = styled.img`
  position: absolute;
  height: 500px;
  width: 500px;
  top: 0%;
  left: 0%;
  object-fit: cover;
`;

const DescriptionWrapper = styled.div<{
  $isNorth?: boolean;
  $isLisabon: boolean;
  $isAlentejo: boolean;
  $isCentral: boolean;
  $isAlgarve: boolean;
}>`
  position: absolute;
  top: 470px;
  left: 0%;
  height: 475px;
  background-color: ${(props) => props.$isNorth && "#248cf9"};
  background-color: ${(props) => props.$isLisabon && "#2E70B2"};
  background-color: ${(props) => props.$isAlentejo && "#FCB743"};
  background-color: ${(props) => props.$isCentral && "#2DBE5A"};
  background-color: ${(props) => props.$isAlgarve && "#B07420"};
  border-radius: 50px;
`;

const DescriptionContainer = styled.div`
  margin: 20px 24px;
`;

const RegionName = styled.div<{
  $isNorth?: boolean;
  $isLisabon: boolean;
  $isAlentejo: boolean;
  $isCentral: boolean;
  $isAlgarve: boolean;
}>`
  font-size: 34px;
  color: ${(props) => props.$isNorth && "#FCB743"};
  color: ${(props) => props.$isLisabon && "#FCB743"};
  color: ${(props) => props.$isAlentejo && "#B07420"};
  color: ${(props) => props.$isCentral && "#2E70B2"};
  color: ${(props) => props.$isAlgarve && "#FCB743"};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const ExploreBtn = styled.button`
  border: none;
  background: #fcb743;
  border-radius: 15px;
  font-size: 15px;
  padding: 20px 25px;
`;
