import styled from "styled-components";
import { useRouter } from "next/router";
import { colors } from "../theme";

const Explore = () => {
  const router = useRouter();
  return (
    <ContainerMain>
      <Background src="./landing-image.jpg" alt="landing" loading="eager" />
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
`;

const Portugal = styled.div`
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

const Background = styled.img`
  position: relative;
  object-fit: cover;
  height: 620px;
  width: 100%;
  top: -30px;
`;

const MainText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  position: absolute;
  top: 300px;
`;

const ExploreButton = styled.button`
  border: none;
  background: ${colors.orangePalette};
  border-radius: 15px;
  font-size: 15px;
  padding: 15px 25px;
  position: absolute;
  top: 500px;
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
