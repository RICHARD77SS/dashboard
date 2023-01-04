import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scrollbar-width: thin;
    scrollbar-color: rgba(158, 146, 238, 0.72) rgba(241, 241, 241, 0.72);
  }
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: ${Props => Props.theme.colors.sec};
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255);
    border-radius: 20px;
    border: 1px solid ${Props => Props.theme.colors.shadow};
  }
  body {
    background: ${Props => Props.theme.colors.bac};
    a {
      color: ${Props => Props.theme.colors.text};
      text-decoration: none;
      font-weight: 600;
    }
    h3 {
      color: ${Props => Props.theme.colors.text};
    }
    select {
      border-radius: 5px;
      height: 30px;
      border: 1px solid ${Props => Props.theme.colors.shadow};
      color: ${Props => Props.theme.colors.text};
      background:${Props => Props.theme.colors.pri};
    }
    .navlink {
      color: ${Props => Props.theme.colors.text};
      button{
        color: ${Props => Props.theme.colors.text};
        
      }
    }
  }
`
export default GlobalStyle;
