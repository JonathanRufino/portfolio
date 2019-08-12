import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(90deg, #4f7ddd, #332fc7);

  nav {
    padding: 0 30px;
    height: 64px;
    max-width: 900px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-weight: bold;
      color: #fff;
    }

    ul {
      a {
        color: #fff;
        margin-left: 30px;
      }
    }
  }
`;
