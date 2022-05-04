import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import StyledSearchBar from './SearchBar';

// Components
import StyledDropDown from './DropDown';

const StyledSearchContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
`;

function SearchBanner({ className }) {
  const [dogNames, setDogNames] = useState([]);

  return (
    <div className={className}>
      <p style={{ fontFamily: 'var(--fnt-dark)' }}>Search for a breed</p>
      <StyledSearchContainer>
        <StyledSearchBar setDogNames={setDogNames} />
        <StyledDropDown dogNames={dogNames} />
      </StyledSearchContainer>
    </div>
  );
}

const StyledSearchBanner = styled(SearchBanner)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  font-size: 2rem;
  padding: 40px 0;
`;

SearchBanner.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledSearchBanner;
