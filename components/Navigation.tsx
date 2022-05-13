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
  background-color: #fecf81;
  height: 55px;
  border-radius: 15px;
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
  width: 80px;
  height: 80px;
  background: #ffe5ba;
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
