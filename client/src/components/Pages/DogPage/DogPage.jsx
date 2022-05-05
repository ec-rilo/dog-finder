import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// Assets
import apiFunctions from '../../apiFunctions';
import loadingSrc from '../Decorative/loading_icon.gif';

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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function DogPage({ className }) {
  const [isSaved] = useState(true);
  const [dogData, setDogData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { dogName } = useParams();

  useEffect(() => {
    apiFunctions.getSingleDog(dogName)
      .then((response) => {
        setDogData(response);
      })
      .catch((err) => console.error(err));
  }, [dogName]);

  useEffect(() => {
    if (dogData.expandedData && dogData.briefData) {
      setIsLoaded(true);
    }
  }, [dogData]);

  return (
    <div className={className}>
      {isLoaded
        ? (
          <div>
            <StyledSelectLine isSaved={isSaved} />
            <StyledUpperContainer noPadding>
              <Container1 isSaved={isSaved} data={dogData.briefData} />
              <Container2 imgSrc={dogData.expandedData.image} />
            </StyledUpperContainer>
            <StyledDecoLine />
            <StyledLowerContainer noWidth>
              <StyledDescriptionBox text={dogData.expandedData.description} />
            </StyledLowerContainer>
          </div>
        )
        : (
          <LoadingContainer>
            <img src={loadingSrc} alt="...loading" />
          </LoadingContainer>
        )}
    </div>
  );
}

const StyledDogPage = styled(DogPage)`
`;

DogPage.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledDogPage;
