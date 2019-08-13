import React from 'react';
import { MdEmail } from 'react-icons/md';

import hero from '~/assets/hero.png';

import { Container, Content, Info } from './styles';

function Hero() {
  return (
    <Container>
      <Content>
        <Info>
          <p>Hello, I&apos;m</p>
          <h1>Jonathan Rufino</h1>
          <p>React Native Developer</p>
          <button type="button">
            <MdEmail size={25} />
            Contact Me
          </button>
        </Info>

        <img data-testid="hero-image" src={hero} alt="Jonathan Rufino" />
      </Content>
    </Container>
  );
}

export default Hero;
