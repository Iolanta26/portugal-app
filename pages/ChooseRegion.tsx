import { useRouter } from "next/router";
import styled from "styled-components";

import { BackWrapper, FlexContainer } from "../components/StyledComponents";
import Image from "next/image";

import portugalMap from "../public/portugal-map.svg";

import north from "../public/North.svg";
import central from "../public/Central-portugal.svg";
import alentejo from "../public/Alentejo.svg";
import lisbon from "../public/Lisbon.svg";
import algarve from "../public/Algarve.svg";
import back from "../public/back-icon.svg";

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
      {/* <Map>
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
      </Map> */}
      <Map>
        <Image src={portugalMap} alt="portugal-app" />
        <NorthButton
          onClick={() =>
            router.push({
              pathname: "./Region",
              query: { regionId: "1north" },
            })
          }
        >
          North
        </NorthButton>
        <CentralRegionButton
          onClick={() =>
            router.push({
              pathname: "./Region",
              query: { regionId: "2central-portugal" },
            })
          }
        >
          Central Region
        </CentralRegionButton>
        <AlentejoButton
          onClick={() =>
            router.push({
              pathname: "./Region",
              query: { regionId: "4alentejo" },
            })
          }
        >
          Alentejo
        </AlentejoButton>
        <AlgarveButton
          onClick={() =>
            router.push({
              pathname: "./Region",
              query: { regionId: "5algarve" },
            })
          }
        >
          Algarve
        </AlgarveButton>
        <LisbonButton
          onClick={() =>
            router.push({
              pathname: "./Region",
              query: { regionId: "3lisbon" },
            })
          }
        >
          Lisbon
        </LisbonButton>
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
  height: 100%;
  margin-top: 20px;
  position: relative;
`;

const NorthButton = styled.div`
  position: absolute;
  left: 180px;
  top: 50px;
  width: 200px;
  height: 70px;
  background: transparent;
  color: white;
  font-family: "Rochester", cursive;
  font-size: 30px;
`;

const CentralRegionButton = styled.div`
  position: absolute;
  left: 123px;
  top: 140px;
  width: 150px;
  height: 140px;
  color: white;
  font-family: "Rochester", cursive;
  font-size: 30px;
  text-align: center;
`;

const AlentejoButton = styled.div`
  position: absolute;
  left: 105px;
  top: 280px;
  width: 150px;
  height: 240px;
  color: white;
  font-family: "Rochester", cursive;
  font-size: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlgarveButton = styled.div`
  position: absolute;
  left: 100px;
  top: 515px;
  width: 140px;
  height: 60px;
  color: white;
  font-family: "Rochester", cursive;
  font-size: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LisbonButton = styled.div`
  position: absolute;
  left: 53px;
  top: 305px;
  width: 60px;
  height: 70px;
  color: white;
  font-family: "Rochester", cursive;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
  left: 100px;
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
  left: 37px;
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
    transform: scale(1.05, 1.05);
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
    transform: scale(1.05, 1.05);
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
    transform: scale(1.05, 1.05);
  }
`;
