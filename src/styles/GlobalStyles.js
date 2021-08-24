import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #292929;
    font-family:  Spartan, Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

export const Conteiner = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #292929;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
