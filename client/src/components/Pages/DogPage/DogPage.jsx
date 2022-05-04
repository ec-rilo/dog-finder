import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Assets
import apiFunctions from '../../apiFunctions';
import dogIds from '../../dogIds';

// Components
import StyledContainer from '../../Container';
import StyledSelectLine from './Decorative/SelectLine';
import Container1 from './Container1/Container1';
import Container2 from './Container2/Container2';
import StyledDecoLine from '../Decorative/DecoLine';
import StyledDescriptionBox from './DescriptionBox';

const StyledUpperContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;

  @media(min-width: 800px) {
    flex-direction: row;
    max-height: 700px;
  }
`;

const StyledLowerContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-soft-peach);
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 35vh;
`;

function DogPage({ className }) {
  const [isSaved] = useState(true);
  const [dogData, setDogData] = useState({});
  const { dogName } = useParams();

  useEffect(() => {
    apiFunctions.getDogBreeds(dogName)
      .then((response) => {
        const data = response[0];
        dogData.briefData = data;
        setDogData(dogData);

        const id = dogIds[dogName];

        return axios.get(`https://api-dog-breeds.herokuapp.com/api/dog/${id}`);
      })
      .then((response) => {
        const { data } = response;
        dogData.expandedData = data;
        setDogData(dogData);
      })
      .catch((err) => console.error(err));
  }, [dogName]);

  return (
    <div className={className}>
      <StyledSelectLine isSaved={isSaved} />
      <StyledUpperContainer noPadding>
        <Container1 isSaved={isSaved} />
        <Container2 />
      </StyledUpperContainer>
      <StyledDecoLine />
      <StyledLowerContainer noWidth>
        <StyledDescriptionBox />
      </StyledLowerContainer>
    </div>
  );
}

const StyledDogPage = styled(DogPage)`
`;

DogPage.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledDogPage;
