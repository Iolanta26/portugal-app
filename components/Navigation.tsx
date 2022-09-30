import styled from "styled-components";
import Link from "next/link";

import Image from "next/image";
import azulejo from "../public/azulejo.png";

export const Navigation = () => {
  return (
    <MainNavContainer>
      <Navbar>
        <IconsDiv>
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
            <Link href="/Info">
              <CenterWrapper>
                <ImageWrapper>
                  <AzulejoImage src={azulejo} alt="center" />
                </ImageWrapper>
              </CenterWrapper>
            </Link>
          </ImageContainer>
          <Link href="/AddPlace">
            <MenuButton>
              <Icon src="./plus-circle.svg" alt="add-icon" />
              <MenuText>Add</MenuText>
            </MenuButton>
          </Link>
          <Link href="/Favourite">
            <MenuButton>
              <HeartIcon src="./heart.svg" alt="favourite" />
              <MenuText>Favourites</MenuText>
            </MenuButton>
          </Link>
        </IconsDiv>
      </Navbar>
    </MainNavContainer>
  );
};

const MainNavContainer = styled.div`
  visibility: hidden;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 50px;
    z-index: 1200;
    visibility: visible;
  }
`;

const Navbar = styled.div`
  position: fixed;
  background-color: #fecf81;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const IconsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  position: absolute;
  top: 7px;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  height: 60px;
  position: relative;
  bottom: 17px;
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
  cursor: pointer;
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
  width: 23px;
`;

const HeartIcon = styled.img`
  position: absolute;
  top: 0px;
  width: 23px;
`;

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background: transparent;
  height: 37px;
  width: 40px;
  border: none;
  position: relative;
`;

const MenuText = styled.div`
  position: absolute;
  bottom: 0px;
`;
