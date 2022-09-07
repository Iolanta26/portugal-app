import { InputHTMLAttributes, RefObject } from "react";
import styled, { css } from "styled-components";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputRef?:
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null
    | undefined;
  isHidden?: boolean;
};

export const Input = ({ inputRef, isHidden, ...inputProps }: InputProps) => (
  <InputStyled {...inputProps} $isHidden={isHidden} ref={inputRef} />
);

const InputStyled = styled.input<{ $isHidden?: boolean }>`
  ${(props) => props.$isHidden && inputFieldHiddenCSS}
`;

const inputFieldHiddenCSS = css`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
