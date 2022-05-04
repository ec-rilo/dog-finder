import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import imgSrc from '../Decorative/golden-retriever.jpeg';

const StyledImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

function Container2({ className }) {
  return (
    <div className={className}>
      <StyledImg src={imgSrc} alt="golden retriever" />
    </div>
  );
}

const StyledContainer2 = styled(Container2)`
  display: block;
  height: 500px;
  position: relative;
  flex-grow: 3;
`;

Container2.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledContainer2;
