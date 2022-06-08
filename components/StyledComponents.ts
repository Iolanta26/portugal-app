import styled from "styled-components";
import { colors } from "../theme";

export const BackWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  top: 15px;
  left: 15px;
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
  font-size: 30px;
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

export const Description = styled.div`
  width: 85%;
  text-align: center;
  margin-bottom: 10px;
`;

export const ImageFrame = styled.div<{
  $regionDiv: boolean;
}>`
  overflow: hidden;
  height: ${(props) => (props.$regionDiv === true ? "500px" : "400px")};
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
  max-width: 1200px;
`;

export const ImageOfPlace = styled.img<{
  $regionDiv: boolean;
}>`
  width: 100%;
  height: ${(props) => (props.$regionDiv === true ? "500px" : "400px")};
  object-fit: cover;
  position: absolute;
`;
