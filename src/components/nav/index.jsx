import { Header, NavContainer } from "./styles";

export default function Navbar() {
  return (
    <Header>
      <img src="/public/images/logo.svg" alt="Casa Verde Logo" />
      <NavContainer>
        <a href="/">Como fazer</a>/<a href="/">Ofertas</a>/
        <a href="/">Depoimentos</a>/<a href="/">Videos</a>/
        <a href="/">Meu carrinho</a>
      </NavContainer>
    </Header>
  );
}
