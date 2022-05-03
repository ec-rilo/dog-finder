import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import StyledBoneIcon from './BoneIcon';

const StyledParagraph = styled.p`
  font-family: var(--fnt-dark);
`;

function Logo({ className }) {
  return (
    <div className={className}>
      <StyledParagraph>DogFinder</StyledParagraph>
      <StyledBoneIcon size="small" color="var(--clr-white)" />
    </div>
  );
}

const StyledLogo = styled(Logo)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--clr-smalt);
  color: var(--clr-white);
  font-family: var(--fnt-dark);
  font-size: 1.4rem;
  cursor: pointer;
`;

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledLogo;
