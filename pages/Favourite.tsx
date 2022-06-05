import Image from "next/image";
import React, { useContext } from "react";
import { BackWrapper, PlaceCard } from "../components";

import { Place, RegionVisual } from "../types";

import back from "../public/back-icon.svg";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FavContext } from "../store/appContext";

type Props = {
  place: Place;
  regionVisual: RegionVisual;
};

const Favourite = ({ regionVisual }: Props) => {
  const router = useRouter();
  const placesCtx = useContext(FavContext);

  return (
    <PageContainer>
      <BackWrapper onClick={() => router.back()}>
        <Image src={back} alt="back" />
      </BackWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextWrapper>
          <Places>Your favourite locations</Places>
        </TextWrapper>
        <MainListContainer>
          {placesCtx.selectedPlaces.map((place) => (
            <div key={"fav" + `${place.id}`}>
              <PlaceCard place={place} regionVisual={regionVisual} />
            </div>
          ))}
        </MainListContainer>
      </div>
    </PageContainer>
  );
};

const TextWrapper = styled.div`
  margin-top: 50px;
  color: #13406c;
  width: 300px;
`;

const Places = styled.div`
  font-size: 30px;
`;

const PageContainer = styled.div`
  padding-bottom: 100px;
`;

const MainListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 350px;
  margin-top: 10px;
`;

const FavouriteCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 170px;
  overflow: hidden;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  background-color: #fa3593;
`;

const ShortDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  width: 135px;
  position: absolute;
  right: 5px;
  color: #fff3e0;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Location = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

const PlaceImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  position: absolute;
  border-radius: 15px;
  left: 10px;
`;

export default Favourite;
