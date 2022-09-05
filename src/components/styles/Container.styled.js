import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 3.2rem 1.6rem 4.8rem 1.6rem;

  @media only screen and (min-width: ${({ theme }) => theme.bp.small}) {
    padding: 3.2rem 2.4rem 4.8rem 2.4rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.bp.medium}) {
    max-width: 90%;
    padding: 3.2rem 1.6rem 4.8rem 1.6rem;
  } ;
`;
