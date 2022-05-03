import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import imgSrc from './beagle.jpeg';

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const StyledOverlay = styled.div`
  position: absolute;
  background-color: black;
  opacity: 30%;
  width: 100%;
  height: 100%;
`;

/* ----------------- Text ----------------- */

function Text({ className, text }) {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
}

const StyledText = styled(Text)`
  color: var(--clr-white);
  font-family: var(--fnt-dark);
  font-size: 1.8rem;
  padding: 15px 0;
  border-top: 7px solid var(--clr-white);
  border-bottom: 7px solid var(--clr-white);
`;

Text.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const StyledTextContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

/* ----------------- DecoBanner1 ----------------- */

function DecoBanner1({ className }) {
  return (
    <div className={className}>
      <StyledOverlay />
      <StyledTextContainer>
        <StyledText text="Find your new bestfriend" />
      </StyledTextContainer>
      <StyledImg src={imgSrc} alt="A beagle with a ball in mouth mid run during golden hour." />
    </div>
  );
}

const StyledDecoBanner1 = styled(DecoBanner1)`
  position: relative;
  height: 300px;
  width: 100%;
`;

DecoBanner1.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledDecoBanner1;
