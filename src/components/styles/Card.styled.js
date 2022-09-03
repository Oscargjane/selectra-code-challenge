import styled from 'styled-components';

export const Card = styled.div`
  padding: 2.4rem 1.2rem;
  border-radius: 1.2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: ${({ theme }) => theme.colors.gray_50};
`;
