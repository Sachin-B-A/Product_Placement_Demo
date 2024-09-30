// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <FooterText>© 2024 FilmBid. All rights reserved.</FooterText>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  padding: 2rem;
  background-color: #1c1c1c;
  text-align: center;
  color: white;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
`;
