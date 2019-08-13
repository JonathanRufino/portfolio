import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 350px;
    margin-right: 27px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
  }
`;

export const Presentation = styled.div`
  h2 {
    font-size: 40px;
  }

  p {
    font-size: 16px;
    color: #777;
    margin-top: 36px;
  }

  button {
    height: 60px;
    padding: 0 40px;
    color: #fff;
    background: linear-gradient(-90deg, #60a1ee, #2605c8);
    border-radius: 10px;
    margin-top: 25px;
  }
`;
