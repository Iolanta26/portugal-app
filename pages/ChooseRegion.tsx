import styled from "styled-components";
import { useRouter } from "next/router";

import { BackWrapper, FlexContainer, MapSvgComponent } from "../components";

import Image from "next/image";
import back from "../public/back-icon.svg";

const MapPortugal = () => {
  const router = useRouter();

  return (
    <MainFlexContainer>
      <BackWrapper onClick={() => router.push({ pathname: "./Explore" })}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <TextContainer>
        <MainText>Click on region</MainText>
        <SubText>you would like to see</SubText>
      </TextContainer>
      <FlexContainer $isRow={false}>
        <Map>
          <MapSvgComponent />
        </Map>
      </FlexContainer>
    </MainFlexContainer>
  );
};

export default MapPortugal;

const MainFlexContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  margin-bottom: 25px;
  margin-top: 50px;
  width: 300px;
`;

const MainText = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #b07420;
`;

const SubText = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #b07420;
`;

const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 40px;
`;
