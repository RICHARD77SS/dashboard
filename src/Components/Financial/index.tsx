import React from 'react'
import { FiAlertOctagon } from 'react-icons/fi';
import { GiConfirmed } from 'react-icons/gi';
import { CgSandClock } from 'react-icons/cg';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import Button from '../Button';
import Container from '../Container'
import { AiFillTags, AiOutlineFolderOpen, AiOutlineSearch } from 'react-icons/ai';
import Input from '../Input';
import { FaCreditCard } from 'react-icons/fa';
import { MdContacts } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
import { Content, Flex, MiniBox, HeaderMiniBox, ContentMiniBox, ButtonContainer, Block, MidBox, MidHeader, MidContent, Pagamentos } from './styles'
import FinancialGraphs from '../FinancialGraphs';
import { FinancialContext } from '../../contexts/financialContext';
import { useAxios } from '../../hooks/useAxios';
import { formatter } from '../../utils/formatMoneyBr';





const Financial = () => {
  const { OpenRevenues, OpenExpenses } = React.useContext(FinancialContext)
  const { data: dataFinancial } = useAxios('financial')
  let dateNow = new Date()
  var day = dateNow.getDate()
  var month = dateNow.getMonth() + 1
  var year = dateNow.getFullYear()

  let days = dataFinancial?.financial.map((financial: any) => {
    return { "data": new Date(financial.date.split('T')[0]), "valor": financial.value, "despesas": financial.revenuesExpenses, "status": financial.paidOut }
  })

  let PendingExpenses = days?.map((dias: any) => dias.data.getMonth() + 1 === month && dias.data.getDate() + 1 < day && dias.status === 'Pendente' && dias.despesas === false ? dias.valor : 0)
  let AllPendingExpenses = PendingExpenses?.reduce((acc: any, item: any) => acc + item)

  let NowPendingExpenses = days?.map((dias: any) => dias.data.getMonth() + 1 === month && dias.data.getDate() + 1 === day && dias.status === 'Pendente' && dias.despesas === false ? dias.valor : 0)
  let AllNowPendingExpenses = NowPendingExpenses?.reduce((acc: any, item: any) => acc + item)

  let NowExpenses = days?.map((dias: any) => dias.data.getMonth() + 1 === month && dias.data.getDate() + 1 === day && dias.status === 'Pago' && dias.despesas === false ? dias.valor : 0)
  let AllNowExpenses = NowExpenses?.reduce((acc: any, item: any) => acc + item)


  let PendingRevenues = days?.map((dias: any) => dias.data.getMonth() + 1 === month && dias.data.getDate() + 1 < day && dias.status === 'Pendente' && dias.despesas === true ? dias.valor : 0)
  let AllPendingRevenues = PendingRevenues?.reduce((acc: any, item: any) => acc + item)

  let NowPendingRevenues = days?.map((dias: any) => dias.data.getMonth() + 1 === month && dias.data.getDate() + 1 === day && dias.status === 'Pendente' && dias.despesas === true ? dias.valor : 0)
  let AllNowPendingRevenues = NowPendingRevenues?.reduce((acc: any, item: any) => acc + item)

  let NowRevenues = days?.map((dias: any) => dias.data.getMonth() + 1 === month && dias.data.getDate() + 1 === day && dias.status === 'Pago' && dias.despesas === true ? dias.valor : 0)
  let AllNowRevenues = NowRevenues?.reduce((acc: any, item: any) => acc + item)
  console.log()
  return (
    <Container>
      <h3>Financias</h3>
      <Content>
        <Flex>
          <MiniBox>
            <HeaderMiniBox>
              <h3><GiConfirmed /> Recebido hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3> {formatter.format(AllNowRevenues)}</h3>
              <p>Total do mes:  {formatter.format(AllNowRevenues)}</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
          <MiniBox >
            <HeaderMiniBox className='red'>
              <h3><GiConfirmed /> Pago hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3> {formatter.format(AllNowExpenses)}</h3>
              <p>Total do mes:  {formatter.format(AllNowExpenses)}</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>

          <MiniBox>
            <HeaderMiniBox>
              <h3><FiAlertOctagon /> A receber hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3> {formatter.format(AllNowPendingRevenues)}</h3>
              <p>Total do mes:  </p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
          <MiniBox>
            <HeaderMiniBox className='red'>
              <h3><FiAlertOctagon /> A pagar hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3> {formatter.format(AllNowPendingExpenses)}</h3>
              <p>Total do mes:  {formatter.format(AllNowPendingExpenses)}</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>

          <MiniBox>
            <HeaderMiniBox>
              <h3><CgSandClock /> Recebimento em atraso</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3> {formatter.format(AllPendingRevenues)}</h3>
              <p>Total do mes:  {formatter.format(AllPendingRevenues)}</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
          <MiniBox>
            <HeaderMiniBox className='red'>
              <h3><CgSandClock /> Pagamento em atraso</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3>  {formatter.format(AllPendingExpenses)}</h3>
              <p>Total do mes:  {formatter.format(AllPendingExpenses)}</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
        </Flex>
        <Block>
          <MidBox>
            <Input type='text' placeholder='  Pesquisar transações' />
            <Input type='text' list='time' placeholder='  Periodo' />
            <datalist id='time'>
              <option value='Neste mês' />
              <option value='Neste ano' />
              <option value='Ano passado ' />
              <option value='Ultimos 3 anos' />
              <option value='Proximos 3 anos' />
            </datalist>
            <Button className='buscar'><AiOutlineSearch /> Pesquisar</Button>
          </MidBox>
          <MidBox>
            <ButtonContainer>
              <Button><RiMoneyDollarCircleLine /> Transações</Button>
              <Button><AiFillTags />Categorias</Button>
              <Button><FaCreditCard />Contas</Button>
              <Button><MdContacts />Contatos</Button>
              <Button><AiOutlineFolderOpen />Centros de custos</Button>
              <Button><BsGraphUp />Relatórios</Button>
            </ButtonContainer>
          </MidBox>
          <MidBox>
            <MidHeader>
              <h3>Saldo atual <p>(Todas as contas)</p></h3>
              <Button type='button' onClick={() => OpenRevenues()}>+ Receitas</Button>
              <Button type='button' onClick={() => OpenExpenses()}>+ Despesas</Button>
            </MidHeader>
            <MidContent>
              <h3> 0,00</h3>
              <Pagamentos>

              </Pagamentos>
            </MidContent>
          </MidBox>
        </Block>
      </Content>
      <FinancialGraphs />
    </Container>
  )
}

export default Financial;