import styled from "styled-components";
import { useRouter } from "next/router";
// import landing from "../public/landing.jpg";

const Explore = () => {
  const router = useRouter();
  return (
    <>
      <Container>
        {/* <Background src="./landImage.jpg" alt="landing"></Background> */}
        <MainText>
          <div>Portugal</div>
          <div>in your pocket</div>
        </MainText>
        <ExploreButton onClick={() => router.push("./ChooseRegion")}>
          Start exploring
        </ExploreButton>
      </Container>
    </>
  );
};
export default Explore;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: calc(100%-80px);
  // position: relative;
  background-image: url("./landImage.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // overflow: hidden;
`;

const Background = styled.img`
  height: fit-content;
`;

const MainText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  // position: absolute;
  color: white;
`;

const ExploreButton = styled.button`
  border: none;
  background: #fcb743;
  border-radius: 15px;
  font-size: 15px;
  padding: 20px 25px;
  position: absolute;
`;
