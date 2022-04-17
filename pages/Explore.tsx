import styled from "styled-components";
import { useRouter } from "next/router";
// import landing from "../public/landing.jpg";

const Explore = () => {
  const router = useRouter();
  return (
    <Container>
      <MainText>
        <div>Portugal</div>
        <div>in your pocket</div>
      </MainText>
      <ExploreButton onClick={() => router.push("./ChooseRegion")}>
        Start exploring
      </ExploreButton>
    </Container>
  );
};
export default Explore;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  position: relative;
  background-image: url("./landing.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// const LandingImage = styled.img``;

const MainText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

const ExploreButton = styled.button`
  border: none;
  background: #fcb743;
  border-radius: 15px;
  font-size: 15px;
  padding: 20px 25px;
`;
