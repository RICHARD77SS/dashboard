
import ReportsHeader from '../ReportsHeader';


import { Container, Content, TabButton, TabContent } from './styles';

import { NavLink, Outlet } from 'react-router-dom';


const GroupReportsDayHour = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Dias e horários' />
      <Content>
        <h3>Resultados: 1 pessoa</h3>
        <TabButton>
          <NavLink className='navlink' to='/groupreports/dayandhours/sun'>Domingo</NavLink>
          <NavLink className='navlink' to='/groupreports/dayandhours/mon'>Segunda</NavLink>
          <NavLink className='navlink' to='/groupreports/dayandhours/tue'>Terça</NavLink>
          <NavLink className='navlink' to='/groupreports/dayandhours/wed'>Quarta</NavLink>
          <NavLink className='navlink' to='/groupreports/dayandhours/thu'>Quinta</NavLink>
          <NavLink className='navlink' to='/groupreports/dayandhours/fri'>Sexta</NavLink>
          <NavLink className='navlink' to='/groupreports/dayandhours/sat'>Sabado</NavLink>
        </TabButton>
        <TabContent>
          <Outlet />
        </TabContent>

      </Content>
    </Container>
  )
}

export default GroupReportsDayHour;