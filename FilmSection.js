// src/components/FilmSection.js
import React from 'react';
import styled from 'styled-components';

const films = [
  { title: 'Film 1', description: 'An amazing adventure story' },
  { title: 'Film 2', description: 'A thrilling mystery film' },
  { title: 'Film 3', description: 'A heartwarming drama' },
];

const FilmSection = () => {
  return (
    <Section>
      <Title>Featured Films</Title>
      <FilmGrid>
        {films.map((film, index) => (
          <FilmCard key={index}>
            <FilmTitle>{film.title}</FilmTitle>
            <FilmDesc>{film.description}</FilmDesc>
            <FilmButton>Bid Now</FilmButton>
          </FilmCard>
        ))}
      </FilmGrid>
    </Section>
  );
};

export default FilmSection;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #121212;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const FilmGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FilmCard = styled.div`
  background-color: #1c1c1c;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
`;

const FilmTitle = styled.h3`
  margin-bottom: 1rem;
`;

const FilmDesc = styled.p`
  margin-bottom: 1.5rem;
`;

const FilmButton = styled.button`
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
