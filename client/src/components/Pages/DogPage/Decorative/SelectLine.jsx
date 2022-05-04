import styled from 'styled-components';

const StyledSelectLine = styled.div`
  width: 100%;
  height: 20px;
  background-color: var(--clr-davy-grey);
  ${({ isSaved }) => isSaved && 'background-color: var(--clr-strawberry);'}
`;

export default StyledSelectLine;
