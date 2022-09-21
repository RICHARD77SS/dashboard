import { NavLink, Outlet } from 'react-router-dom';
import {Container, Content,Sidebar, Header, SideContent, Box, GraphContainer } from './styles';

const GroupReports = () => {
  return (
    <Container>
      <Content>
        <Sidebar>
          <Header>
            <h3>Relatórios</h3>
          </Header>
          <SideContent>
            <Box>
              <h3>Frequências</h3>
              <NavLink className='navlink' to='/groupreports/meetings'>
                Reuniões
              </NavLink>
              <NavLink className='navlink' to='/groupreports/visitorsandpersons'>
                Pessoas X Visitantes
              </NavLink>
              <NavLink className='navlink' to='/groupreports/absentperson'>
                Pessoas ausentes
              </NavLink>
              <NavLink className='navlink' to='/groupreports/presentperson'>
                Pessoas presentes
              </NavLink>
              <NavLink className='navlink' to='/groupreports/nogroupsperson'>
                Pessoas sem grupos
              </NavLink>
            </Box>
            <Box>
              <h3>Crescimento</h3>
              <NavLink className='navlink' to='/groupreports/groupcategories'>
                Categorias de grupos
              </NavLink>
              <NavLink className='navlink' to='/groupreports/newgroups'>
                Novos grupos
              </NavLink>
              <NavLink className='navlink' to='/groupreports/activegroups'>
                Grupos ativos
              </NavLink>
              <NavLink className='navlink' to='/groupreports/inactivegroups'>
                Pessoas presentes
              </NavLink>
            </Box>
            <Box>
              <h3>Liderança</h3>
              <NavLink className='navlink' to='/groupreports/lider1'>
                Lider 1
              </NavLink>
              <NavLink className='navlink' to='/groupreports/lider2'>
                Lider 2
              </NavLink>
              <NavLink className='navlink' to='/groupreports/lider3'>
                Lider 3
              </NavLink>
              <NavLink className='navlink' to='/groupreports/lider4'>
                Lider 4
              </NavLink>
            </Box>
            <Box>
              <h3>Outros</h3>
              <NavLink className='navlink' to='/groupreports/mapgroups'>
                Mapa de grupos
              </NavLink>
              <NavLink className='navlink' to='/groupreports/dayandhours'>
                Dias e horários
              </NavLink>
            </Box>
          </SideContent>
        </Sidebar>
        <GraphContainer>
          <Outlet />
        </GraphContainer>
      </Content>
    </Container>
  )
}
export default GroupReports;