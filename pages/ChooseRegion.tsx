import styled from "styled-components";
import { useRouter } from "next/router";

import {
  BackButtonWithText,
  BackButtonWrapper,
  FlexContainer,
  MapSvgComponent,
} from "../components";

const MapPortugal = () => {
  const router = useRouter();

  return (
    <MainFlexContainer>
      <BackButtonWrapper>
        <BackButtonWithText
          onClick={() => router.push({ pathname: "./Explore" })}
          mainText="Click on region"
          subText="you would like to see"
        />
      </BackButtonWrapper>
      <div style={{ marginTop: "60px" }} />
      <FlexContainer $isRow={false}>
        <MapSvgComponent />
      </FlexContainer>
    </MainFlexContainer>
  );
};

export default MapPortugal;

const MainFlexContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
