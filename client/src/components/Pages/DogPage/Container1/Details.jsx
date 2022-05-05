import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import dbFunctions from '../../../../dbFunctions';

// Components
import StyledHeartIcon from '../Decorative/Heart';
import StyledCategory from './Category';
import StyledRevolvingText from './RevolvingText';

const StyledTitle = styled.h1`
  display: inline-block;
  font-family: var(--fnt-dark);
  font-size: 2rem;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

function Details({
  className, isSaved, data, clickHandler,
}) {
  return (
    <div className={className}>
      <StyledTitleContainer>
        <StyledTitle>{data.name}</StyledTitle>
        <StyledHeartIcon
          isSaved={isSaved}
          clickHandler={() => {
            clickHandler();
            dbFunctions.addDog(1, data.name)
              .then(() => console.log('posted!'))
              .catch((err) => console.log(`error!: ${err}`));
          }}
        />
      </StyledTitleContainer>
      <StyledRevolvingText textArr={data.temperament.split(', ')} />
      <StyledCategory text={`${data.breed_group} Group`} />
    </div>
  );
}

const StyledDetails = styled(Details)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

Details.propTypes = {
  className: PropTypes.string.isRequired,
  isSaved: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    breed_group: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reference_image_id: PropTypes.string,
    temperament: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default StyledDetails;
