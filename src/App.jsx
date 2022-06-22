import { GlobalStyle } from "./components/body/GlobalStyle";
import Header from "./components/nav/index";
import NewsLetter from "./components/newsletter";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <img
        style={{ position: "fixed", right: "0px", zIndex: "-10" }}
        src="/public/images/bg-shape.svg"
        alt="background shape"
      />
      <img
        style={{ position: "fixed", zIndex: "-30" }}
        src="/public/images/background.png"
        alt="texture background"
      />
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          zIndex: "-20",
          background:
            "repeating-linear-gradient(to right, transparent, transparent 100px, rgba(196, 196, 196, 0.2) 100px, rgba(196, 196, 196, 0.2) 101px",
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <GlobalStyle />
      <Header />
      <main>
        <NewsLetter />
      </main>
    </div>
  );
}

export default App;
