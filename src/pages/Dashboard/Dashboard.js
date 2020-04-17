import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.background};
  position: relative;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2rem;
  padding: 4rem 2rem;
  flex-grow: 1;
`;
