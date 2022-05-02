import Image from "next/image";
import styled from "styled-components";
import { Region } from "../types/types";
import north from "../public/North.svg";
import central from "../public/Central-portugal.svg";
import alentejo from "../public/Alentejo.svg";
import lisbon from "../public/Lisbon.svg";
import algarve from "../public/Algarve.svg";
import back from "../public/back-icon.svg";

import { useRouter } from "next/router";
import { BackWrapper, FlexContainer } from "../components/StyledComponents";

const MapPortugal = () => {
  const router = useRouter();

  return (
    <FlexContainer>
      <BackWrapper onClick={() => router.push({ pathname: "./Explore" })}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <TextContainer>
        <MainText>Choose region</MainText>
        <SubText>you would like to see</SubText>
      </TextContainer>
      <Map>
        <North
          onClick={() =>
            router.push({
              pathname: "./Region",
              query: { regionId: "1north" },
            })
          }
        >
          <div>North</div>
          <Image src={north} alt="north" />
        </North>
        <Central
          onClick={() =>
            router.push({
              pathname: "./Region",
              query: { regionId: "2central-portugal" },
            })
          }
        >
          <div>Central Region</div>
          <Image src={central} alt="central" />
        </Central>
        <Lisbon
          onClick={() =>
            router.push({
              pathname: "./Region",
              query: { regionId: "3lisbon" },
            })
          }
        >
          <div>Lisbon capital area</div>
          <Image src={lisbon} alt="lisbon" />
        </Lisbon>
        <Alentejo
          onClick={() =>
            router.push({
              pathname: "./Region",
              query: { regionId: "4alentejo" },
            })
          }
        >
          <div>Alentejo</div>
          <Image src={alentejo} alt="alentejo" />
        </Alentejo>
        <Algarve
          onClick={() =>
            router.push({
              pathname: "./Region",
              query: { regionId: "5algarve" },
            })
          }
        >
          <div>Algarve</div>
          <Image src={algarve} alt="algarve" />
        </Algarve>
      </Map>
    </FlexContainer>
  );
};

export default MapPortugal;

const TextContainer = styled.div`
  margin-left: 35px;
  margin-top: 50px;
  margin-bottom: 40px;
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
  flex-direction: column;
  position: relative;
  // background: red;
  // height: 600px;
  margin-top: 20px;
  margin-left: 20px;
`;

const North = styled.button`
  position: absolute;
  left: 100px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    transition: ease 0.5s;
    transform: scale(1.1, 1.1);
  }
`;

const Central = styled.button`
  position: absolute;
  left: 37px;
  top: 103px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    transition: ease 0.5s;
    transform: scale(1.1, 1.1);
  }
`;

const Lisbon = styled.button`
  position: absolute;
  left: 40px;
  top: 311px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;

  &:focus,
  &:active,
  &:hover {
    transition: ease 0.5s;
    transform: scale(1.1, 1.1);
  }
`;

const Alentejo = styled.button`
  position: absolute;
  left: 57px;
  top: 255px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;

  &:focus,
  &:active,
  &:hover {
    transition: ease 0.5s;
    transform: scale(1.1, 1.1);
  }
`;

const Algarve = styled.button`
  position: absolute;
  left: 80px;
  top: 513px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;

  &:focus,
  &:active,
  &:hover {
    transition: ease 0.5s;
    transform: scale(1.1, 1.1);
  }
`;
