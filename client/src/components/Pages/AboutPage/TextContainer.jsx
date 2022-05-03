import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components

const Title = styled.h1`
  font-family: var(--fnt-bold);
  font-size: 1.4rem;
`;

const StyledP = styled.p`
  line-height: 1.5;
`;

function TextContainer({ className }) {
  return (
    <div className={className}>
      <Title>Software Engineer - Dog Lover</Title>
      <StyledP>
        I have a love for dogs and wanted to make it easy for someone that is looking or
        planning to adopt to be able to easily keep track of who their future best friend
        could be.
      </StyledP>
      <StyledP>So DogFinder was born!</StyledP>
      <StyledP>
        Having the ability to search through dog breeds and save the ones you&aposre looking
        to adopt has never been easier. Say good bye to your notes app and hello to DogFinder!
      </StyledP>
    </div>
  );
}

const StyledTextContainer = styled(TextContainer)`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 900px) {
    text-align: start;
  }
  gap: 20px;
  max-width: 550px;
`;

TextContainer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledTextContainer;
