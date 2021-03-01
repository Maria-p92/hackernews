import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: white;
    font-family: Calibri, Helvetica, sans-serif;
    font-size: 16px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  h1{
    color: white;
    opacity: 0.8;
    justify-self: center;
    text-decoration-line: overline;
    margin-bottom: 5rem;
  }
`;

export const StoriesContainerWrapper = styled.main`
  display: grid;
  flex-direction:column;
  justify-content: center;
  background-color: #202020;
  max-width: 100%;
  padding: 20px 15px;
  margin: auto;
`;