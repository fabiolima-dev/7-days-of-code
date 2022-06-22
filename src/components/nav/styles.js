import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 361px;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 13px;

  a:hover {
    opacity: 0.8;
  }
`;
