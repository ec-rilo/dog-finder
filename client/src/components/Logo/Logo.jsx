import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import StyledBoneIcon from './BoneIcon';

const StyledParagraph = styled.p`
  font-family: var(--fnt-dark);
`;

function Logo({ className }) {
  return (
    <Link to="/" className={className} style={{ textDecoration: 'none' }}>
      <StyledParagraph>DogFinder</StyledParagraph>
      <StyledBoneIcon size="small" color="var(--clr-white)" />
    </Link>
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
