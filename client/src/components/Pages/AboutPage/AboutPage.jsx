import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import StyledCard from '../Decorative/Card';
import StyledContainer from '../../Container';
import StyledTextContainer from './TextContainer';

const StyledAboutContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
  }
  gap: 100px;
`;

const Title = styled.h1`
  color: var(--clr-smalt);
  font-family: var(--fnt-dark);
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
`;

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AboutPage({ className }) {
  return (
    <div className={className}>
      <Title>About</Title>
      <StyledAboutContainer>
        <StyledCardContainer>
          <StyledCard />
        </StyledCardContainer>
        <StyledCardContainer>
          <StyledTextContainer />
        </StyledCardContainer>
      </StyledAboutContainer>
    </div>
  );
}

const StyledAboutPage = styled(AboutPage)`
  padding: 50px 0;
`;

AboutPage.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledAboutPage;
