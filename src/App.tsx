import React from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';

import usePersistedState from './utils/usePersistedState';

import Wrapper from './Components/Wrapper';
import GlobalStyle from './Styles/Globalstyles';


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title ==='light'? dark:light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <p>aaaaa</p>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
