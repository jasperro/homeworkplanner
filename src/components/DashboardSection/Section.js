import styled, { css } from 'styled-components';

import { small } from '../Heading';

export default styled.div`
  ${props => props.row && css`
      grid-row: ${props.row};
  `}
  
  ${props => props.padding && css`
     padding: ${props.padding}rem;
  `}
  
  /*border-right: 2px solid ${props => props.theme.lightAccent};*/
  background-color: ${props => props.theme.backgroundCard};
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 0.5rem;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  
  ${small} {
    padding: 2rem;
    /*border-top: 2px solid ${props => props.theme.lightAccent};*/
    /*border-bottom: 2px solid ${props => props.theme.lightAccent}*/
  }
`;
