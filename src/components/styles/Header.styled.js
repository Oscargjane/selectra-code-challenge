import styled from 'styled-components';

export const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 1.6rem;

  h1 {
    margin-bottom: 2.4rem;
    font-size: 2.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary_500};
  }

  p {
    font-size: 1.6rem;
  }
`;
