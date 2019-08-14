import React from 'react';
import { FaMobileAlt, FaDesktop, FaServer } from 'react-icons/fa';

import { Container, Content, Skill } from './styles';

function Skills() {
  return (
    <Container>
      <Content>
        <h1>My Skills</h1>
        <p>
          I&apos;m specialized in mobile development, but I&apos;m currently
          improving myself learning frontend and backend development with
          Node.js and ReactJS respectively
        </p>

        <ul data-testid="skills-list">
          <Skill>
            <FaDesktop size={40} color="#332fc7" />
            <br />
            <strong>Web</strong>
            <p>
              Lorem ipsum is simply text of the industrys standard dummy text
              ever since the 1500s
            </p>
          </Skill>

          <Skill className="main-skill">
            <FaMobileAlt size={40} color="#332fc7" />
            <br />
            <strong>Mobile</strong>
            <p>
              Lorem ipsum is simply text of the industrys standard dummy text
              ever since the 1500s
            </p>
          </Skill>

          <Skill>
            <FaServer size={40} color="#332fc7" />
            <br />
            <strong>Backend</strong>
            <p>
              Lorem ipsum is simply text of the industrys standard dummy text
              ever since the 1500s
            </p>
          </Skill>
        </ul>
      </Content>
    </Container>
  );
}

export default Skills;
