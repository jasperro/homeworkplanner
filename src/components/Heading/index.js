import styled, { css } from 'styled-components';

// Define mapping for the weight values
const weights = {
  bold: 700,
  thin: 300
};

const headingStyles = props => `
  font-family: ${props.theme.headerFont};
  color: ${props.theme.textColor};
  font-weight: normal;
`;

export const large = styled.h1`
  font-size: 9rem;
  ${headingStyles}

  ${props => props.weight && css`
    font-weight: ${props.weight};
  `}
`;

export const medium = styled.h2`
  font-size: 4rem;
  ${headingStyles}
  
  ${props => props.weight && css`
    font-weight: ${weights[props.weight]};  
  `}
`;

export const small = styled.h3`
  font-size: 2.6rem;
  ${headingStyles}
  
  ${props => props.weight && css`
    font-weight: ${weights[props.weight]};  
  `}
`;

export default { large, small, medium }
