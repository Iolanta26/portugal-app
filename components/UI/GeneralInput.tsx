import styled from "styled-components";
import { theme } from "../../theme";

type Props = {
  placeholder: string;
};

export const Input = ({ placeholder }: Props) => {
  return (
    <div>
      <InputWrapper type="text" placeholder={placeholder} />
    </div>
  );
};

const InputWrapper = styled.input`
  width: 230px;
  height: 40px;
  border-radius: 10px;
  border: 0.7px solid ${theme.colors.orangePalette};
`;
