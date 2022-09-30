import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import styled from "styled-components";
import { GlobalStyleReset, Navigation } from "../components";
import { store } from "../store";
import { theme } from "../theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const showNavigation = router.pathname === "/Explore" ? false : true;
  return (
    <>
      <Provider store={store}>
        <MainContentContainer>
          {showNavigation && <Navigation />}
          <AppContentWrapper>
            <Component {...pageProps} />
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
  @media (min-width: 768px) {
    border-right: 1px solid ${theme.colors.orangePalette};
    border-left: 1px solid ${theme.colors.orangePalette};
  }
`;
