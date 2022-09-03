import React from 'react';
import { Card } from '../styles/Card.styled';
import { StyledUserItem } from '../styles/UserItem.styled';

function UserItem(props) {
  return (
    <Card>
      <StyledUserItem>
        <p>
          <span>Name:</span> {props.userName}
        </p>
        <p>
          <span>Email:</span> {props.userEmail}
        </p>
        <p>
          <span>Phone:</span> {props.userPhone}
        </p>
      </StyledUserItem>
    </Card>
  );
}

export default UserItem;
