// src/components/BiddingSection.js
import React from 'react';
import styled from 'styled-components';

const bids = [
  { product: 'Brand A', film: 'Film 1', currentBid: '$500' },
  { product: 'Brand B', film: 'Film 2', currentBid: '$700' },
  { product: 'Brand C', film: 'Film 3', currentBid: '$1000' },
];

const BiddingSection = () => {
  return (
    <Section>
      <Title>Active Bidding Opportunities</Title>
      <BidGrid>
        {bids.map((bid, index) => (
          <BidCard key={index}>
            <ProductName>{bid.product}</ProductName>
            <FilmName>{bid.film}</FilmName>
            <CurrentBid>{bid.currentBid}</CurrentBid>
            <BidButton>Place a Bid</BidButton>
          </BidCard>
        ))}
      </BidGrid>
    </Section>
  );
};

export default BiddingSection;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #181818;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const BidGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const BidCard = styled.div`
  background-color: #242424;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
`;

const ProductName = styled.h3`
  margin-bottom: 0.5rem;
`;

const FilmName = styled.p`
  margin-bottom: 1rem;
`;

const CurrentBid = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #00ff00;
`;

const BidButton = styled.button`
  background: linear-gradient(90deg, #0072ff, #62dafb);
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  color: white;
  &:hover {
    background: linear-gradient(90deg, #62dafb, #0072ff);
  }
`;
