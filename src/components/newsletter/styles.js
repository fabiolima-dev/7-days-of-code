import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  padding: 0px 361px;
`;

export const NewsLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 210px;
  width: 585px;

  p {
    width: 481px;
  }
`;

export const ImageWrapper = styled.img`
  position: fixed;
  right: 415px;
  z-index: -10;
`;

export const Form = styled.form`
  display: flex;
  height: 75px;
  width: 585px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

  input,
  button {
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  div {
    position: relative;
    width: 100%;
  }

  input {
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
    width: 194px;
    background-color: rgba(255, 203, 71, 1);
    color: white;
    font-size: 16px;
    flex-shrink: 0;
  }

  button:hover {
    opacity: 0.8;
  }
`;
