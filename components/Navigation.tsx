import styled from "styled-components";

export const Navigation = () => {
  return (
    <Navbar>
      <CenterWrapper>
        <CenterImage src="./azulejo.svg" alt="center" />
      </CenterWrapper>
      <HeartButton>
        <Heart src="./heart.svg" alt="center" />
        Favourite
      </HeartButton>
    </Navbar>
  );
};

const Navbar = styled.div`
  background-color: #fff3e0;
  height: 60px;
  border-radius: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 5;
`;

const CenterWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: #fecf81;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterImage = styled.img`
  width: 50px;
  border-radius: 50px;
`;

const Heart = styled.img`
  display: flex;
`;

const HeartButton = styled.button`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  right: 18%;
  background: transparent;
  border: none;
`;
