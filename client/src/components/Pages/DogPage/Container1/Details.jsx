import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import StyledHeartIcon from '../Decorative/Heart';
import StyledCategory from './Category';

const StyledTitle = styled.h1`
  display: inline-block;
  font-family: var(--fnt-dark);
  font-size: 2rem;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const StyledSubTitle = styled.p`
  font-size: 1.3rem;
`;

function Details({ className, isSaved }) {
  return (
    <div className={className}>
      <StyledTitleContainer>
        <StyledTitle>German Shepherd Dog</StyledTitle>
        <StyledHeartIcon isSaved={isSaved} />
      </StyledTitleContainer>
      <StyledSubTitle>Intelligent-Kind</StyledSubTitle>
      <StyledCategory text="Sporting Group" />
    </div>
  );
}

const StyledDetails = styled(Details)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

Details.propTypes = {
  className: PropTypes.string.isRequired,
  isSaved: PropTypes.bool.isRequired,
};

export default StyledDetails;
