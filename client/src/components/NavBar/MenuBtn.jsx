import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* ----------------- HamBtn ----------------- */

const StyledHamLayer = styled.div`
  height: 3px;
  width: 100%;
  background-color: var(--clr-white);
`;

function HamBtn({ className }) {
  return (
    <div className={className}>
      <StyledHamLayer />
      <StyledHamLayer />
      <StyledHamLayer />
    </div>
  );
}

const StyledHamBtn = styled(HamBtn)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  width: 35px;
`;

HamBtn.propTypes = {
  className: PropTypes.string.isRequired,
};

/* ----------------- MenuBtn ----------------- */

function MenuBtn({ className }) {
  return (
    <div className={className}>
      <p style={{ textTransform: 'uppercase' }}>MENU</p>
      <StyledHamBtn />
    </div>
  );
}

const StyledMenuBtn = styled(MenuBtn)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--clr-smalt);
  font-size: 1rem;
  font-family: var(--fnt-bold);
  cursor: pointer;
`;

MenuBtn.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledMenuBtn;
