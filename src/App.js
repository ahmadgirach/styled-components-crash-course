import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import Header from "./components/Header";
import { Container } from "./components/Styled/Container.styled";
import { GlobalStyles } from "./components/Styled/Global";

import content from "./content";
import Card from "./components/Card";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
