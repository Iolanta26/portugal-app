import styled, { css } from "styled-components";
import { theme } from "../../theme";

type Props = {
  isEmphasized?: boolean;
};

export const LogoText = ({ isEmphasized }: Props) => {
  return (
    <div>
      <Portugal $isEmphasized={isEmphasized}>Portugal</Portugal>
      <Paragraph $isEmphasized={isEmphasized}>in your pocket</Paragraph>
    </div>
  );
};

const Portugal = styled.div<{ $isEmphasized?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rochester", cursive;
  color: ${theme.colors.orangePalette};
  font-size: 20px;
  margin-top: 10px;

  ${(props) =>
    props.$isEmphasized &&
    css`
      color: ${theme.colors.darkBluePalette};
      font-size: 35px;
    `}
`;

const Paragraph = styled.div<{ $isEmphasized?: boolean }>`
  color: #666666;
  font-size: 12px;
  line-height: 10px;

  ${(props) =>
    props.$isEmphasized &&
    css`
      color: ${theme.colors.darkBluePalette};
      font-size: 16px;
    `}
`;
