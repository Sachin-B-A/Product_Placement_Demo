// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>The Best Platform for Product Placement Bidding</Title>
        <Subtitle>Empowering independent filmmakers and advertisers to collaborate for impactful storytelling.</Subtitle>
        <HeroButton>Explore Films</HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, rgba(18,18,18,1) 0%, rgba(0,0,0,1) 100%);
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px #0072ff;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #b3b3b3;
`;

const HeroButton = styled.button`
  background: linear-gradient(90deg, #0072ff, #62dafb);
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  &:hover {
    background: linear-gradient(90deg, #62dafb, #0072ff);
  }
`;
