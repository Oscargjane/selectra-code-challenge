import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 0.8rem;
  padding: 1.6rem 3.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  border: 0;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.gray_50};
  background-color: ${({ theme }) => theme.colors.primary_500};
  cursor: pointer;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    color: ${({ theme }) => theme.colors.gray_500};
    background-color: ${({ theme }) => theme.colors.gray_300};
    cursor: not-allowed;
  }

  @media only screen and (min-width: ${({ theme }) => theme.bp.small}) {
    justify-self: center;
  }
`;
