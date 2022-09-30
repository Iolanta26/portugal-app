import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import styled from "styled-components";
import { GlobalStyleReset, Navigation } from "../components";
import { store } from "../store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <MainContentContainer>
          <AppContentWrapper>
            <Component {...pageProps} />
            <Navigation />
          </AppContentWrapper>
        </MainContentContainer>
        <GlobalStyleReset />
      </Provider>
    </>
  );
};

export default MyApp;

const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const AppContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
`;
