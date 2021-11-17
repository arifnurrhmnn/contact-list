import React from "react";
import { Nav, NavbarContainer, NavItem, NavLink, NavMenu } from "./Styles";

export default function Navbar() {
  const links = [
    { path: "/", name: "All Contact" },
    { path: "/list-contact", name: "List Contact" },
    { path: "/add-contact", name: "Add Contact" },
  ];
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavMenu>
            {links.map((link, index) => (
              <NavItem key={index}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}
