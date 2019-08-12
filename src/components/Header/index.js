import React from 'react';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <h1>Jonathan Rufino</h1>

        <ul data-testid="header-options">
          <a href="/">About</a>
          <a href="/">Skills</a>
          <a href="/">Experience</a>
          <a href="/">Contact</a>
        </ul>
      </nav>
    </Container>
  );
}
