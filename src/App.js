import React from 'react';
import Theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import SubscriptionForm from './components/SubscriptionForm';
import UserList from './components/Users/UserList';

function App() {
  return (
    <Theme>
      <Container>
        <GlobalStyles />
        <Header />
        <SubscriptionForm />
      </Container>
    </Theme>
  );
}

export default App;
