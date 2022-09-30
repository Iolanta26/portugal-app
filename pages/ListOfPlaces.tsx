import styled from "styled-components";
import { NextRouter, withRouter } from "next/router";

import {
  BackButtonWithText,
  BackButtonWrapper,
  PlaceCard,
} from "../components";
import { getRegionById } from "../functions";
import { PLACES } from "../dummy-data";
import { RegionVisual } from "../types";

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
      <BackButtonWrapper>
        <BackButtonWithText
          onClick={() => router.back()}
          mainText="Places to visit in"
          subText={getRegionName}
          smallText
          bigText
        />
      </BackButtonWrapper>
      <MainListContainer>
        {placesAccordingToRegion.map((place) => (
          <CardsContainer key={place.id}>
            <PlaceCard
              place={place}
              regionVisual={regionVisual as RegionVisual}
              style="full"
            />
          </CardsContainer>
        ))}
      </MainListContainer>
    </PageContainer>
  );
};

export default withRouter(ListOfPlaces);

const PageContainer = styled.div`
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const MainListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const CardsContainer = styled.div`
  display: flex;
`;
