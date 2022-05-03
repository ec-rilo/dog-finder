import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function App({ className }) {
  return (
    <div className={className}>
      Hello!
    </div>
  );
}

const StyledApp = styled(App)`
  max-width: 2000px;
  margin: auto;
`;

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledApp;
