import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import StyledContainer from '../../Container';
import StyledSelectLine from './Decorative/SelectLine';
import Container1 from './Container1/Container1';
import Container2 from './Container2/Container2';
import StyledDecoLine from '../Decorative/DecoLine';

const StyledUpperContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;

  @media(min-width: 800px) {
    flex-direction: row;
    max-height: 700px;
  }
`;

function DogPage({ className }) {
  const [isSaved] = useState(true);

  return (
    <div className={className}>
      <StyledSelectLine isSaved={isSaved} />
      <StyledUpperContainer noPadding>
        <Container1 isSaved={isSaved} />
        <Container2 />
      </StyledUpperContainer>
      <StyledDecoLine />
    </div>
  );
}

const StyledDogPage = styled(DogPage)`
`;

DogPage.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledDogPage;
