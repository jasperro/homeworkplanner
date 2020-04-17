import styled from 'styled-components';

export default styled.input`
  border: none;
  background-color: rgba(40,40,40,0.05);
  border-bottom: 1px solid ${props => props.theme.inactiveColor};
  color: ${props => props.theme.textColor};
  padding: 1.4rem 1rem;
  font-size: 1.6rem;
  border-radius: 3px 3px 0 0;
  width: 90%;
  margin: ${props => props.margin ? props.margin : 0}rem;
  
  &::placeholder {
    color: ${props => props.theme.textColor}
  }

  &:focus {
    border-bottom: 2px solid ${props => props.theme.darkAccent};
  }
`;
