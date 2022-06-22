import { GlobalStyle } from "./styles/GlobalStyle";
import Background from "./components/background";
import Header from "./components/nav";
import NewsLetter from "./components/newsletter";

function App() {
  return (
    <>
      <GlobalStyle />
      <Background />
      <Header />
      <main>
        <NewsLetter />
      </main>
    </>
  );
}

export default App;
