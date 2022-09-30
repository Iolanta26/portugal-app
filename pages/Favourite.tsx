import styled from "styled-components";
import { useRouter } from "next/router";

import {
  BackButtonWithText,
  BackButtonWrapper,
  LogoText,
  PlaceCard,
} from "../components";

import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

const Favourite = () => {
  const router = useRouter();

  const storeData = useSelector((state: RootState) => state.reducer);

  return (
    <PageContainer>
      <LogoText />
      <BackButtonWrapper>
        <BackButtonWithText
          onClick={() => router.back()}
          mainText="Your favourite locations"
          fontWeight
        />
      </BackButtonWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MainListContainer>
          {storeData.favouritePlaces.length === 0 ? (
            <NoDataText>
              Start choosing your favourite locations to see them here
            </NoDataText>
          ) : (
            storeData.favouritePlaces.map((place: any) => (
              <div key={"fav" + `${place.id}`}>
                <PlaceCard
                  place={place}
                  regionVisual={place.visual}
                  isDeleteButton
                />
              </div>
            ))
          )}
        </MainListContainer>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const MainListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin-top: 10px;
`;

const NoDataText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  width: 60vw;
  margin-top: 30px;
  font-size: 14px;
`;

export default Favourite;
