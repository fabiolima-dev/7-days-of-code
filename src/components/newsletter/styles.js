import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled.div`
  width: 1178px;
  position: relative;
  margin: 0px 20px;
  display: flex;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

export const NewsLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 210px;
  max-width: 585px;

  @media screen and (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }

  h1 {
    @media screen and (max-width: 400px) {
      font-size: 64px;
    }
  }

  p {
    max-width: 481px;
  }
`;

export const Form = styled.form`
  display: flex;
  max-width: 585px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  div {
    position: relative;
    flex-grow: 1;
  }

  input {
    border-radius: 0px;
    border: none;
    height: 75px;
    width: 100%;
    padding: 0px 55px;
  }

  input::placeholder {
    font-size: 16px;
    color: rgba(32, 32, 32, 1);
    opacity: 0.3;
  }

  input:focus {
    outline: 1px solid rgba(255, 203, 71, 1);
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 17px;
    margin-top: auto;
    margin-bottom: auto;
  }

  button {
    border-radius: 0px;
    border: none;
    height: 75px;
    flex-basis: 194px;
    background-color: rgba(255, 203, 71, 1);
    color: white;
    font-size: 16px;
    max-height: 75px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  button:hover {
    opacity: 0.8;
  }
`;

export const ImageWrapper = styled.img`
  position: absolute;
  top: -30px;
  right: 0;
  z-index: -10;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
