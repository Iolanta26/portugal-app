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

const MapPortugal = (region: Region) => {
  const router = useRouter();

  // const { id } = region;

  console.log("region", region);

  return (
    <div>
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
          <Image src={algarve} alt="algarve" />
        </Algarve>
      </Map>
    </div>
  );
};

export default MapPortugal;

const BackWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const TextContainer = styled.div`
  margin-left: 20px;
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
