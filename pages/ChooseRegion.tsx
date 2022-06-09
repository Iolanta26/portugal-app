import { useRouter } from "next/router";
import styled from "styled-components";

import { BackWrapper, FlexContainer } from "../components/StyledComponents";

import Image from "next/image";
import back from "../public/back-icon.svg";
import { MapSvgComponent } from "../components";

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
`;

const TextContainer = styled.div`
  margin-left: 55px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

// const LeafImageOne = styled.img`
//   width: 180px;
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   transform: rotate(10deg);
// `;

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
