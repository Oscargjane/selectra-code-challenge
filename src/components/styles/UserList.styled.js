import styled from 'styled-components';

export const StyledUserList = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.6rem;

    & > * {
      flex: 1 1 100%;
    }

    @media only screen and (min-width: ${({ theme }) => theme.bp.small}) {
      gap: 1.6rem 3.2rem;
      justify-content: center;

      & > * {
        flex: 1 1 33%;
      }

      & > *:nth-child(3) {
        flex: 0 1 48%;
      }
    }

    @media only screen and (min-width: ${({ theme }) => theme.bp.medium}) {
      /* flex-wrap: nowrap; */
      justify-content: center;

      & > * {
        flex: 0 1 33%;
      }

      & > *:nth-child(3) {
        flex: 0 1 33%;
      }
    }
  }
`;
