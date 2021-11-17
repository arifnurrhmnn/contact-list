import styled from "styled-components";
import { Container } from "../GlobalStyle";
import { Link } from "react-router-dom";

// import { Container } from "../GlobalStyle/GlobalStyle";

export const Nav = styled.nav`
  background-color: #ded9c4;
  box-shadow: 0px 2px 20px -10px rgba(102, 102, 102, 1);
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: "Kanit", serif; */
  font-size: 1rem;
  /* position: fixed;
  top: 0;
  left: 0; */
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  height: 100%;
  ${Container}
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  height: 100%;
  gap: 2.5rem;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  color: red;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #483434;
    /* font-weight: 500; */
  }
`;
