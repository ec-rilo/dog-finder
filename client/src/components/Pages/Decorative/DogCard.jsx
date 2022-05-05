import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import dbFunctions from '../../../dbFunctions';

// Components
import StyledCloseBtn from './CloseBtn';

const StyledImg = styled.img`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
  background-color: var(--clr-smalt);
`;

const StyledTextContainer = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  bottom: 0;
  padding: 10px 10px;
  background-color: var(--clr-white);

  text-align: center;
  line-height: 1.5;
`;

const StyledTitle = styled.p`
  font-family: var(--fnt-bold);
  font-size: 1.3rem;
`;

const StyledCloseBtnContainer = styled.div`
  padding: 10px;
  position: absolute;
  right: 0;
`;

function DogCard({
  className, name, description, image,
}) {
  const periodIndex = description.indexOf('.') + 1;
  const newDescription = description.slice(0, periodIndex);
  return (
    <div className={className}>
      <StyledImg src={image} alt={newDescription} />
      <StyledCloseBtnContainer>
        <StyledCloseBtn clickHandler={() => dbFunctions.removeDog(1, name)} />
      </StyledCloseBtnContainer>
      <StyledTextContainer>
        <StyledTitle>{name}</StyledTitle>
        <p>{newDescription}</p>
      </StyledTextContainer>
    </div>
  );
}

const StyledDogCard = styled(DogCard)`
  position: relative;
  height: 500px;
  width: 300px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }

  transition: all .3s;
`;

DogCard.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default StyledDogCard;
