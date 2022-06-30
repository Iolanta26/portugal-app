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
        <Icon50px src="./regionIcons/northIcon.svg" alt="grapes" />
        <Icon50px src="./regionIcons/portowine.svg" alt="portwine" />
        <Icon100px src="./regionIcons/mountain.svg" alt="mountain" />
      </>
    )}
    {regionVisual === "central" && (
      <>
        <Icon90px src="./regionIcons/central.svg" alt="fish" />
        <Icon60px src="./regionIcons/olivetree.svg" alt="olive-tree" />
        <OliveOil src="./regionIcons/oliveoil.svg" alt="olive-oil" />
      </>
    )}
    {regionVisual === "lisbon" && (
      <>
        <Icon50px src="./regionIcons/tram.svg" alt="tram" />
        <Icon90px src="./regionIcons/pena.svg" alt="pena-castle" />
        <Icon50px src="./regionIcons/pasteis.svg" alt="pastry" />
      </>
    )}
    {regionVisual === "alentejo" && (
      <>
        <Icon50px src="./regionIcons/alentejo2.svg" alt="grape-field" />
        <Icon60px src="./regionIcons/cork.svg" alt="cork" />
        <Icon50px src="./regionIcons/wine.svg" alt="wine" />
      </>
    )}
    {regionVisual === "algarve" && (
      <>
        <Icon100px src="./regionIcons/beach.svg" alt="beach" />
        <Icon60px src="./regionIcons/seafood.svg" alt="oyster" />
        <Icon90px src="./regionIcons/rock.svg" alt="rock" />
      </>
    )}
  </IconsWrapper>
);

const IconsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 200px;
  margin-top: 15px;
`;

const Icon50px = styled.img`
  width: 50px;
  animation: ${opacityAnimation} 1s ease;
`;

const Icon60px = styled.img`
  width: 60px;
  animation: ${opacityAnimation} 1s ease;
`;

const Icon90px = styled.img`
  width: 60px;
  animation: ${opacityAnimation} 1s ease;
`;

const Icon100px = styled.img`
  width: 70px;
  animation: ${opacityAnimation} 1s ease;
`;

const OliveOil = styled.img`
  width: 40px;
  animation: ${opacityAnimation} 1s ease;
`;
