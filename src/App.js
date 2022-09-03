import { React, useState } from 'react';
import Theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import MainHeader from './components/MainHeader/MainHeader';
import NewUserForm from './components/Users/NewUserForm';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const saveUserDataHandler = enteredUserData => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };

    setUsers(prevUsers => {
      console.log([userData, ...prevUsers]);
      return [userData, ...prevUsers];
    });

    return userData;
  };

  return (
    <Theme>
      <Container>
        <GlobalStyles />
        <MainHeader />
        <NewUserForm onSaveUserData={saveUserDataHandler} />
        <UserList items={users} />
      </Container>
    </Theme>
  );
}

export default App;
