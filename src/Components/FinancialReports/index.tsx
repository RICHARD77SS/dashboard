import BoxHeader from '../BoxHeader';
import Container from '../Container';
import { NavLink, Outlet } from 'react-router-dom';
import Input from '../Input';
import { Content, SideNavigator, SideContent, Group, Box, TopOptions, InputBox, InputFlex, InputBlock } from './styles';

const FinancialReports = () => {
  return (
    <Container>
      <Content>

        <SideNavigator>
          <BoxHeader title='Relatórios' />
          <SideContent>
            <Group>
              <h3>Fluxo de caixa</h3>
              <NavLink className='navlink' to='/financialreports/extracts'>
                Extrato
              </NavLink>
              <NavLink className='navlink' to='/financialreports/revenuesandexpenses'>
                Receitas / Despesas
              </NavLink>
              <NavLink className='navlink' to='/financialreports/transfer'>
                Transferências
              </NavLink>
              <NavLink className='navlink' to='/financialreports/projection'>
                Projeção
              </NavLink>
            </Group>
            <Group>
              <h3>Receitas</h3>
              <NavLink className='navlink' to='/financialreports/dayextractrevenues'>
                Extrato diário
              </NavLink>
              <NavLink className='navlink' to='/financialreports/costcenterrevenues'>
                Centros de custos
              </NavLink>
              <NavLink className='navlink' to='/financialreports/toreceive'>
                A receber
              </NavLink>
              <NavLink className='navlink' to='/financialreports/revenuesbycategory'>
                Por categoria
              </NavLink>
              <NavLink className='navlink' to='/financialreports/receiveanualsummary'>
                Resumo anual Por categoria
              </NavLink>
            </Group>
            <Group>
              <h3>Despesas</h3>
              <NavLink className='navlink' to='/financialreports/extractdayexpenses'>
                Extrato diário
              </NavLink>
              <NavLink className='navlink' to='/financialreports/costcenterexpenses'>
                Centros de custos
              </NavLink>
              <NavLink className='navlink' to='/financialreports/topay'>
                A pagar
              </NavLink>
              <NavLink className='navlink' to='/financialreports/expensesbycategory'>
                Por categoria
              </NavLink>
              <NavLink className='navlink' to='/financialreports/payanualsummary'>
                Resumo anual Por categoria
              </NavLink>
            </Group>
          </SideContent>
        </SideNavigator>
        <Box>
          <TopOptions>
            <InputBlock>
              <label htmlFor="">Tipo</label>
              <InputBox>
                <InputFlex>
                  <Input id='rec' type='checkbox' />
                  <label htmlFor="rec">Receita</label>
                </InputFlex>
                <InputFlex>
                  <Input id='des' type='checkbox' />
                  <label htmlFor="des">Despesas</label>
                </InputFlex>
                <InputFlex>
                  <Input id='env' type='checkbox' />
                  <label htmlFor="env">Enviados</label>
                </InputFlex>
                <InputFlex>
                  <Input id='rece' type='checkbox' />
                  <label htmlFor="rece">Recebidos</label>
                </InputFlex>
              </InputBox>
            </InputBlock>
            <InputBlock>
              <label htmlFor="">Status</label>
              <InputBox>
                <InputFlex>
                  <Input id='pag' type='checkbox' />
                  <label htmlFor="pag">Pagos</label>
                </InputFlex>
                <InputFlex>
                  <Input id='pend' type='checkbox' />
                  <label htmlFor="pend">Pendentes</label>
                </InputFlex>
              </InputBox>
            </InputBlock>

            <InputBox>
              <label htmlFor="date">Período</label>
              <Input id='date' type='date' />
              <label htmlFor="acount">Contas</label>
              <Input id='acount' type='text' list='count' />
            </InputBox>

            <InputBox>
              <label htmlFor="custcenter">Centros de custos</label>
              <Input id='custcenter' type='text' list='cost' />
              <label htmlFor="date">Categorias receitas</label>
              <Input id='date' type='text' list='revenues' />
              <label htmlFor="date">Categorias despesas</label>
              <Input id='date' type='text' list='expense' />
            </InputBox>
          </TopOptions>
          <Outlet />
        </Box>
      </Content>
    </Container>
  )
}

export default FinancialReports;