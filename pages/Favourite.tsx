import styled from "styled-components";
import { useContext } from "react";
import { useRouter } from "next/router";

import { BackButton, PlaceCard } from "../components";
import { FavContext } from "../store";
import { RegionVisual } from "../types";

import Image from "next/image";
import back from "../public/back-icon.svg";

const Favourite = () => {
  const router = useRouter();
  const placesCtx = useContext(FavContext);

  if (!placesCtx.selectedPlaces) {
    console.log("no content");
  } else console.log("doesn't work");

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
          {placesCtx.selectedPlaces.length === 0 ? (
            <NoContentText>
              Start choosing you favourite places to see them here
            </NoContentText>
          ) : (
            placesCtx.selectedPlaces.map((place) => (
              <div key={"fav" + `${place.location}` + `${place.id}`}>
                <PlaceCard
                  place={place}
                  regionVisual={place.visual as RegionVisual}
                />
              </div>
            ))
          )}
        </MainListContainer>
      </div>
    </PageContainer>
  );
};

const TextWrapper = styled.div`
  margin-top: 10px;
  color: #13406c;
  width: 300px;
  margin-left: 60px;
`;

const Places = styled.div`
  font-size: 20px;
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

const NoContentText = styled.div`
  width: 220px;
  margin-top: 100px;
  font-size: 14px;
  text-align: center;
`;

export default Favourite;
