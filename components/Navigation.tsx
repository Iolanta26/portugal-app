import styled from "styled-components";
import Link from "next/link";

import Image from "next/image";
import azulejo from "../public/azulejo.png";
import { useContext, useState } from "react";
import { FavContext } from "../store";
import { HeartButton } from "./HeartButton";

export const Navigation = () => {
  const [clicked, setClicked] = useState(false);
  const placesCtx = useContext(FavContext);

  console.log("button:", placesCtx.buttonIsHighlighted);

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
        <CenterWrapper>
          <ImageWrapper>
            <AzulejoImage src={azulejo} alt="center" />
          </ImageWrapper>
        </CenterWrapper>
        <Link href="/Favourite">
          <MenuButton>
            <HeartIcon
              src="./heart.svg"
              alt="favourite"
              // $buttonHighlighted={placesCtx.buttonIsHighlighted === true}
            />
            <MenuText>Favourite</MenuText>
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
  bottom: 50px;
  z-index: 20;
`;

const Navbar = styled.div`
  background-color: #fecf81;
  height: 50px;
  position: fixed;
  width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 35px;
`;

const CenterWrapper = styled.div`
  width: 75px;
  height: 75px;
  background: #ffe5ba;
  border-radius: 50%;
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
  // display: flex;
  position: absolute;
  top: 0px;
  width: 20px;
`;

const HeartIcon = styled.img`
  // display: flex;
  position: absolute;
  top: 0px;
  // background-color: #ffd1fd;
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
