import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import { v4 as uuid } from 'uuid';

function useCarousel(arr) {
  const [activeElem, setActiveElem] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActiveElem((prevCount) => {
        if (arr.length - 1 !== prevCount) {
          return prevCount + 1;
        }
        return 0;
      });
    }, 3000);
  }, []);

  return activeElem;
}

const DynamicText = styled.p`
  position: absolute;
  opacity: 0;
  ${({ isActive }) => isActive && 'opacity: 1;'}
  transition: all .3s;
  font-size: 1.3rem;
`;

function RevolvingText({ className, textArr }) {
  const [newTextArr, setNewTextArr] = useState([]);
  const dynamicNum = useCarousel(textArr);

  useEffect(() => {
    const arr = [];
    textArr.forEach((text) => {
      const obj = {};
      obj.id = uuid();
      obj.text = text;
      arr.push(obj);
    });

    setNewTextArr(() => arr);
  }, []);

  return (
    <div className={className}>
      {newTextArr.map((obj, index) => (
        <DynamicText key={obj.id} isActive={dynamicNum === index}>{obj.text}</DynamicText>
      ))}
    </div>
  );
}

const StyledRevolvingText = styled(RevolvingText)`
  display: flex;
  height: 20px;
  align-items: center;
`;

RevolvingText.propTypes = {
  className: PropTypes.string.isRequired,
  textArr: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default StyledRevolvingText;
