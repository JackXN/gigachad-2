import styled from "styled-components";
import { theme } from "../../utils/Theme";

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;
  display: none;

  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 760px) {
    display: flex;
  }
`;

export const Logo = styled.img`
padding: 2rem 0;
height 69px;
width: 69px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 800px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: ${theme.fontSizes.small};
  color: white;
  font-family: ${theme.fonts.mont}; 
  float:left;

@media(max-width: 750px) {
    background: ${theme.colors.dark};
  height: 140px;
  transform: skew(-10deg) rotate(2deg);
  -webkit-transform: skew(-10deg) rotate(2deg);
  -moz-transform: skew(-10deg) rotate(2deg);
margin: 10px;
}



  &:hover {
    color: white;
`;

export const MenuButton = styled.button`
  border-radius: 15px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background: transparent;
  border: 1px solid gray;
  color: white;
  margin: 10px;
`;

export const MenuLinks = styled.div`


@media(min-width: 1200px) {
    padding-right: 250px;
}

@media(min-width: 1300px) {
    padding-right: 340px;
}

@media(min-width: 1400px) {
    padding-right: 420px;
}


`;
