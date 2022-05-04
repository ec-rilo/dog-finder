import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import MagnifyIcon from './MagnifyIcon';
import apiFunctions from '../../../apiFunctions';

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

const formatData = (data) => {
  const newData = [];

  data.forEach((dog) => {
    const obj = {};
    obj.name = dog.name;
    obj.id = dog.id;
    newData.push(obj);
  });

  return newData;
};

function SearchBar({ className, setDogNames }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length > 2 && text.length < 40) {
      apiFunctions.getDogBreeds(text)
        .then((dogData) => {
          if (dogData.length > 0) {
            const names = formatData(dogData);
            setDogNames(names);
          }
        })
        .catch((err) => console.error(err));
    } else {
      setDogNames([]);
    }
  }, [text]);

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
  max-width: 400px;
`;

SearchBar.propTypes = {
  className: PropTypes.string.isRequired,
  setDogNames: PropTypes.func.isRequired,
};

export default StyledSearchBar;
