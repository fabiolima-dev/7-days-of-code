import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1178px;
  margin: 0px 20px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const NavContainer = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  overflow: auto;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }

  a {
    min-width: max-content;
  }

  a:hover {
    opacity: 0.8;
  }
`;
