import styled from "styled-components";
import { RegionVisual } from "../types";

type Props = {
  regionVisual: RegionVisual;
};

export const IconsForRegions = ({ regionVisual }: Props) => (
  <IconsWrapper>
    {regionVisual === "north" && (
      <>
        <NorthIcon src="./northIcon.svg" alt="beach" />
        <Portwine src="./portowine.svg" alt="beach" />
        <RegionIcon src="./mountain.svg" alt="beach" />
      </>
    )}
    {regionVisual === "central" && (
      <>
        <RegionIcon src="./central.svg" alt="beach" />
        <Tree src="./olivetree.svg" alt="beach" />
        <OliveOil src="./oliveoil.svg" alt="beach" />
      </>
    )}
    {regionVisual === "lisbon" && (
      <>
        <Tram src="./tram.svg" alt="beach" />
        <RegionIcon src="./pena.svg" alt="beach" />
        <RegionIcon src="./pasteis.svg" alt="beach" />
      </>
    )}
    {regionVisual === "alentejo" && (
      <>
        <RegionIcon src="./alentejo2.svg" alt="beach" />
        <Cork src="./cork.svg" alt="beach" />
        <Wine src="./wine.svg" alt="beach" />
      </>
    )}
    {regionVisual === "algarve" && (
      <>
        <RegionIcon src="./beach.svg" alt="beach" />
        <RegionIcon src="./seafood.svg" alt="beach" />
        <RegionIcon src="./rock.svg" alt="beach" />
      </>
    )}
  </IconsWrapper>
);

const IconsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 300px;
  margin-top: 25px;
`;

const RegionIcon = styled.img`
  width: 100px;
`;
const OliveOil = styled.img`
  width: 50px;
`;

const Portwine = styled.img`
  width: 70px;
`;

const Tree = styled.img`
  width: 80px;
`;

const NorthIcon = styled.img`
  width: 70px;
`;

const Tram = styled.img`
  width: 70px;
`;

const Cork = styled.img`
  width: 70px;
`;

const Wine = styled.img`
  width: 70px;
`;
