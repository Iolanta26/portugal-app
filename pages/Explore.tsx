import styled from "styled-components";
import { useRouter } from "next/router";

const Explore = () => {
  const router = useRouter();
  return (
    <ContainerMain>
      <Background src="./landImage1.jpg" alt="landing" />
      <MainText>
        <Portugal>Portugal</Portugal>
        <Paragraph>in your pocket</Paragraph>
      </MainText>
      <ExploreButton onClick={() => router.push("./ChooseRegion")}>
        Start exploring
      </ExploreButton>
    </ContainerMain>
  );
};
export default Explore;

const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Portugal = styled.div`
  font-family: "Rochester", cursive;
  color: white;
  font-size: 50px;
`;

const Paragraph = styled.div`
  color: white;
  font-size: 20px;
`;

const Background = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100vh;
  width: 100vw;
  top: -10px;
`;

const MainText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  position: absolute;
  top: 380px;
`;

const ExploreButton = styled.button`
  border: none;
  background: #fcb743;
  border-radius: 15px;
  font-size: 15px;
  padding: 20px 25px;
  position: absolute;
  top: 600px;
`;
