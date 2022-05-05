import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import closeSrc from './close-icon.svg';

function CloseBtn({ className, clickHandler }) {
  return (
    <div className={className}>
      <input type="image" src={closeSrc} alt="close button" onClick={() => clickHandler()} />
    </div>
  );
}

const StyledCloseBtn = styled(CloseBtn)`
  border-radius: 50%;
  padding: 10px;
  background-color: var(--clr-white);
`;

CloseBtn.propTypes = {
  className: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default StyledCloseBtn;
