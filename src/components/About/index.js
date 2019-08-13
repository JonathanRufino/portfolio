import React from 'react';

import hero from '~/assets/hero.png';

import { Container, Content, Presentation } from './styles';

function About() {
  return (
    <Container>
      <Content>
        <img data-testid="about-image" src={hero} alt="Jonathan Rufino" />

        <Presentation>
          <h2>
            I&apos;m a passionate mobile developer with 5 years of experience
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <button type="button">Download CV</button>
        </Presentation>
      </Content>
    </Container>
  );
}

export default About;
