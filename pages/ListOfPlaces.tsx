import styled from "styled-components";
import { NextRouter, withRouter } from "next/router";

import { BackWrapper, PlaceCard } from "../components";
import { getRegionById } from "../functions";
import { PLACES } from "../dummy-data";
import { RegionVisual } from "../types";

import Image from "next/image";
import back from "../public/back-icon.svg";

type Props = {
  router: NextRouter;
};

const ListOfPlaces = ({ router }: Props) => {
  const { regionId, regionVisual } = router.query;

  const placesAccordingToRegion = PLACES.filter(
    (place) => place.region === regionId
  );

  const getRegionName = getRegionById(regionId as string)?.regionName;

  return (
    <PageContainer>
      <BackWrapper onClick={() => router.back()}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextWrapper>
          <Places>Places to visit in </Places>
          <RegionName>{getRegionName}</RegionName>
        </TextWrapper>
        <MainListContainer>
          {placesAccordingToRegion.map((place) => (
            <CardsContainer key={place.id}>
              <PlaceCard
                place={place}
                regionVisual={regionVisual as RegionVisual}
              />
            </CardsContainer>
          ))}
        </MainListContainer>
      </div>
    </PageContainer>
  );
};

export default withRouter(ListOfPlaces);

const PageContainer = styled.div`
  padding-bottom: 100px;
`;

const MainListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin-top: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  margin-top: 50px;
  color: #13406c;
  width: 300px;
`;

const Places = styled.div`
  font-size: 20px;
`;

const RegionName = styled.div`
  font-size: 40px;
`;
