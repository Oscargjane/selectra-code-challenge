import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 2.4rem;
  margin-bottom: 6.4rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  span {
    padding-bottom: 0.8rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray_700};

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
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.gray_900};

  &::placeholder {
    font-size: 1.5rem;
    line-height: 0;
    color: ${({ theme }) => theme.colors.gray_500};
  }
`;
