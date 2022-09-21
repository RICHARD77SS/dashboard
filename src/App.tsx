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
import AddPeople from './Components/AddPeople';
import AdditionalField from './Components/AdditionalField';
import Categories from './Components/Categories';
import Office from './Components/Office';
import CardPersonal from './Components/CardPersonal';
import Birthday from './Components/Birthday';
import Reports from './Components/Reports';
import ReportsOffice from './Components/ReportOffice';
import ReportsAge from './Components/ReportsAge';
import ReportsBirth from './Components/ReportsBirth';
import ReportsSex from './Components/ReportsSex';
import ReportsRelation from './Components/ReportsRelation';
import ReportsBaptism from './Components/ReportsBaptism';
import ReportsConversion from './Components/ReportsConversion';
import ReportsDistrict from './Components/ReportsDistrict';
import ReportsPermissions from './Components/ReportsPermissions';
import Group from './Components/Groups';
import AddGroup from './Components/AddGroup';
import GroupCategorie from './Components/GroupCategorie';
import GroupReports from './Components/GroupReports';
import GroupReportsMeetings from './Components/GroupReportsMeetings';


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<TopBar />}>
          <Route path='/' element={<Overview />} />
          <Route path='/people' element={<People />} />
          <Route path='/addpeople' element={<AddPeople />} />
          <Route path='/addfield' element={<AdditionalField />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/office' element={<Office />} />
          <Route path='/cardpersonal' element={<CardPersonal />} />
          <Route path='/birthday' element={<Birthday />} />
          <Route path='/reports' element={<Reports />} >
            <Route path='/reports' element={<h3>Escolha um relatorio</h3>} />
            <Route path='/reports/office' element={<ReportsOffice />} />
            <Route path='/reports/age' element={<ReportsAge />} />
            <Route path='/reports/birth' element={<ReportsBirth />} />
            <Route path='/reports/sex' element={<ReportsSex />} />
            <Route path='/reports/relations' element={<ReportsRelation />} />
            <Route path='/reports/baptism' element={<ReportsBaptism />} />
            <Route path='/reports/conversion' element={<ReportsConversion />} />
            <Route path='/reports/district' element={<ReportsDistrict />} />
            <Route path='/reports/permissions' element={<ReportsPermissions />} />
          </Route>
          <Route path='/groups' element={<Group />} />
          <Route path='/addgroups' element={<AddGroup />} />
          <Route path='/groupcategories' element={<GroupCategorie />} />
          <Route path='/groupreports' element={<GroupReports />} >
            
            <Route path='/groupreports/meetings' element={<GroupReportsMeetings />} />
          </Route>
            
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
