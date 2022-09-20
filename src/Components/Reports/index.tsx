import { NavLink, Outlet } from 'react-router-dom';
import {Container, Content,Sidebar, Header, SideContent,GraphContainer } from './styles';

const Reports = () => {
  return (
    <Container>
      <Content>
        <Sidebar>
          <Header>
            <h3>Relatórios</h3>
          </Header>
          <SideContent>
            <NavLink className='navlink' to='/reports/office'>
              Cargos
            </NavLink>
            <NavLink className='navlink' to='/reports/addfield'>
              Campos adicionais
            </NavLink>
            <NavLink className='navlink' to='/reports/new'>
              Aditional Field
            </NavLink>
            <NavLink className='navlink' to='/reports/age'>
              Faixa etária
            </NavLink>
            <NavLink className='navlink' to='/reports/birth'>
              Aniversários
            </NavLink>
            <NavLink className='navlink' to='/reports/sex'>
              Sexo
            </NavLink>
            <NavLink className='navlink' to='/reports/relations'>
              Estado civil
            </NavLink>
            <NavLink className='navlink' to='/reports/baptism'>
              Batismo
            </NavLink>
            <NavLink className='navlink' to='/reports/conversion'>
              Data de conversão
            </NavLink>
            <NavLink className='navlink' to='/reports/district'>
              Bairro
            </NavLink>
            <NavLink className='navlink' to='/reports/permissions'>
              Permissões
            </NavLink>
          </SideContent>
        </Sidebar>
        <GraphContainer>
          <Outlet />
        </GraphContainer>
      </Content>
    </Container>
  )
}
export default Reports;