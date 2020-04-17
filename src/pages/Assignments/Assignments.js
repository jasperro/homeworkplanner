import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  max-height: 100vh;
`;
