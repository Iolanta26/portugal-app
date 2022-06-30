import styled from "styled-components";
import { useRouter } from "next/router";

import { BackButton, FlexContainer, MapSvgComponent } from "../components";

import Image from "next/image";
import back from "../public/back-icon.svg";

const MapPortugal = () => {
  const router = useRouter();

  return (
    <MainFlexContainer>
      <ButtonWrapper>
        <BackButton onClick={() => router.push({ pathname: "./Explore" })}>
          <Image src={back} alt="back" />
        </BackButton>
      </ButtonWrapper>
      <TextContainer>
        <MainText>Click on region</MainText>
        <SubText>you would like to see</SubText>
      </TextContainer>
      <FlexContainer $isRow={false}>
        <MapSvgComponent />
      </FlexContainer>
    </MainFlexContainer>
  );
};

export default MapPortugal;

const MainFlexContainer = styled.div`
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  margin-bottom: 25px;
  margin-top: 10px;
  margin-left: 60px;
  width: 300px;
`;

const ButtonWrapper = styled.div`
  background-color: red;
  width: 300px;
`;

const MainText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #b07420;
`;

const SubText = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #b07420;
`;
