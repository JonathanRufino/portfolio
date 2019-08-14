import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 0;
  text-align: center;

  p {
    font-size: 16px;
    color: #777;
    margin-top: 36px;
  }

  ul {
    display: grid;
    list-style: none;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;
  }
`;

export const Skill = styled.li`
  display: block;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 40px 20px;

  strong {
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
  }

  &.main-skill {
    background: linear-gradient(180deg, #4f7ddd, #332fc7);

    svg {
      fill: #fff;
    }

    strong {
      color: #fff;
    }

    p {
      color: #fff;
    }
  }
`;
