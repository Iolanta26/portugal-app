import {
  ChangeEvent,
  forwardRef,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { theme } from "../../theme";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ maxLength = 500, ...textAreaProps }, ref) => {
    const [charCount, setCharCount] = useState(0);
    const handleKeyPress = (event: ChangeEvent<HTMLTextAreaElement>) =>
      setCharCount(event.target.value.length);
    useEffect(() => {
      // Set init value for chartCount
      const value = textAreaRef.current?.value;
      const initCharCount = typeof value === "string" ? value.length : 0;
      setCharCount(initCharCount);
    }, []);

    const textAreaRef = useRef<HTMLTextAreaElement>();
    const setRefs = (_ref: any) => {
      textAreaRef.current = _ref;
      if (typeof ref === "function") ref(_ref);
    };

    return (
      <Container>
        <TextAreaInput
          maxLength={maxLength}
          {...textAreaProps}
          onChange={handleKeyPress}
          ref={setRefs}
        />
        <Counter>
          {charCount}/{maxLength}
        </Counter>
      </Container>
    );
  }
);

TextArea.displayName = "TextArea";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const TextAreaInput = styled.textarea`
  min-width: 100%;
  width: 100%;
  max-width: 325px;
  min-height: 64px;
  height: 132px;
  border: 1px solid rgba(252, 183, 67, 1);
  border-radius: 5px;
  font-size: 12px;
  font-family: Quicksand;
  outline-color: ${theme.colors.orangePalette};
`;

const Counter = styled.div`
  color: lightgray;
  font-size: 10px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
