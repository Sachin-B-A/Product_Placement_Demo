// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';

const testimonials = [
  { name: 'John Doe', text: 'This platform helped me fund my film!' },
  { name: 'Jane Smith', text: 'Great opportunity for small filmmakers!' },
  { name: 'Mike Johnson', text: 'I love the bidding system. It’s simple and effective.' },
];

const Testimonials = () => {
  return (
    <Section>
      <Title>What Our Users Say</Title>
      <TestimonialGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <TestimonialName>- {testimonial.name}</TestimonialName>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </Section>
  );
};

export default Testimonials;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #121212;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background-color: #1c1c1c;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
`;

const TestimonialText = styled.p`
  margin-bottom: 1rem;
  font-style: italic;
`;

const TestimonialName = styled.p`
  font-size: 0.875rem;
  color: #62dafb;
`;
