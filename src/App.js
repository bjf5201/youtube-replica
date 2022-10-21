import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./utils/Theme";
import { useLightMode } from "./utils/useLightMode";
import ErrorPage from './error-page';
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Video from "./routes/Video";
import SignIn from "./routes/SignIn";


const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [theme, themeToggler] = useLightMode();

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  
  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <BrowserRouter>
          <GlobalStyles />
          <Menu theme={theme} themeToggler={themeToggler} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
