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
import GroupReportsVisitors from './Components/GroupReportsVisitors';
import GroupReportsAbsent from './Components/GroupReportsAbsent';
import GroupReportsPresent from './Components/GroupReportsPresent';
import GroupReportsNoGroups from './Components/GroupReportsNoGroup/index';
import GroupReportsNewGroups from './Components/GroupReportsNewGroups';
import GroupReportsActiveGroups from './Components/GroupReportsActiveGroups';
import GroupReportsInactiveGroups from './Components/GroupReportsInactiveGroups';
import GroupReportsLider1 from './Components/GroupReportsLider1';
import GroupReportsLider3 from './Components/GroupReportsLider3';
import GroupReportsLider4 from './Components/GroupReportsLider4';
import GroupReportsLider2 from './Components/GroupReportsLider2';
import GroupReportsGroupsCategories from './Components/GroupReportsGroupsCategories';
import GroupReportsDayHour from './Components/GroupReportsDayHour';
import GroupReportsGroupMap from './Components/GroupReportsGroupMap';
import GroupTableSunday from './Components/GroupTableSunday';
import GroupTableMonday from './Components/GroupTableMonday';
import GroupTableTuesday from './Components/GroupTableTuesday';
import GroupTableWednesday from './Components/GroupTableWednesday';
import GroupTableThursday from './Components/GroupTableThursday';
import GroupTableFriday from './Components/GroupTableFriday/index';
import GroupTableSaturnday from './Components/GroupTableSaturday';
import PersonsImportsExports from './Components/PersonsImportsExports';
import GroupsImportsExports from './Components/GroupsImportsExports';
import Studies from './Components/Studies';
import Schools from './Components/Schools';
import Classes from './Components/Classes';
import PersonalAccompaniment from './Components/PersonalAccompaniment';
import StudiesImportsExports from './Components/StudiesImportsExports';
import StudiesCategories from './Components/StudiesCategories';
import AddStudies from './Components/AddStudies';
import Financial from './Components/Financial';
import FinancialTransactions from './Components/FinancialTransactions';
import FinancialReports from './Components/FinancialReports';
import FinancialReportsExtract from './Components/FinancialReportsExtract';
import FinancialReportsRevenuesExpenses from './Components/FinancialReportsRevenuesExpenses';
import FinancialReportsTransfer from './Components/FinancialReportsTransfer';
import FinancialReportsProjections from './Components/FinancialReportsProjection';
import FinancialReportsRevenuesDailyStatement from './Components/FinancialReportsRevenuesDailyStatement';
import FinancialReportsToReceive from './Components/FinancialReportsToReceive';
import FinancialReportsRevenuesByCategories from './Components/FinancialReportsRevenuesByCategories';
import FinancialReportsRevenuesAnualCategory from './Components/FinancialReportsRevenuesAnualCategory';
import FinancialReportsExpensesDailyStatement from './Components/FinancialReportsExpensesDailyStatement';
import FinancialReportsToPay from './Components/FinancialReportsToPay';
import FinancialReportsExpenseByCategories from './Components/FinancialReportsExpenseByCategories';
import FinancialReportsExpensesAnualCategory from './Components/FinancialReportsExpensesAnualCategory';
import FinancialReportsCustCenterRevenues from './Components/FinancialReportsCustCenterRevenues';
import FinancialReportsCustCenterExpenses from './Components/FinancialReportsCustCenterExpenses';
import FinancialCategories from './Components/FinancialCategories';
import FinancialAccount from './Components/FinancialAccount';
import FinancialContacts from './Components/FinancialContacts';
import FinancialCostCenter from './Components/FinancialCostCenter';
import FinancialImportsExports from './Components/FinancialImportsExports';
import Patrimonies from './Components/Patrimonies';
import PatrimoniesCategories from './Components/PatrimoniesCategories';
import PatrimoniesPlaces from './Components/PatrimoniesPlaces';
import PatrimoniesImportsExports from './Components/PatrimoniesImportsExports';
import ScheduleCalendar from './Components/ScheduleCalendar';
import ScheduleEvents from './Components/ScheduleEvents';
import ScheduleWarnings from './Components/ScheduleWarnings';
import ScheduleImportsExports from './Components/ScheduleImportsExports';
import ScheduleMyAnnotations from './Components/ScheduleMyAnnotations';
import MediaPhotos from './Components/MediasPhotos';
import MediaVideos from './Components/MediasVideos';
import MediaForms from './Components/MediasForms';
import MediaDocuments from './Components/MediaDocuments';
import MediaFiles from './Components/MediasFiles';
import CardMake from './Components/CardMake';
import AddForm from './Components/AddForm';
import DocumentEditor from './Components/DocumentEditor';
import MediasCreateAlbum from './Components/MediasCreateAlbum';
import ViewGroup from './Components/ViewGroup';
import PersonDetails from './Components/PersonDetails';
import { PersonContextProvider } from './contexts/personContext';
import { ExtraFieldsContextProvider } from './contexts/extraFieldsContext';
import { CategoryContextProvider } from './contexts/categoryContext';
import { PositionsContextProvider } from './contexts/positionsContexts';
import { GroupsContextProvider } from './contexts/groupsContext';
import { FinancialContextProvider } from './contexts/financialContext';
import { GroupCategoryContextProvider } from './contexts/groupCategoryContext';
import { StudiesContextProvider } from './contexts/studiesContext';
import { StudiesCategoryContextProvider } from './contexts/studiesCategoryContext';
import { MeetingsContextProvider } from './contexts/meetingsContext';
import { SchoolsContextProvider } from './contexts/schoolsContext';
import { ClaassContextProvider } from './contexts/claassContext';
import ViewClass from './Components/ViewOrientation';
import { SubjectsContextProvider } from './contexts/subjectsContext';
import { ClassRoomContextProvider } from './contexts/classRoomContext';
import { OrientationContextProvider } from './contexts/orientationContext';
import ViewOrientation from './Components/ViewOrientation';
import { AccountContextProvider } from './contexts/accountContext';
import { ContactContextProvider } from './contexts/contactContext';
import { FinancialCategoryContextProvider } from './contexts/financialCategoryContext';
import { CustCenterContextProvider } from './contexts/custCenterContext';
import { ContactCategoryContextProvider } from './contexts/contactCategoryContext';
import { TransferContextProvider } from './contexts/transferContext';


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PersonContextProvider>
        <ExtraFieldsContextProvider>
          <CategoryContextProvider>
            <PositionsContextProvider>
              <GroupsContextProvider>
                <FinancialContextProvider>
                  <GroupCategoryContextProvider>
                    <StudiesContextProvider>
                      <StudiesCategoryContextProvider>
                        <MeetingsContextProvider>
                          <SchoolsContextProvider>
                            <ClaassContextProvider>
                              <SubjectsContextProvider>
                                <ClassRoomContextProvider>
                                  <OrientationContextProvider>
                                    <AccountContextProvider>
                                      <ContactContextProvider>
                                        <FinancialCategoryContextProvider>
                                          <CustCenterContextProvider>
                                            <ContactCategoryContextProvider>
                                              <TransferContextProvider>
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
                                                    <Route path='/personsimportsexports' element={<PersonsImportsExports />} />
                                                    <Route path='/groups' element={<Group />} />
                                                    <Route path='/addgroups' element={<AddGroup />} />
                                                    <Route path='/groupcategories' element={<GroupCategorie />} />
                                                    <Route path='/groupreports' element={<GroupReports />} >
                                                      <Route path='/groupreports/meetings' element={<GroupReportsMeetings />} />
                                                      <Route path='/groupreports/visitorsandpersons' element={< GroupReportsVisitors />} />
                                                      <Route path='/groupreports/absentpersons' element={< GroupReportsAbsent />} />
                                                      <Route path='/groupreports/presentpersons' element={< GroupReportsPresent />} />
                                                      <Route path='/groupreports/nogroupspersons' element={< GroupReportsNoGroups />} />
                                                      <Route path='/groupreports/groupscategories' element={< GroupReportsGroupsCategories />} />
                                                      <Route path='/groupreports/newgroups' element={< GroupReportsNewGroups />} />
                                                      <Route path='/groupreports/activegroups' element={< GroupReportsActiveGroups />} />
                                                      <Route path='/groupreports/inactivegroups' element={< GroupReportsInactiveGroups />} />
                                                      <Route path='/groupreports/leader1' element={< GroupReportsLider1 />} />
                                                      <Route path='/groupreports/leader2' element={< GroupReportsLider2 />} />
                                                      <Route path='/groupreports/leader3' element={< GroupReportsLider3 />} />
                                                      <Route path='/groupreports/leader4' element={< GroupReportsLider4 />} />
                                                      <Route path='/groupreports/dayandhours' element={< GroupReportsDayHour />} >
                                                        <Route path='/groupreports/dayandhours/sun' element={< GroupTableSunday />} />
                                                        <Route path='/groupreports/dayandhours/mon' element={< GroupTableMonday />} />
                                                        <Route path='/groupreports/dayandhours/tue' element={< GroupTableTuesday />} />
                                                        <Route path='/groupreports/dayandhours/wed' element={< GroupTableWednesday />} />
                                                        <Route path='/groupreports/dayandhours/thu' element={< GroupTableThursday />} />
                                                        <Route path='/groupreports/dayandhours/fri' element={< GroupTableFriday />} />
                                                        <Route path='/groupreports/dayandhours/sat' element={< GroupTableSaturnday />} />
                                                      </Route>
                                                      <Route path='/groupreports/mapgroups' element={< GroupReportsGroupMap />} />
                                                    </Route>
                                                    <Route path='/groupimportexport' element={< GroupsImportsExports />} />
                                                    <Route path='/studies' element={<Studies />} />
                                                    <Route path='/addstudies/*' element={<AddStudies />} />
                                                    <Route path='/studiecategories' element={<StudiesCategories />} />
                                                    <Route path='/schools' element={<Schools />} />
                                                    <Route path='/classes' element={<Classes />} />
                                                    <Route path='/personalaccompaniment' element={<PersonalAccompaniment />} />
                                                    <Route path='/studiesimportexport' element={<StudiesImportsExports />} />
                                                    <Route path='/financial' element={<Financial />} />
                                                    <Route path='/financialtransactions' element={<FinancialTransactions />} />
                                                    <Route path='/financialreports' element={<FinancialReports />} >
                                                      <Route path='/financialreports/extracts' element={<FinancialReportsExtract />} />
                                                      <Route path='/financialreports/revenuesandexpenses' element={<FinancialReportsRevenuesExpenses />} />
                                                      <Route path='/financialreports/transfer' element={<FinancialReportsTransfer />} />
                                                      <Route path='/financialreports/projection' element={<FinancialReportsProjections />} />
                                                      <Route path='/financialreports/dayextractrevenues' element={<FinancialReportsRevenuesDailyStatement />} />
                                                      <Route path='/financialreports/costcenterrevenues' element={<FinancialReportsCustCenterRevenues />} />
                                                      <Route path='/financialreports/toreceive' element={<FinancialReportsToReceive />} />
                                                      <Route path='/financialreports/revenuesbycategory' element={<FinancialReportsRevenuesByCategories />} />
                                                      <Route path='/financialreports/receiveanualsummary' element={<FinancialReportsRevenuesAnualCategory />} />

                                                      <Route path='/financialreports/extractdayexpenses' element={<FinancialReportsExpensesDailyStatement />} />
                                                      <Route path='/financialreports/costcenterexpenses' element={<FinancialReportsCustCenterExpenses />} />
                                                      <Route path='/financialreports/topay' element={<FinancialReportsToPay />} />
                                                      <Route path='/financialreports/expensesbycategory' element={<FinancialReportsExpenseByCategories />} />
                                                      <Route path='/financialreports/payanualsummary' element={<FinancialReportsExpensesAnualCategory />} />
                                                    </Route>
                                                    <Route path='/financialcategories' element={<FinancialCategories />} />
                                                    <Route path='/financialaccounts' element={<FinancialAccount />} />
                                                    <Route path='/financialcontacts' element={<FinancialContacts />} />
                                                    <Route path='/financialcostcenter' element={<FinancialCostCenter />} />
                                                    <Route path='/financialimportsexports' element={<FinancialImportsExports />} />
                                                    <Route path='/patrimonies' element={<Patrimonies />} />
                                                    <Route path='/patrimoniescategory' element={<PatrimoniesCategories />} />
                                                    <Route path='/patrimoniesplaces' element={<PatrimoniesPlaces />} />
                                                    <Route path='/patrimoniesimportsexports' element={<PatrimoniesImportsExports />} />
                                                    <Route path='/schedulecalendar' element={<ScheduleCalendar />} />
                                                    <Route path='/scheduleevents' element={<ScheduleEvents />} />
                                                    <Route path='/schedulewarnings' element={<ScheduleWarnings />} />
                                                    <Route path='/scheduleanotation' element={<ScheduleMyAnnotations />} />
                                                    <Route path='/scheduleimportsexports' element={<ScheduleImportsExports />} />
                                                    <Route path='/mediasphotos' element={<MediaPhotos />} />
                                                    <Route path='/mediasvideos' element={<MediaVideos />} />
                                                    <Route path='/mediasforms' element={<MediaForms />} />
                                                    <Route path='/mediasdocuments' element={<MediaDocuments />} />
                                                    <Route path='/mediasfiles' element={<MediaFiles />} />
                                                    <Route path='/card' element={<CardMake />} />
                                                    <Route path='/forms/add' element={<AddForm />} />
                                                    <Route path='/documenteditor' element={<DocumentEditor />} />

                                                    <Route path='/medias/photos/album' element={<MediasCreateAlbum />} />
                                                    <Route path='/groups/viewgroup/:id' element={<ViewGroup />} />
                                                    <Route path='/persons/details/' element={<PersonDetails />} >
                                                      <Route path='/persons/details/:id' element={<PersonDetails />} />
                                                    </Route>
                                                    <Route path='/class/viewclass/:id' element={<ViewClass />} />

                                                    <Route path='/personalaccompaniment/vieworientation/:id' element={<ViewOrientation />} />
                                                  </Route>
                                                </Routes>
                                              </TransferContextProvider>
                                            </ContactCategoryContextProvider>
                                          </CustCenterContextProvider>
                                        </FinancialCategoryContextProvider>
                                      </ContactContextProvider>
                                    </AccountContextProvider>
                                  </OrientationContextProvider>
                                </ClassRoomContextProvider>
                              </SubjectsContextProvider>
                            </ClaassContextProvider>
                          </SchoolsContextProvider>
                        </MeetingsContextProvider>
                      </StudiesCategoryContextProvider>
                    </StudiesContextProvider>
                  </GroupCategoryContextProvider>
                </FinancialContextProvider>
              </GroupsContextProvider>
            </PositionsContextProvider>
          </CategoryContextProvider>
        </ExtraFieldsContextProvider>
      </PersonContextProvider>
    </ThemeProvider>
  );
}

export default App;
