import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Assets
import boneSrc from './bone-icon.svg';

function BoneIcon({ className, color }) {
  return (
    <svg
      className={className}
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 221.661 221.661"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M211.426,110.831c6.285-5.744,10.235-14.003,10.235-23.168c0-17.308-14.081-31.389-31.39-31.389
    c-17.308,0-31.389,14.081-31.389,31.389c0,0.389,0.016,0.773,0.029,1.158H62.749c0.014-0.385,0.029-0.77,0.029-1.158
    c0-17.308-14.081-31.389-31.39-31.389C14.081,56.274,0,70.355,0,87.663c0,9.165,3.95,17.424,10.235,23.168
    C3.95,116.575,0,124.834,0,133.999c0,17.308,14.081,31.389,31.389,31.389c17.309,0,31.39-14.081,31.39-31.389
    c0-0.389-0.016-0.773-0.029-1.158h96.163c-0.014,0.385-0.029,0.77-0.029,1.158c0,17.308,14.081,31.389,31.389,31.389
    c17.309,0,31.39-14.081,31.39-31.389C221.661,124.834,217.711,116.575,211.426,110.831z"
      />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>

  );
}

const StyledBoneIcon = styled(BoneIcon)`
  ${({ size }) => size === 'small' && 'height: 40px;'}
`;

BoneIcon.defaultProps = {
  color: 'black',
};

BoneIcon.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default StyledBoneIcon;
