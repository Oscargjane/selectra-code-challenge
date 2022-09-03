import React from 'react';
import UserItem from './UserItem';
import { StyledUserList } from '../styles/UserList.styled';

function UserList(props) {
  return (
    <StyledUserList>
      <ul>
        {props.items.map(user => (
          <UserItem
            key={user.id}
            userName={user.userName}
            userEmail={user.userEmail}
            userPhone={user.userPhone}
          />
        ))}
      </ul>
    </StyledUserList>
  );
}

export default UserList;
