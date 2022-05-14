import { useRouter } from "next/router";
import styled from "styled-components";

export const Navigation = () => {
  const router = useRouter();
  return (
    <Navbar>
      <MenuButton onClick={() => router.push("./ChooseRegion")}>
        <Icon src="./map-pin.svg" alt="map-pin" />
        <MenuText>Regions</MenuText>
      </MenuButton>
      <MenuButton>
        <Icon src="./search.svg" alt="search" />
        <MenuText>Search</MenuText>
      </MenuButton>
      <CenterWrapper>
        <CenterImage src="./azulejo.svg" alt="center" />
      </CenterWrapper>
      <MenuButton>
        <Icon src="./heart.svg" alt="favourite" />
        <MenuText>Favourite</MenuText>
      </MenuButton>
      <MenuButton onClick={() => router.push("./Info")}>
        <Icon src="./info.svg" alt="info" />
        <MenuText>Info</MenuText>
      </MenuButton>
    </Navbar>
  );
};

const Navbar = styled.div`
  background-color: #fecf81;
  height: 55px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 200;
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

const Icon = styled.img`
  // display: flex;
  position: absolute;
  top: 0px;
`;

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background: transparent;
  height: 38px;
  width: 40px;
  border: none;
  position: relative;
`;

const MenuText = styled.div`
  position: absolute;
  bottom: 0px;
`;
