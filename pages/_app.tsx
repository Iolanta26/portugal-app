import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import styled from "styled-components";
import { GlobalStyleReset, Navigation } from "../components";
import { store } from "../store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <PhoneMockup>
          <CameraContainer>
            <Speaker></Speaker>
            <Camera></Camera>
          </CameraContainer>
          <Component {...pageProps} />
          <Navigation />
        </PhoneMockup>

        <GlobalStyleReset />
      </Provider>
    </>
  );
};

export default MyApp;

const PhoneMockup = styled.div`
  position: relative;
  z-index: 5000;
  margin: 40px auto;
  width: 320px;
  height: 650px;
  z-index: 5000;
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919,
    0px 0px 0px 20px #111;
  overflow: hidden;
  overflow-y: scroll;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5000;
  }
`;

const CameraContainer = styled.div`
  top: 0;
  left: 65px;
  width: 200px;
  height: 30px;
  background-color: #1f1f1f;
  border-radius: 0px 0px 40px 40px;
  position: sticky;
  z-index: 5000;
`;

const Speaker = styled.div`
  position: absolute;
  display: block;
  color: transparent;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 6px);
  height: 8px;
  width: 30%;
  background-color: #101010;
  border-radius: 8px;
  box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
  z-index: 201;
`;

const Camera = styled.div`
  position: absolute;
  display: block;
  color: transparent;
  top: 0px;
  left: -20px;
  transform: translate(180px, 4px);
  width: 12px;
  height: 12px;
  background-color: #101010;
  border-radius: 12px;
  box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);
  z-index: 201;

  &::after {
    content: "";
    position: absolute;
    background-color: #2d4d76;
    width: 6px;
    height: 6px;
    top: 2px;
    left: 2px;
    top: 3px;
    left: 3px;
    display: block;
    border-radius: 4px;
    box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
  }
`;
