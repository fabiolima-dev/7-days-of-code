import styled from "styled-components";

export const Shape = styled.img`
  position: fixed;
  right: 0px;
  z-index: -10;
`;

export const Texture = styled.img`
  position: fixed;
  z-index: -30;
`;

export const Stripes = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -20;
  background: repeating-linear-gradient(
    to right,
    transparent,
    transparent 100px,
    rgba(196, 196, 196, 0.2) 100px,
    rgba(196, 196, 196, 0.2) 101px
  );
`;
