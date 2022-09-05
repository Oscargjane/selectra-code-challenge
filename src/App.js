import { React, useState, useEffect } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import NewUserForm from './components/Users/NewUserForm';
import UserList from './components/Users/UserList';
import Theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const saveUserDataHandler = enteredUserData => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };

    setUsers(prevUsers => {
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
