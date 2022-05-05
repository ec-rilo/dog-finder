import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import StyledDetails from './Details';
import StyledPawImg from './PawImg';

function Container1({ className, isSaved, data }) {
  return (
    <div className={className}>
      <StyledDetails isSaved={isSaved} data={data} />
      <StyledPawImg />
    </div>
  );
}

const StyledContainer1 = styled(Container1)`
  display: flex;
  position: relative;
  padding: 40px 20px;
  overflow: hidden;
  flex-grow: 1;

  @media(min-width: 600px) {
    align-items: center;
    padding-left: 50px;
  }
`;

Container1.propTypes = {
  className: PropTypes.string.isRequired,
  isSaved: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    breed_group: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reference_image_id: PropTypes.string,
    temperament: PropTypes.string.isRequired,
  }).isRequired,
};

export default StyledContainer1;
