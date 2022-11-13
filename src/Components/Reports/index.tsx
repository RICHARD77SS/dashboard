import { NavLink, Outlet } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';
import { Container, Content, Sidebar, Header, SideContent, GraphContainer, Box } from './styles';

const Reports = () => {
  const { data } = useAxios('extrafields')
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
            <Box>
              Campos adicionais
              {data?.extraFields.map((fields: any, index: number) => {
                return (
                  <NavLink className='navlink' to={`/reports/${fields.inputName}`}>
                    {fields.inputName}
                  </NavLink>
                )
              })}
            </Box>
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