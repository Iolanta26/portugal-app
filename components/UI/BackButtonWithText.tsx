import Image from "next/image";
import styled, { css } from "styled-components";
import back from "../../public/back-icon.svg";
import { theme } from "../../theme";

type Props = {
  onClick: () => void;
  mainText?: string;
  subText?: string;
  smallText?: boolean;
  bigText?: boolean;
  fontWeight?: boolean;
};

export const BackButtonWithText = ({
  onClick,
  mainText,
  subText,
  smallText,
  bigText,
  fontWeight,
}: Props) => {
  return (
    <MainWrapper>
      <BackButton onClick={onClick}>
        <Image src={back} alt="back" />
      </BackButton>
      <TextContainer>
        <MainText $isSmall={smallText} $fontWeight={fontWeight}>
          {mainText}
        </MainText>
        <SubText $isBig={bigText}>{subText}</SubText>
      </TextContainer>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

const BackButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  position: fixed;
  margin-left: 25px;
`;

const TextContainer = styled.div`
  margin-left: 60px;
`;

const MainText = styled.div<{ $isSmall?: boolean; $fontWeight?: boolean }>`
  font-size: 20px;
  font-weight: 600;
  color: #b07420;

  ${(props) =>
    props.$isSmall &&
    css`
      font-size: 16px;
      font-weight: 400;
    `}

  ${(props) =>
    props.$fontWeight &&
    css`
      color: ${theme.colors.darkBluePalette};
      font-weight: 400;
    `}
`;

const SubText = styled.div<{ $isBig?: boolean }>`
  font-size: 16px;
  font-weight: 300;
  color: #b07420;

  ${(props) =>
    props.$isBig &&
    css`
      font-size: 20px;
      font-weight: 500;
    `}
`;
