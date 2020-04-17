import styled, { css } from 'styled-components';

import Input from '../../components/Input/';
import AssignmentInfo from '../../components/AssignmentInfo/Wrapper';
import { Wrapper as CardWrapper } from '../../components/Card/';

export default styled.div`
  display: flex;
  flex-grow: 1;
  
  ${Input} {
  }
  
  ${CardWrapper} {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  ${AssignmentInfo} {
  }

  ${props => props.left && css`
  flex-direction: column;
  `}
`;
