import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import StyledSearchBanner from './SearchBanner/SearchBanner';
import StyledContainer from '../Container';

function HomePage({ className }) {
  return (
    <div className={className}>
      <StyledContainer>
        <StyledSearchBanner />
      </StyledContainer>
    </div>
  );
}

const StyledHomePage = styled(HomePage)`

`;

HomePage.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledHomePage;
