import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import { v4 as uuid } from 'uuid';
import dbFunctions from '../../../dbFunctions';
import apiFunctions from '../../apiFunctions';

// Components
import StyledDogCard from '../Decorative/DogCard';

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-family: var(--fnt-dark);
  color: var(--clr-black);
  text-align: center;
`;

const StyledDogsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
`;

function MyDogsPage({ className }) {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    dbFunctions.getDogs(1)
      .then((response) => {
        const promisesArr = [];

        response.forEach((data) => {
          promisesArr.push(apiFunctions.getSingleDog(data.dog_name));
        });

        return Promise.all(promisesArr);
      })
      .then((response) => {
        setDogData(response);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <div className={className}>
      <StyledTitle>My Dogs</StyledTitle>
      <StyledDogsContainer>
        {dogData.map((data) => (
          <Link key={uuid()} to={`/breeds/${data.briefData.name}`}>
            <StyledDogCard
              name={data.briefData.name}
              description={data.expandedData.description}
              image={data.expandedData.image}
            />
          </Link>
        ))}
      </StyledDogsContainer>
    </div>
  );
}

const StyledMyDogsPage = styled(MyDogsPage)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px 0;
  min-height: 80vh;
`;

MyDogsPage.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledMyDogsPage;
