import styled from 'styled-components';

export const StyledUserItem = styled.li`
  list-style: none;
  font-size: 1.6rem;

  p:not(:last-of-type) {
    padding-bottom: 0.8rem;
  }

  span {
    font-weight: 600;
  }
`;
