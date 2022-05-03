import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import StyledNavBar from './NavBar/NavBar';

function App({ className }) {
  return (
    <div className={className}>
      <StyledNavBar />
    </div>
  );
}

const StyledApp = styled(App)`
  width: 100%;
  margin: auto;
`;

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledApp;
