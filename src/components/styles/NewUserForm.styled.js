import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.4rem;
  margin-bottom: 6.4rem;

  div {
    width: 100%;
  }

  & > * {
    flex: 1 1 100%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.bp.small}) {
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem 3.2rem;
      justify-content: center;

      & > *:first-child {
        flex: 1 1 33%;
      }

      & > *:nth-child(2) {
        flex: 1 1 33%;
      }

      & > *:last-child {
        flex: 0 1 50%;
      }
    }

    & > *:last-child {
      max-width: max-content;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.bp.medium}) {
    flex-direction: row;
    justify-content: center;

    div {
      gap: 0 3.2rem;
      flex-wrap: nowrap;

      & > *:first-child {
        flex: 1 1 33%;
      }

      & > *:nth-child(2) {
        flex: 1 1 33%;
      }

      & > *:last-child {
        flex: 1 1 33%;
      }
    }
  } ;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  span {
    padding-bottom: 0.8rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray_700};
    cursor: pointer;

    i {
      margin-left: 0.4rem;
      color: ${({ theme }) => theme.colors.alert_300};
    }
  }
`;

export const Input = styled.input`
  padding: 1.2rem 0.8rem;
  font-size: 1.6rem;
  border: 0;
  border: 1px solid ${props => (props.invalid ? '#EF4444' : '#CFD4D8')};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.gray_900};
  background-color: ${props => (props.invalid ? '#FEF2F2' : '#F9FAFA')};

  &:focus {
    outline: none;
    border: 1px solid ${props => (props.invalid ? '#EF4444' : '#135EA9')};
  }

  &::placeholder {
    font-size: 1.5rem;
    line-height: 0;
    color: ${({ theme }) => theme.colors.gray_500};
  }
`;

export const AlertMessage = styled.p`
  margin-top: 1.6rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.alert_300};
`;
