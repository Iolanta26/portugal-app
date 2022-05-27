import { useRouter } from "next/router";
import styled from "styled-components";

import { BackWrapper, FlexContainer } from "../components/StyledComponents";
import Image from "next/image";

import back from "../public/back-icon.svg";
import { MapSvgComponent } from "../components/MapSvgComponent";

const MapPortugal = () => {
  const router = useRouter();

  return (
    <>
      <BackWrapper onClick={() => router.push({ pathname: "./Explore" })}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <TextContainer>
        <MainText>Click on region</MainText>
        <SubText>you would like to see</SubText>
      </TextContainer>
      <FlexContainer>
        <Map>
          <MapWrapper>
            <MapSvgComponent />
          </MapWrapper>
        </Map>
      </FlexContainer>
    </>
  );
};

export default MapPortugal;

const TextContainer = styled.div`
  margin-left: 35px;
  margin-top: 50px;
  // margin-bottom: 20px;
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

  margin-bottom: 50px;
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
