import styled from "styled-components";
import { rgba } from "polished";

export default styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 2rem;
  bottom: 2rem;
  width: ${props => props.radius}rem;
  height: ${props => props.radius}rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  
  background-color: ${props => props.theme.mainColor};
  
  /*:hover div {
    transform: rotate(45deg);
  }*/

  :hover {
    box-shadow: 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20);
  }
`;
