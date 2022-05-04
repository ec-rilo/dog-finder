import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Category({ className, text }) {
  return (
    <div>
      <div className={className}>
        <p>{text}</p>
      </div>
    </div>
  );
}

const StyledCategory = styled(Category)`
  display: inline-block;

  padding: 10px;
  border-radius: 10px;

  background-color: var(--clr-smalt);
  color: var(--clr-white);
`;

Category.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default StyledCategory;
