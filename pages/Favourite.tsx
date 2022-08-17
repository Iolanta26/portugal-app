import styled from "styled-components";
import { useRouter } from "next/router";

import { BackButton, PlaceCard } from "../components";

import Image from "next/image";
import back from "../public/back-icon.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

const Favourite = () => {
  const router = useRouter();

  const storeData = useSelector((state: RootState) => state.reducer);
  console.log("storeData:", storeData);

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
          {storeData.favouritePlaces.map((place: any) => (
            <div key={"fav" + `${place.id}`}>
              <PlaceCard place={place} regionVisual={place.visual} />
            </div>
          ))}
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
