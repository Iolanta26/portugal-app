import Image from "next/image";
import React from "react";
import styled from "styled-components";

import github from "/public/github.png";
import linkedin from "/public/linkedin.png";

const Info = () => (
  <MainContainer>
    <ProjectText>Project is designed and coded by</ProjectText>
    <MyName>Iolanta Scheifel</MyName>
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
      <div>Next Js</div>
      <div>Typescript</div>
      <div>Context API</div>
      <div>Styled Components</div>
    </TechnologiesContainer>
  </MainContainer>
);

export default Info;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProjectText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
  margin-top: 200px;
  margin-bottom: 30px;
`;

const MyName = styled.div`
  font-family: "Rochester", cursive;
  font-size: 30px;
  margin-bottom: 30px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const SocialIconContainer = styled.div`
  width: 40px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const TechnologiesText = styled.div`
  margin-bottom: 15px;
`;
