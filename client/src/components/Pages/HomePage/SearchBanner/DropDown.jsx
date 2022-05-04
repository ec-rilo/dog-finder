import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const cellSize = 15;

const StyledCell = styled.li`
  background-color: var(--clr-white);
  color: var(--clr-black);
  padding: ${cellSize}px;
  cursor: pointer;

  :hover {
    background-color: var(--clr-smalt);
    color: var(--clr-white);
  }

  transition: all .1s;
`;

const StyledTitle = styled.p`
  background-color: var(--clr-white);
  color: var(--clr-smalt);
  text-transform: uppercase;
  font-family: var(--fnt-bold);
  padding: ${cellSize}px;
`;

function DropDown({ className, dogNames }) {
  return (
    <div className={className}>
      <StyledTitle>Search Results:</StyledTitle>
      <ul>
        {dogNames.map((dog) => (
          <StyledCell key={dog.id}>{dog.name}</StyledCell>
        ))}
      </ul>
    </div>
  );
}

const StyledDropDown = styled(DropDown)`
  position: absolute;
  width: 100%;
  z-index: 999;
  opacity: 0;
  pointer-events: none;

  ${({ dogNames }) => dogNames.length > 0 && `
  opacity: 1;
  pointer-events: auto;
  `}

  margin-top: 10px;
  font-size: 1rem;
  border: 1px solid var(--clr-black);

  transition: all .5s;
`;

DropDown.defaultProps = {
  dogNames: [],
};

DropDown.propTypes = {
  className: PropTypes.string.isRequired,
  dogNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default StyledDropDown;
