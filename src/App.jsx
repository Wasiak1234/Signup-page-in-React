import { useEffect, useState } from "react/cjs/react.development";
import styled, { createGlobalStyle } from "styled-components";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const App = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

      const handleResize = () => {
        setWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, [])
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        {width > 1200 && <Hero />}
      </Container>
    </>
  );
};

export default App;
