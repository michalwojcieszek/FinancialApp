import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";
import SettingsPopupContainer from "./components/Settings/SettingsPopupContainer";
import Spinner from "./ui/Spinner";
import { LoginProvider } from "./contexts/LoginContext";
import { useGlobal } from "./contexts/GlobalContext";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 9rem 1fr auto;
  position: relative;
  height: 100vh;
`;

const Main = styled.main`
  max-width: 54rem;
  margin: auto;
  padding: 0 3rem;
  z-index: 999;

  @media (max-width: 540px) {
    max-width: 100%;
  }
`;

function AppLayout() {
  const navigation = useNavigation();
  const isLoadingNavState = navigation.state === "loading";
  const { isLoading } = useGlobal();
  console.log(isLoading);

  return (
    <>
      {/* <StyledHeader> */}
      <StyledLayout>
        <Header />
        <Main>
          <LoginProvider>
            {(isLoading || isLoadingNavState) && <Spinner />}
            {!isLoading && !isLoadingNavState && <Outlet />}
          </LoginProvider>
        </Main>
        <Footer />
        <SettingsPopupContainer />
      </StyledLayout>
    </>
  );
}

export default AppLayout;
