import styled from "styled-components";
import { RegionVisual } from "../types";
import { opacityAnimation } from "./KeyFrames";

type Props = {
  regionVisual: RegionVisual;
};

export const IconsForRegions = ({ regionVisual }: Props) => (
  <IconsWrapper>
    {regionVisual === "north" && (
      <>
        <Icon70px src="./northIcon.svg" alt="beach" />
        <Icon70px src="./portowine.svg" alt="beach" />
        <Icon100px src="./mountain.svg" alt="beach" />
      </>
    )}
    {regionVisual === "central" && (
      <>
        <Icon90px src="./central.svg" alt="beach" />
        <Icon80px src="./olivetree.svg" alt="beach" />
        <OliveOil src="./oliveoil.svg" alt="beach" />
      </>
    )}
    {regionVisual === "lisbon" && (
      <>
        <Icon70px src="./tram.svg" alt="beach" />
        <Icon90px src="./pena.svg" alt="beach" />
        <Icon70px src="./pasteis.svg" alt="beach" />
      </>
    )}
    {regionVisual === "alentejo" && (
      <>
        <Icon70px src="./alentejo2.svg" alt="beach" />
        <Icon80px src="./cork.svg" alt="beach" />
        <Icon70px src="./wine.svg" alt="beach" />
      </>
    )}
    {regionVisual === "algarve" && (
      <>
        <Icon100px src="./beach.svg" alt="beach" />
        <Icon80px src="./seafood.svg" alt="beach" />
        <Icon90px src="./rock.svg" alt="beach" />
      </>
    )}
  </IconsWrapper>
);

const IconsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 280px;
  margin-top: 25px;
`;

const Icon70px = styled.img`
  width: 70px;
  animation: ${opacityAnimation} 1s ease;
`;

const Icon80px = styled.img`
  width: 80px;
  animation: ${opacityAnimation} 1s ease;
`;

const Icon90px = styled.img`
  width: 90px;
  animation: ${opacityAnimation} 1s ease;
`;

const Icon100px = styled.img`
  width: 100px;
  animation: ${opacityAnimation} 1s ease;
`;

const OliveOil = styled.img`
  width: 50px;
  animation: ${opacityAnimation} 1s ease;
`;
