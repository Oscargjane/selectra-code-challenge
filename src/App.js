import React from 'react';
import Theme from './components/styles/Theme';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import GlobalStyles from './components/styles/Global';

function App() {
  return (
    <Theme>
      <Container>
        <GlobalStyles />
        <Header />
      </Container>
    </Theme>
  );
}

export default App;
