import React from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';

import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './Styles/Globalstyles';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Overview from './Components/Overview';
import TopBar from './Components/TopBar';
import People from './Components/People';


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title ==='light'? dark:light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<TopBar />}>
          <Route path='/' element={<Overview />}/>
          <Route path='/people' element={<People />}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
