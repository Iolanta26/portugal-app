import styled from "styled-components";

const ScrollBar = () => {
  return (
    <CirclesContainer>
      <FirstCircle></FirstCircle>
      <SecondCircle></SecondCircle>
      <ThirdCircle></ThirdCircle>
    </CirclesContainer>
  );
};

const CirclesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3000;
  width: fit-content;
  height: 50px;
  left: 300px;
  top: 50px;
`;

const FirstCircle = styled.div`
  background: white;
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;

const SecondCircle = styled.div`
  background: rgb(238, 236, 236);
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;

const ThirdCircle = styled.div`
  background: rgb(233, 233, 233);
  opacity: 0.8;
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;

export default ScrollBar;
