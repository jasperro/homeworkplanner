import styled, { css } from 'styled-components';

export default styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  
  li:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  li:last-child {
    margin-bottom: 1.2rem;
  };

  ${props => props.menu && css`
    li:first-child {
      margin-bottom: 1.2rem;
      margin-top: 1.2rem;
    }
  `}
`;
