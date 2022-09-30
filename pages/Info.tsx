import styled from "styled-components";
import Image from "next/image";

import github from "/public/github.png";
import linkedin from "/public/linkedin.png";
import { LogoText } from "../components";

const Info = () => (
  <MainContainer>
    <ProjectText>Project is designed and coded by</ProjectText>
    <MyName>Iolanta Scheifel</MyName>
    <ProjectText>
      <LogoText isEmphasized />
      <br />
      <br />
      is created to show all diversity of it's nature and famous locations. This
      app is going to grow with new features in future.
    </ProjectText>
    <SocialIcons>
      <SocialIconContainer>
        <a
          href="https://github.com/iolantascheifel/portugal-app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={github} alt="github icon" />
        </a>
      </SocialIconContainer>
      <SocialIconContainer>
        <a
          href="https://www.linkedin.com/in/iolanta-scheifel/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={linkedin} alt="linkedin icon" />
        </a>
      </SocialIconContainer>
    </SocialIcons>
    <TechnologiesContainer>
      <TechnologiesText>Technologies used:</TechnologiesText>
      <div>NEXT JS / REACT</div>
      <br />
      <div>TYPESCRIPT</div>
      <br />
      <div>REDUX</div>
      <br />
      <div>STYLED COMPONENTS</div>
    </TechnologiesContainer>
  </MainContainer>
);

export default Info;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const ProjectText = styled.div`
  display: block;
  text-align: center;
  width: 40%;
  font-size: 14px;
  margin-top: 20px;
`;

const MyName = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SocialIconContainer = styled.div`
  width: 40px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  :focus {
    transform: translateY(2px);
    transition: ease 0.2s;
  }
`;

const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: 14px;
  margin-top: 20px;
`;

const TechnologiesText = styled.div`
  margin-bottom: 15px;
`;
