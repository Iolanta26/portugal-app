import styled from "styled-components";
import Link from "next/link";

import Image from "next/image";
import azulejo from "../public/azulejo.png";

export const Navigation = () => {
  return (
    <MainNavContainer>
      <Navbar>
        <Link href="/ChooseRegion">
          <MenuButton>
            <Icon src="./map-pin.svg" alt="map-pin" />
            <MenuText>Regions</MenuText>
          </MenuButton>
        </Link>
        <Link href="/Search">
          <MenuButton>
            <Icon src="./search.svg" alt="search" />
            <MenuText>Search</MenuText>
          </MenuButton>
        </Link>
        <ImageContainer>
          <CenterWrapper>
            <ImageWrapper>
              <AzulejoImage src={azulejo} alt="center" />
            </ImageWrapper>
          </CenterWrapper>
        </ImageContainer>
        <Link href="/Favourite">
          <MenuButton>
            <HeartIcon src="./heart.svg" alt="favourite" />
            <MenuText>Favourites</MenuText>
          </MenuButton>
        </Link>
        <Link href="/Info">
          <MenuButton>
            <Icon src="./info.svg" alt="info" />
            <MenuText>Info</MenuText>
          </MenuButton>
        </Link>
      </Navbar>
    </MainNavContainer>
  );
};

const MainNavContainer = styled.div`
  position: absolute;
  bottom: 48px;
  z-index: 200;
`;

const Navbar = styled.div`
  position: fixed;
  background-color: #fecf81;
  height: 50px;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  height: 60px;
  position: relative;
  bottom: 5px;
`;

const CenterWrapper = styled.div`
  width: 75px;
  height: 75px;
  background: #ffe5ba;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const AzulejoImage = styled(Image)`
  border-radius: 50px;
`;

const ImageWrapper = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Icon = styled.img`
  position: absolute;
  top: 0px;
  width: 20px;
`;

const HeartIcon = styled.img`
  position: absolute;
  top: 0px;
  width: 20px;
`;

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background: transparent;
  height: 33px;
  width: 30px;
  border: none;
  position: relative;
`;

const MenuText = styled.div`
  position: absolute;
  bottom: 0px;
`;
