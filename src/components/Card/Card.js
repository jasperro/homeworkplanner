import styled from 'styled-components';

export default styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  color: ${props => props.theme.textColor};
  
  padding: 2rem;
  border-radius: 3px;
  
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);
  }
`;
