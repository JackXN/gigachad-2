import React, { useState } from "react";
import {
  Nav,
  Hamburger,
  Logo,
  Menu,
  MenuLink,
  MenuButton,
  MenuLinks,
} from "./NavbarElements";
import GrayLogo from "../../Assets/Logos/gray-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo src={GrayLogo} />
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
          <MenuLinks>
        <MenuLink href="">News</MenuLink>
        <MenuLink href="">Tools</MenuLink>
        <MenuLink href="">About Us</MenuLink>
        <MenuLink href=""> Blog</MenuLink>
        <MenuLink href="">Events</MenuLink>
        </MenuLinks>
        <MenuButton>Login</MenuButton>
        <MenuButton>Join Our Server</MenuButton>
      </Menu>
    </Nav>
  );
}

export default Navbar;
