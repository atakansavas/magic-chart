import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
  }
 `;

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
`;
