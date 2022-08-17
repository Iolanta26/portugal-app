import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { BackButton, PlaceCard } from "../components";
import { Place, RegionVisual } from "../types";

import Image from "next/image";
import back from "../public/back-icon.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PlacesState, State } from "../store/reducers/favouriteReducer";
import { ActionType } from "../store";

type Props = {
  place: Place;
  regionVisual: RegionVisual;
};

const Favourite = ({ place, regionVisual }: Props) => {
  // const [favouriteList, setFavouriteList] = useState();
  const router = useRouter();

  const storeData = useSelector((state: State) => state);
  console.log("storeData:", storeData);

  // const listOfFavouritePlaces = useSelector(
  //   (favouritePlaces: State) => favouritePlaces
  // );

  // const favouritePlaces = useSelector<PlacesState>(
  //   (state) => state.favouritePlaces
  // );

  // const favouriteLocations = useSelector((state) => state.favouritePlaces);

  console.log("favouriteList:", storeData);
  // setFavouriteList(listOfFavouritePlaces)

  return (
    <PageContainer>
      <div style={{ marginLeft: "10px" }}>
        <BackButton onClick={() => router.back()}>
          <Image src={back} alt="back" />
        </BackButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextWrapper>
          <Places>
            Your favourite <br /> locations
          </Places>
        </TextWrapper>
        <MainListContainer>
          {/* {favouriteLocations.map((place: any) => (
            <div key={"fav" + `${place.id}`}>
              <PlaceCard
                place={place}
                regionVisual={regionVisual as RegionVisual}
              />
            </div>
          ))} */}
          {/* ))} */}
          {/* {favouriteList.favouritePlaces.map((place: any) => (
            <div key={"fav" + `${place.id}`}>
              <PlaceCard
                place={place}
                regionVisual={regionVisual as RegionVisual}
              />
            </div>
          ))} */}
          {/* {arrayOfFavourites.length === 0 ? (
            <NoContentText>
              Start choosing you favourite places to see them here
            </NoContentText>
          ) : (
            arrayOfFavourites.map((place) => (
              <div key={"fav" + `${place.id}`}>
                <PlaceCard
                  place={place}
                  regionVisual={regionVisual as RegionVisual}
                />
              </div>
            ))
          )} */}
        </MainListContainer>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding-bottom: 100px;
`;

const TextWrapper = styled.div`
  margin-top: 10px;
  color: #13406c;
  width: 300px;
  margin-left: 60px;
`;

const Places = styled.div`
  font-size: 20px;
`;

const MainListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 350px;
  margin-top: 10px;
`;

const NoContentText = styled.div`
  width: 220px;
  margin-top: 100px;
  font-size: 14px;
  text-align: center;
`;

export default Favourite;
