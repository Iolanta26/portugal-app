import styled from "styled-components";
import { useRouter } from "next/router";

const Explore = () => {
  const router = useRouter();
  return (
    <ContainerMain>
      <Background src="./landImage.jpg" alt="landing" />
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

const Portugal = styled.div``;

const Paragraph = styled.div``;

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
  top: 30px;
  color: black;
`;

const ExploreButton = styled.button`
  border: none;
  background: #fcb743;
  border-radius: 15px;
  font-size: 15px;
  padding: 20px 25px;
  position: absolute;
  top: 100px;
`;
