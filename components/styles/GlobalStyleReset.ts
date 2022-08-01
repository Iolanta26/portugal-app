import { createGlobalStyle } from "styled-components";

export const GlobalStyleReset = createGlobalStyle`

* {
  box-sizing: border-box;

 
}

html, body {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  padding: 0;
  overflow:scroll


  ::-webkit-scrollbar {
    display: none;
    background: transparent;
    z-index: 1;
  }


::-webkit-scrollbar-track {
  display: none;
}
}


input, button {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  border: none;
  font-family: 'Quicksand', sans-serif;
  cursor: pointer;
}
`;
