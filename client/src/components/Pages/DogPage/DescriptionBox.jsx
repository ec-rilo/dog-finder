import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import pawIcon from './Decorative/dog-paw.svg';

const borderSize = 5;

/* ----------------- IconContainer ----------------- */

const StyledImg = styled.img`
  position: absolute;
  width: 70%;
  height: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function IconContainer({ className }) {
  return (
    <div className={className}>
      <StyledImg src={pawIcon} alt="Paw Icon" />
    </div>
  );
}

const StyledIconContainer = styled(IconContainer)`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--clr-white);
  border: ${borderSize}px solid var(--clr-black);
  border-radius: 50%;

  height: 50px;
  width: 50px;
`;

IconContainer.propTypes = {
  className: PropTypes.string.isRequired,
};

/* ----------------- TextContainer ----------------- */

function DescriptionBox({ className, text }) {
  return (
    <div className={className}>
      <StyledIconContainer />
      <p>
        {text}
      </p>
    </div>
  );
}

const StyledDescriptionBox = styled(DescriptionBox)`
  position: relative;
  border: ${borderSize}px solid var(--clr-black);
  border-radius: 10px;
  padding: 50px 20px;
  max-width: 500px;
  line-height: 1.5;
  background-color: var(--clr-white);
`;

DescriptionBox.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default StyledDescriptionBox;
