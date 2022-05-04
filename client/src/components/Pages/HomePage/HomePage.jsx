import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import StyledAboutPage from '../AboutPage/AboutPage';
import StyledSearchBanner from './SearchBanner/SearchBanner';
import StyledContainer from '../../Container';
import StyledDecoBanner1 from '../Decorative/DecoBanner1';
import StyledDecoLine from '../Decorative/DecoLine';

function HomePage({ className }) {
  return (
    <div className={className}>
      <StyledContainer>
        <StyledSearchBanner />
      </StyledContainer>
      <StyledContainer noPadding>
        <StyledDecoBanner1 />
      </StyledContainer>
      <StyledDecoLine />
      <StyledAboutPage />
    </div>
  );
}

const StyledHomePage = styled(HomePage)`

`;

HomePage.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledHomePage;
