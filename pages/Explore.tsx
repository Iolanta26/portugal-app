import styled from "styled-components";
import { useRouter } from "next/router";
import { colors } from "../theme";

const Explore = () => {
  const router = useRouter();
  return (
    <ContainerMain>
      <VideoBackground src="./portugal.mp4" autoPlay loop muted />
      <MainText>
        <Portugal>Portugal</Portugal>
        <Paragraph>in your pocket</Paragraph>
        <ExploreButton onClick={() => router.push("./ChooseRegion")}>
          Start exploring
        </ExploreButton>
      </MainText>
    </ContainerMain>
  );
};
export default Explore;

const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Portugal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rochester", cursive;
  color: white;
  font-size: 50px;
  text-shadow: 2px 2px 4px rgba (0, 0, 0, 0.75);
`;

const Paragraph = styled.div`
  color: white;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ExploreButton = styled.button`
  border: none;
  margin-top: 50px;
  background: ${colors.orangePalette};
  border-radius: 15px;
  font-size: 15px;
  padding: 15px 25px;
  color: black;
  box-shadow: -2px 7px 12px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 7px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 7px 12px 0px rgba(0, 0, 0, 0.75);

  &:hover,
  :focus {
    transform: translateY(2px);
    transition: ease 0.2s;
    box-shadow: 0 7px 7px rgba(0, 0, 0, 0.15);
  }
`;
