import styled, { css } from "styled-components";
import { colors } from "../theme";

export const BackButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  position: fixed;
`;

export const FlexContainer = styled.div<{
  $isRow: boolean;
}>`
  dipslay: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.$isRow === true ? "row" : "column")};
  margin: 0;
  padding: 0;
`;

export const PlaceName = styled.div<{
  $regionVisual: string;
}>`
  font-family: "Rochester", cursive;
  color: white;
  font-size: 24px;
  color: ${(props) =>
    props.$regionVisual === "north"
      ? `${colors.lightTextColor}`
      : props.$regionVisual === "lisbon"
      ? `${colors.lightTextColor}`
      : props.$regionVisual === "central"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "alentejo"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "algarve"
      ? `${colors.lightTextColor}`
      : "transparent"};
`;

export const LocationName = styled.div<{
  $regionVisual: string;
}>`
  font-size: 16px;
  line-height: 30px;
  color: ${(props) =>
    props.$regionVisual === "north"
      ? `${colors.lightTextColor}`
      : props.$regionVisual === "lisbon"
      ? `${colors.lightTextColor}`
      : props.$regionVisual === "central"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "alentejo"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "algarve"
      ? `${colors.lightTextColor}`
      : "transparent"};
`;

export const ImageFrame = styled.div<{
  $regionDiv: boolean;
}>`
  overflow: hidden;
  height: ${(props) => (props.$regionDiv === true ? "400px" : "270px")};
  width: 320px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  // max-width: 1200px;

  // @media (max-width: 768px) {
  //   height: 400px;
  //   width: 100%;
  // }
`;

export const ImageOfPlace = styled.img<{
  $regionDiv: boolean;
}>`
  width: 100%;
  // height: ${(props) => (props.$regionDiv === true ? "400px" : "300px")};
  object-fit: cover;
  animation-delay: 2s;

  // @media (max-width: 768px) {
  //   height: 400px;
  // }
`;
