import { useRouter } from "next/router";
import styled from "styled-components";

import { BackWrapper, FlexContainer } from "../components/StyledComponents";
import Image from "next/image";

import north from "../public/North.svg";
import central from "../public/Central-portugal.svg";
import alentejo from "../public/Alentejo.svg";
import lisbon from "../public/Lisbon.svg";
import algarve from "../public/Algarve.svg";
import back from "../public/back-icon.svg";

const MapPortugal = () => {
  const router = useRouter();

  return (
    <>
      <BackWrapper onClick={() => router.push({ pathname: "./Explore" })}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <TextContainer>
        <MainText>Choose region</MainText>
        <SubText>you would like to see</SubText>
      </TextContainer>
      <FlexContainer>
        <Map>
          <MapWrapper>
            <North
              onClick={() =>
                router.push({
                  pathname: "./Region",
                  query: { regionId: "1north" },
                })
              }
            >
              <RegionNameNorth>North</RegionNameNorth>
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
              <RegionNameCentral>
                Central <br /> Region
              </RegionNameCentral>
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
              <RegionNameLisbon>Lisbon</RegionNameLisbon>
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
              <RegionNameAlentejo>Alentejo</RegionNameAlentejo>
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
              <RegionNameAlgarve>Algarve</RegionNameAlgarve>
              <Image src={algarve} alt="algarve" />
            </Algarve>
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-bottom: 40px;
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 500px;
`;

const RegionNameNorth = styled.div`
  color: white;
  font-family: "Rochester", cursive;
  font-size: 35px;
  margin-top: 50px;
  position: absolute;
  z-index: 20;
  left: 60px;
`;

const RegionNameCentral = styled.div`
  color: white;
  font-family: "Rochester", cursive;
  font-size: 30px;
  margin-top: 50px;
  position: absolute;
  z-index: 20;
  top: -10px;
  left: 110px;
`;

const RegionNameAlentejo = styled.div`
  color: white;
  font-family: "Rochester", cursive;
  font-size: 30px;
  margin-top: 50px;
  position: absolute;
  z-index: 20;
  top: 50px;
  left: 70px;
`;

const RegionNameAlgarve = styled.div`
  color: white;
  font-family: "Rochester", cursive;
  font-size: 25px;
  margin-top: 0px;
  position: absolute;
  z-index: 20;
  top: 10px;
  left: 40px;
`;

const RegionNameLisbon = styled.div`
  color: white;
  font-family: "Rochester", cursive;
  font-size: 20px;
  position: absolute;
  z-index: 20;
  left: 13px;
  top: 10px;
`;

const North = styled.button`
  position: absolute;
  top: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    transition: ease 0.5s;
    transform: scale(1.05, 1.05);
  }
`;

const Central = styled.button`
  position: absolute;
  left: 75px;
  top: 103px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    transition: ease 0.5s;
    transform: scale(1.05, 1.05);
  }
`;

const Lisbon = styled.button`
  position: absolute;
  left: 80px;
  top: 311px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;

  &:focus,
  &:active,
  &:hover {
    transition: ease 0.5s;
    transform: scale(1.05, 1.05);
  }
`;

const Alentejo = styled.button`
  position: absolute;
  left: 95px;
  top: 255px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;

  &:focus,
  &:active,
  &:hover {
    transition: ease 0.5s;
    transform: scale(1.05, 1.05);
  }
`;

const Algarve = styled.button`
  position: absolute;
  left: 120px;
  top: 513px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;

  &:focus,
  &:active,
  &:hover {
    transition: ease 0.5s;
    transform: scale(1.05, 1.05);
  }
`;
