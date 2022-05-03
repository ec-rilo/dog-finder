import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  max-width: 1800px;
  margin: auto;
  padding: 0 10px;
  ${({ noPadding }) => noPadding && 'padding: 0;'}
`;

export default StyledContainer;
