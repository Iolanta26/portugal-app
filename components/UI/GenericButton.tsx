import styled, { css } from "styled-components";
import { colors } from "../../theme";
import { RegionVisual } from "../../types";
import { opacityAnimation } from "../styles/KeyFrames";

type ButtonStyle = "circle" | "rectangular";

type Props = {
  text: string;
  onClick: () => void;
  regionVisual: RegionVisual;
  style?: ButtonStyle;
};

export const GenericButton = ({
  text,
  regionVisual,
  style = "rectangular",
  onClick,
}: Props) => {
  return (
    <GenericBtn $regionVisual={regionVisual} $style={style} onClick={onClick}>
      {text}
    </GenericBtn>
  );
};

const GenericBtn = styled.button<{
  $regionVisual: string;
  $style: ButtonStyle;
}>`
  border: none;
  border-radius: 15px;
  font-size: 15px;
  padding: 15px 25px;
  font-size: 12px;
  animation: ${opacityAnimation} 0.5s ease;
  background-color: ${(props) =>
    props.$regionVisual === "north"
      ? `${colors.orangePalette}`
      : props.$regionVisual === "lisbon"
      ? `${colors.orangePalette}`
      : props.$regionVisual === "central"
      ? `${colors.darkBluePalette}`
      : props.$regionVisual === "alentejo"
      ? `${colors.brownPalette}`
      : props.$regionVisual === "algarve"
      ? `${colors.orangePalette}`
      : "transparent"};
  color: ${(props) =>
    props.$regionVisual === "north"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "lisbon"
      ? `${colors.darkTextColor}`
      : props.$regionVisual === "algarve"
      ? `${colors.darkTextColor}`
      : `${colors.lightTextColor}`};
  margin-bottom: 100px;
  &:hover,
  :focus {
    transform: translateY(2px);
    transition: ease 0.2s;
    box-shadow: 0 7px 7px rgba(0, 0, 0, 0.15);
  }

  ${({ $style }) =>
    $style === "circle" &&
    css`
      width: 63px;
      height: 63px;
      border-radius: 50%;
      padding: 0;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    `}
`;
