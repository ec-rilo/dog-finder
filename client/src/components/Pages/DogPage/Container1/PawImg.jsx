import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import pawSrc from '../Decorative/dog-paw.svg';

const StyledImg = styled.img`
  height: 100%;
  width: 100%:
  object-fit: contain;
`;

function PawImg({ className }) {
  return (
    <div className={className}>
      <StyledImg src={pawSrc} alt="paw print" />
    </div>
  );
}

const StyledPawImg = styled(PawImg)`
  position: absolute;
  height: 150px;
  width: 150px;
  bottom: -35px;
  right: -35px;
  transform: rotate(-35deg);

  @media(min-width: 800px) {
    height: 200px;
  width: 200px;
  }
`;

PawImg.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledPawImg;
