import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import StyledContainer from '../Container';
import StyledLogo from '../Logo/Logo';

const StyledFooterContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
  gap: 10px;
  height: 100%;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px
`;

const StyledLink = styled.a`
  color: var(--clr-white);
  text-decoration: none;
`;

function Footer({ className }) {
  return (
    <footer className={className}>
      <StyledFooterContainer>
        <StyledLogo />
        <SocialMediaContainer>
          <StyledLink href="https://github.com/ec-rilo" target="_blank" rel="noreferrer">Github</StyledLink>
          <StyledLink href="https://www.instagram.com/edgarthedeveloper/" target="_blank" rel="noreferrer">Instagram</StyledLink>
          <StyledLink href="https://www.linkedin.com/in/ecarrillo046/" target="_blank" rel="noreferrer">Linkedin</StyledLink>
        </SocialMediaContainer>
      </StyledFooterContainer>
    </footer>
  );
}

const StyledFooter = styled(Footer)`
  color: var(--clr-white);
  background-color: var(--clr-smalt);
  height: 70px;
  @media (min-width: 600px) {
    height: 50px;
  }
  padding: 20px 0;
`;

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledFooter;
