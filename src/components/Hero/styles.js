import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(90deg, #4f7ddd, #332fc7);
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  padding: 0 30px;

  p {
    color: #fff;
    font-size: 26px;
  }

  h1 {
    color: #fff;
    font-size: 70px;
  }

  button {
    height: 60px;
    padding: 0 40px;
    border-radius: 10px;
    margin-top: 75px;
    font-size: 18px;

    display: flex;
    /* flex-direction: row; */
    align-items: center;
  }
`;
