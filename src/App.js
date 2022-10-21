import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./utils/Theme";
import { useLightMode } from "./utils/useLightMode";
import ErrorPage from './error-page';
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Video from "./routes/Video";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "video/:id",
    element: <Video />,
  },
]);

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
        <GlobalStyles />
        <Menu theme={theme} themeToggler={themeToggler} />
        <Main>
          <Navbar />
          <Wrapper>
            <RouterProvider router={router} />
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
