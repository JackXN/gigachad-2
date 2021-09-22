import React, { useState } from "react";
import {
  Nav,
  Hamburger,
  Logo,
  Menu,
  MenuLink,
  MenuButton,
} from "./NavbarElements";
import GrayLogo from "../../Assets/Logos/gray-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo src={GrayLogo}/>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">News</MenuLink>
        <MenuLink href="">Tools</MenuLink>
        <MenuLink href="">About Us</MenuLink>
        <MenuLink href=""> Blog</MenuLink>
        <MenuLink href="">Events</MenuLink>
        <MenuButton>Login</MenuButton>
        <MenuButton>Join Our Server</MenuButton>
      </Menu>
    </Nav>
  );
}

export default Navbar;
