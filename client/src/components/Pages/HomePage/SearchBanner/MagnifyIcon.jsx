import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Assets
import magnifyIcon from './magnify-icon.svg';

function MagnifyIcon({ className }) {
  return (
    <input className={className} type="image" src={magnifyIcon} alt="magnify glass" />
  );
}

const StyledMagnifyIcon = styled(MagnifyIcon)`
`;

MagnifyIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledMagnifyIcon;
