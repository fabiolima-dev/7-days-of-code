import { Form, HeroWrapper, ImageWrapper, NewsLetterWrapper } from "./styles";

export default function NewsLetter() {
  return (
    <HeroWrapper>
      <NewsLetterWrapper>
        <h4>Sua casa com as</h4>
        <h1>melhores plantas</h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <Form>
          <div>
            <img src="/public/images/mail.svg" />
            <input type="text" placeholder="Insira seu E-mail" />
          </div>
          <button>Assinar Newsletter</button>
        </Form>
      </NewsLetterWrapper>
      <ImageWrapper src="/public/images/imagem-hero.png" />
    </HeroWrapper>
  );
}
