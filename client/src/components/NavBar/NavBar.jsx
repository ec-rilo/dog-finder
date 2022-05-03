import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import StyledContainer from '../Container';
import StyledMenuBtn from './MenuBtn';
import StyledLogo from '../Logo/Logo';

const StyledNavContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

function NavBar({ className }) {
  return (
    <nav className={className}>
      <StyledNavContainer>
        <StyledLogo />
        <StyledMenuBtn />
      </StyledNavContainer>
    </nav>
  );
}

const StyledNavBar = styled(NavBar)`
  color: var(--clr-white);
  background-color: var(--clr-smalt);
  height: 70px;
`;

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledNavBar;
