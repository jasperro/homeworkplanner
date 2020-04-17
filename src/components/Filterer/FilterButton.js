import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.textColor};
  border: 1px solid ${props => props.theme.inactiveColor};
  background-color: rgba(40,40,40,0.05);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  
  &.active {
    background-color: ${props => props.theme.lightAccent};
    border: 1px solid ${props => props.theme.darkAccent};
  }
`;
