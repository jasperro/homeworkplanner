import styled from "styled-components";
import {NavLink} from "react-router-dom";

export default styled(NavLink)`
  transition: all .2s;
  color: ${props => props.theme.textColor};
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 4px;
  outline: none;
  
  :hover, :focus {
    color: ${props => props.theme.mainColor};
  };

  &.active {
    color: ${props => props.theme.mainColor};
    background-color: #E1F7FA;
  }
`;
