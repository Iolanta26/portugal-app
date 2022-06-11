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
        <Icon70px src="./regionIcons/northIcon.svg" alt="grapes" />
        <Icon70px src="./regionIcons/portowine.svg" alt="portwine" />
        <Icon100px src="./regionIcons/mountain.svg" alt="mountain" />
      </>
    )}
    {regionVisual === "central" && (
      <>
        <Icon90px src="./regionIcons/central.svg" alt="fish" />
        <Icon80px src="./regionIcons/olivetree.svg" alt="olive-tree" />
        <OliveOil src="./regionIcons/oliveoil.svg" alt="olive-oil" />
      </>
    )}
    {regionVisual === "lisbon" && (
      <>
        <Icon70px src="./regionIcons/tram.svg" alt="tram" />
        <Icon90px src="./regionIcons/pena.svg" alt="pena-castle" />
        <Icon70px src="./regionIcons/pasteis.svg" alt="pastry" />
      </>
    )}
    {regionVisual === "alentejo" && (
      <>
        <Icon70px src="./regionIcons/alentejo2.svg" alt="grape-field" />
        <Icon80px src="./regionIcons/cork.svg" alt="cork" />
        <Icon70px src="./regionIcons/wine.svg" alt="wine" />
      </>
    )}
    {regionVisual === "algarve" && (
      <>
        <Icon100px src="./regionIcons/beach.svg" alt="beach" />
        <Icon80px src="./regionIcons/seafood.svg" alt="oyster" />
        <Icon90px src="./regionIcons/rock.svg" alt="rock" />
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
