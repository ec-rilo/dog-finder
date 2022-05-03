import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import imgSrc from './beagle-working.jpeg';

const StyledImg = styled.img`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 80px;
  width: 100%;
  background-color: var(--clr-white);
`;

function Card({ className }) {
  return (
    <div className={className}>
      <StyledImg src={imgSrc} alt="A beagle with glasses working at a desk." />
      <StyledTextContainer>
      </StyledTextContainer>
    </div>
  );
}

const StyledCard = styled(Card)`
  position: relative;
  height: 500px;
  width: 300px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`;

Card.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledCard;
