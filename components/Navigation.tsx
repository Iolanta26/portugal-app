import styled from "styled-components";

export const Navigation = () => {
  return (
    <Navbar>
      <CenterWrapper>
        <CenterImage src="./navbar-center.svg" alt="center" />
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
  position: fixed;
`;

const CenterImage = styled.img``;

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
