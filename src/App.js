import React from 'react';

import Header from '~/components/Header';
import Hero from '~/components/Hero';
import About from '~/components/About';
import Skills from '~/components/Skills';

import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
