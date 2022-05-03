import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import MagnifyIcon from './MagnifyIcon';

const StyledInput = styled.input`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: transparent;

  ::placeholder {
    color: var(--clr-black);
  }
`;

function SearchBar({ className }) {
  const [text, setText] = useState('');

  return (
    <div className={className}>
      <StyledInput onChange={(e) => setText(e.target.value)} type="text" placeholder="Search retriever, terrier, etc." />
      <MagnifyIcon />
    </div>
  );
}

const StyledSearchBar = styled(SearchBar)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
  height: 50px;
  background-color: var(--clr-soft-peach);
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
`;

SearchBar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledSearchBar;
