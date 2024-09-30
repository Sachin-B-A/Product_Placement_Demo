// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>FilmBid</Logo>
      <NavMenu>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Films</NavItem>
        <NavItem>Contact</NavItem>
      </NavMenu>
      <CTAButton>Get Started</CTAButton>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.div`
  cursor: pointer;
  &:hover {
    color: #62dafb;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(90deg, #0072ff, #62dafb);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  &:hover {
    background: linear-gradient(90deg, #62dafb, #0072ff);
  }
`;
