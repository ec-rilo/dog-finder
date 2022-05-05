import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import StyledContainer from '../Container';
import StyledMenuBtn from './MenuBtn';
import StyledLogo from '../Logo/Logo';

const StyledNavContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const StyledOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const StyledOption = styled.p`
  text-transform: uppercase;
  color: var(--clr-white);
`;

const StyledCenteredDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

const StyledUser = styled.p`
  font-size: 1rem;
`;

function NavBar({ className }) {
  return (
    <nav className={className}>
      <StyledNavContainer>

        <StyledDiv>
          <StyledLogo />
          <StyledOptionsContainer>
            <Link to="my_dogs" style={{ textDecoration: 'none' }}>
              <StyledOption>My Dogs</StyledOption>
            </Link>
          </StyledOptionsContainer>
        </StyledDiv>

        <StyledMenuBtn />
        <StyledCenteredDiv>
          <StyledUser>Welcome Edgar</StyledUser>
        </StyledCenteredDiv>
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
