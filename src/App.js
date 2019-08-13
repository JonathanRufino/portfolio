import React from 'react';

import Header from '~/components/Header';
import Hero from '~/components/Hero';

import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
