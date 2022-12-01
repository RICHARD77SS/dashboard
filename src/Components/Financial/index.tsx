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

  const [controlls1Day, setControlls1Day] = React.useState(day)
  const [controlls1Month, setControlls1Month] = React.useState(month)

  const [controlls2Day, setControlls2Day] = React.useState(day)
  const [controlls2Month, setControlls2Month] = React.useState(month)

  const [controlls3Day, setControlls3Day] = React.useState(day)
  const [controlls3Month, setControlls3Month] = React.useState(month)

  const [controlls4Day, setControlls4Day] = React.useState(day)
  const [controlls4Month, setControlls4Month] = React.useState(month)

  const [controlls5Day, setControlls5Day] = React.useState(day)
  const [controlls5Month, setControlls5Month] = React.useState(month)

  const [controlls6Day, setControlls6Day] = React.useState(day)
  const [controlls6Month, setControlls6Month] = React.useState(month)

  let days = dataFinancial?.financial.map((financial: any) => {
    return { "data": new Date(financial.date.split('T')[0]), "valor": financial.value, "despesas": financial.revenuesExpenses, "status": financial.paidOut }
  })


  let receivedToday = days?.map((dias: any) => dias.data.getMonth() + 1 === controlls1Month && dias.data.getDate() + 1 === controlls1Day && dias.status === 'Pago' && dias.despesas === true ? dias.valor : 0)
  let AllReceivedToday = receivedToday?.reduce((acc: any, item: any) => acc + item)

  let paidToday = days?.map((dias: any) => dias.data.getMonth() + 1 === controlls2Month && dias.data.getDate() + 1 === controlls2Day && dias.status === 'Pago' && dias.despesas === false ? dias.valor : 0)
  let AllPaidToday = paidToday?.reduce((acc: any, item: any) => acc + item)

  let toReceiveToday = days?.map((dias: any) => dias.data.getMonth() + 1 === controlls3Month && dias.data.getDate() + 1 === controlls3Day && dias.status === 'Pendente' && dias.despesas === true ? dias.valor : 0)
  let AllToReceiveToday = toReceiveToday?.reduce((acc: any, item: any) => acc + item)

  let toPayToday = days?.map((dias: any) => dias.data.getMonth() + 1 === controlls4Month && dias.data.getDate() + 1 === controlls4Day && dias.status === 'Pendente' && dias.despesas === false ? dias.valor : 0)
  let AlltoPayToday = toPayToday?.reduce((acc: any, item: any) => acc + item)

  let overdueReceipt = days?.map((dias: any) => dias.data.getMonth() + 1 === controlls5Month && dias.data.getDate() + 1 < controlls5Day && dias.status === 'Pendente' && dias.despesas === true ? dias.valor : 0)
  let AllOverdueReceipt = overdueReceipt?.reduce((acc: any, item: any) => acc + item)

  let latePayment = days?.map((dias: any) => dias.data.getMonth() + 1 === controlls6Month && dias.data.getDate() + 1 < controlls6Day && dias.status === 'Pendente' && dias.despesas === false ? dias.valor : 0)
  let AllLatePayment = latePayment?.reduce((acc: any, item: any) => acc + item)



  function controlls1DayHandler(date: any) {
    setControlls1Day(date)
    setControlls1Month(month)
  }
  function controlls1MonthHandler(date: any) {
    setControlls1Month(date)
    setControlls1Day(day)
  }


  function controlls2DayHandler(date: any) {
    setControlls2Day(date)
    setControlls2Month(month)
  }
  function controlls2MonthHandler(date: any) {
    setControlls2Month(date)
    setControlls2Day(day)
  }


  function controlls3DayHandler(date: any) {
    setControlls3Day(date)
    setControlls3Month(month)
  }
  function controlls3MonthHandler(date: any) {
    setControlls3Month(date)
    setControlls3Day(day)
  }


  function controlls4DayHandler(date: any) {
    setControlls4Day(date)
    setControlls4Month(month)
  }
  function controlls4MonthHandler(date: any) {
    setControlls4Month(date)
    setControlls4Day(day)
  }


  function controlls5DayHandler(date: any) {
    setControlls5Day(date)
    setControlls5Month(month)
  }
  function controlls5MonthHandler(date: any) {
    setControlls5Month(date)
    setControlls5Day(day)
  }


  function controlls6DayHandler(date: any) {
    setControlls6Day(date)
    setControlls6Month(month)
  }
  function controlls6MonthHandler(date: any) {
    setControlls6Month(date)
    setControlls6Day(day)
  }




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
              <h3> {formatter.format(AllReceivedToday)}</h3>
              <p>Total do mes:  {formatter.format(AllReceivedToday)}</p>
              <ButtonContainer>
                <Button type='button' onClick={() => controlls1DayHandler(day)}><p>Hoje</p></Button>
                <Button type='button' onClick={() => controlls1DayHandler(day + 7)}><p>+7 dias</p></Button>
                <Button type='button' onClick={() => controlls1MonthHandler(month + 2)}><p>+1 mês</p></Button>
                <Button type='button' onClick={() => controlls1MonthHandler(month + 4)}><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
          <MiniBox >
            <HeaderMiniBox className='red'>
              <h3><GiConfirmed /> Pago hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3> {formatter.format(AllPaidToday)}</h3>
              <p>Total do mes:  {formatter.format(AllPaidToday)}</p>
              <ButtonContainer>
                <Button type='button' onClick={() => controlls2DayHandler(day)}><p>Hoje</p></Button>
                <Button type='button' onClick={() => controlls2DayHandler(day + 7)}><p>+7 dias</p></Button>
                <Button type='button' onClick={() => controlls2MonthHandler(month + 2)}><p>+1 mês</p></Button>
                <Button type='button' onClick={() => controlls2MonthHandler(month + 4)}><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>

          <MiniBox>
            <HeaderMiniBox>
              <h3><FiAlertOctagon /> A receber hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3> {formatter.format(AllToReceiveToday)}</h3>
              <p>Total do mes:  {formatter.format(AllToReceiveToday)}</p>
              <ButtonContainer>
                <Button type='button' onClick={() => controlls3DayHandler(day)}><p>Hoje</p></Button>
                <Button type='button' onClick={() => controlls3DayHandler(day + 7)}><p>+7 dias</p></Button>
                <Button type='button' onClick={() => controlls3MonthHandler(month + 2)}><p>+1 mês</p></Button>
                <Button type='button' onClick={() => controlls3MonthHandler(month + 4)}><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
          <MiniBox>
            <HeaderMiniBox className='red'>
              <h3><FiAlertOctagon /> A pagar hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3> {formatter.format(AlltoPayToday)}</h3>
              <p>Total do mes:  {formatter.format(AlltoPayToday)}</p>
              <ButtonContainer>
                <Button type='button' onClick={() => controlls4DayHandler(day)}><p>Hoje</p></Button>
                <Button type='button' onClick={() => controlls4DayHandler(day + 7)}><p>+7 dias</p></Button>
                <Button type='button' onClick={() => controlls4MonthHandler(month + 2)}><p>+1 mês</p></Button>
                <Button type='button' onClick={() => controlls4MonthHandler(month + 4)}><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>

          <MiniBox>
            <HeaderMiniBox>
              <h3><CgSandClock /> Recebimento em atraso</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3> {formatter.format(AllOverdueReceipt)}</h3>
              <p>Total do mes:  {formatter.format(AllOverdueReceipt)}</p>
              <ButtonContainer>
                <Button type='button' onClick={() => controlls5DayHandler(day)}><p>Hoje</p></Button>
                <Button type='button' onClick={() => controlls5DayHandler(day + 7)}><p>+7 dias</p></Button>
                <Button type='button' onClick={() => controlls5MonthHandler(month + 2)}><p>+1 mês</p></Button>
                <Button type='button' onClick={() => controlls5MonthHandler(month + 4)}><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
          <MiniBox>
            <HeaderMiniBox className='red'>
              <h3><CgSandClock /> Pagamento em atraso</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3>  {formatter.format(AllLatePayment)}</h3>
              <p>Total do mes:  {formatter.format(AllLatePayment)}</p>
              <ButtonContainer>
                <Button type='button' onClick={() => controlls6DayHandler(day)}><p>Hoje</p></Button>
                <Button type='button' onClick={() => controlls6DayHandler(day + 7)}><p>+7 dias</p></Button>
                <Button type='button' onClick={() => controlls6MonthHandler(month + 2)}><p>+1 mês</p></Button>
                <Button type='button' onClick={() => controlls6MonthHandler(month + 4)}><p>+3 meses</p></Button>
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
    </Container >
  )
}

export default Financial;