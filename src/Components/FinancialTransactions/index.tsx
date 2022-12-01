

import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container';
import Input from '../Input';
import Table from '../Table';
import Th from '../Th';
import Thead from '../Thead';
import TopTableOptions from '../TopTableOptions';
import Tr from '../Tr';
import { BsArrowDown, BsArrowUp, BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import Tbody from '../Tbody';
import Td from '../Td';
import { FaPrint } from 'react-icons/fa';
import { AiFillCopy } from 'react-icons/ai';
import PageSelector from '../PageSelector';
import { Content, Flex, Box, Graph, Aside, AsideHeader, AsideContent, Flex2, Block } from './styles';
import ButtonContainer from '../ButtonContainer';
import GraphLineArea from '../GraphLineArea';
import TableContainer from '../TableContainer';
import { useAxios } from '../../hooks/useAxios';
import { formatter } from '../../utils/formatMoneyBr';
import React from 'react';
import { FinancialContext } from '../../contexts/financialContext';



const FinancialTransactions = () => {
  const { handleEdit, handleDelete, OpenRevenues, OpenExpenses } = React.useContext(FinancialContext)
  const { data: dataFinancial } = useAxios('financial')

  const dateNow = new Date()
  var day = dateNow.getDate()
  var month = dateNow.getMonth() + 1
  var year = dateNow.getFullYear()

  const [financialMonth, setFinancialMonth] = React.useState(month.toString())
  const [financialYear, setFinancialYear] = React.useState(year.toString())

  let date = new Date(`${financialYear}-${financialMonth}-01`)


  function getAllDays(years: any, months: any) {
    let date = new Date(years, months + 1, 1);
    let dates = []

    while (date.getMonth() === months + 1) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1)
    }
    return dates
  }

  let daysInMonth = getAllDays(date.getFullYear(), date.getMonth())

  console.log(daysInMonth)
  function padTo2Digits(nume: any) {
    return nume.toString().padStart(2, '0')
  }
  function formatDate(date: any) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/')
  }


  function monthValueHandler(event: any) {
    setFinancialMonth(event.target.value)
  }
  function yearValueHandler(event: any) {
    setFinancialYear(event.target.value)
  }


  let datasRevenues = daysInMonth?.map((dates: any) => dataFinancial?.financial.map((financial: any) => dates?.toISOString().split('T')[0] === financial.date.split('T')[0] && financial.revenuesExpenses === true ? financial.value : 0).reduce((acc: any, item: any) => acc + item))

  let datasExpenses = daysInMonth?.map((dates: any) => dataFinancial?.financial.map((financial: any) => dates?.toISOString().split('T')[0] === financial.date.split('T')[0] && financial.revenuesExpenses === false ? financial.value : 0).reduce((acc: any, item: any) => acc + item))

  let datasRevenuesPending = daysInMonth?.map((dates: any) => dataFinancial?.financial.map((financial: any) => dates?.toISOString().split('T')[0] === financial.date.split('T')[0] && financial.revenuesExpenses === true && financial.paidOut === 'Pendente' ? financial.value : 0).reduce((acc: any, item: any) => acc + item))

  let datasExpensesPending = daysInMonth?.map((dates: any) => dataFinancial?.financial.map((financial: any) => dates?.toISOString().split('T')[0] === financial.date.split('T')[0] && financial.revenuesExpenses === false && financial.paidOut === 'Pendente' ? financial.value : 0).reduce((acc: any, item: any) => acc + item))


  const LineData = {
    labels: daysInMonth?.map((dates: any) => formatDate(dates)),
    datasets: [
      {
        fill: true,
        label: 'Receitas',
        data: datasRevenues,
        borderColor: 'rgb(65, 176, 37)',
        backgroundColor: 'rgba(32, 248, 3, 0.5)',
      },
      {
        fill: true,
        label: 'Despesas',
        data: datasExpenses,
        borderColor: 'rgb(255, 15, 15)',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
      },
      {
        fill: true,
        label: 'A receber',
        data: datasRevenuesPending,
        borderColor: 'rgb(53, 174, 235)',
        backgroundColor: 'rgba(53, 181, 235, 0.5)',
      },
      {
        fill: true,
        label: 'A pagar',
        data: datasExpensesPending,
        borderColor: 'rgb(235, 93, 53)',
        backgroundColor: 'rgba(235, 99, 53, 0.5)',
      },
    ],
  };

  return (
    <Container>
      <h3>Registros de transações</h3>
      <Content>
        <Flex2>
          <select title='year' onChange={(event) => yearValueHandler(event)}>
            <option value={year} >{year}</option>
            <option value={year - 1} >{year - 1}</option>
            <option value={year - 2} >{year - 2}</option>
            <option value={year - 3} >{year - 3}</option>
            <option value={year - 4} >{year - 4}</option>
            <option value={year - 5} >{year - 5}</option>
            <option value={year - 6} >{year - 6}</option>
            <option value={year - 7} >{year - 7}</option>
            <option value={year - 8} >{year - 8}</option>
            <option value={year - 9} >{year - 9}</option>
            <option value={year - 10} >{year - 10}</option>
          </select>
          <select title='month' value={financialMonth} onChange={(event) => monthValueHandler(event)}>
            <option value='1' >Janeiro</option>
            <option value='2' >Fevereiro</option>
            <option value='3' >Março</option>
            <option value='4' >Abril</option>
            <option value='5' >Maio</option>
            <option value='6' >Junho</option>
            <option value='7' >Julho</option>
            <option value='8' >Agosto</option>
            <option value='9' >Setembro</option>
            <option value='10' >Outubro</option>
            <option value='11' >Novembro</option>
            <option value='12' >Dezembro</option>
          </select>
          <Input type='text' placeholder='Tipo' />
          <Input type='text' placeholder='status' />
          <Input type='text' placeholder='Contas' />
          <Input type='text' placeholder='Centros de custos' />
          <Input type='text' placeholder='Categorias' />
        </Flex2>
        <Flex>
          <Box>
            <Graph>
              <GraphLineArea data={LineData} />
            </Graph>
          </Box>
          <Aside>
            <AsideHeader>
              <h3>Previsão</h3>
              <p>De acordo com as datas selecionadas</p>
            </AsideHeader>
            <AsideContent>
              <p><b>Total recebido:</b></p>
              <p>{formatter.format(datasRevenues.reduce((acc: number, item: number) => acc + item))}</p>
              <p><b>Total pago:</b></p>
              <span>-{formatter.format(datasExpenses.reduce((acc: number, item: number) => acc + item))}</span>
              <hr />
              <p><b>A receber:</b></p><p>{formatter.format(datasRevenuesPending.reduce((acc: number, item: number) => acc + item))}</p>
              <p><b>A pagar:</b></p><span>-{formatter.format(datasExpensesPending.reduce((acc: number, item: number) => acc + item))}</span>
              <hr />
              <Button>Mais relatórios</Button>
            </AsideContent>
          </Aside>
        </Flex>
        <Block>
          <BoxHeader title={`Resultados: 1 transações`}>
            <Button className='button1'>Transferência</Button>
            <Button className='button2' type='button' onClick={() => OpenRevenues()} >Adicionar receita</Button>
            <Button className='button3' type='button' onClick={() => OpenExpenses()}>Adicionar despesa</Button>
          </BoxHeader>
          <BoxContent>
            <TopTableOptions>
              <ButtonContainer>
                <label htmlFor="search">Pesquisar</label>
                <Input type='search' placeholder='buscar' />
              </ButtonContainer>
            </TopTableOptions>
            <TableContainer>

              <Table>
                <Thead>
                  <Tr>
                    <Th><Input type='checkbox' /></Th>
                    <Th>Data<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Deacrição<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Total<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Contato<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Categoria<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Conta<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Ações<p><BsArrowUp /><BsArrowDown /></p></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataFinancial?.financial.map((financial: any, index: number) => {
                    return new Date(financial.date.split('T'[0])).getMonth() + 1 === parseInt(financialMonth) && new Date(financial.date.split('T'[0])).getFullYear() === parseInt(financialYear) ?

                      <Tr key={index}>
                        <Td><Input type='checkbox' /></Td>
                        <Td>{financial.date.split('T')[0]}</Td>
                        <Td>{financial.description}</Td>
                        <Td className={financial.revenuesExpenses ? 'green' : 'red'}>{formatter.format(financial.value)}</Td>
                        <Td>{financial.receivedFrom}</Td>
                        <Td>{financial.category}</Td>
                        <Td>{financial.account}</Td>
                        <Td>
                          <ButtonContainer>
                            <Button><FaPrint /></Button>
                            <Button type='button' onClick={() => handleEdit(financial._id,
                              financial.date,
                              financial.description,
                              financial.value,
                              financial.paidOut,
                              financial.receivedFrom,
                              financial.category,
                              financial.account,
                              financial.costCenter,
                              financial.typeOfPayment,
                              financial.documentNumber,
                              financial.competence,
                              financial.notes,
                              financial.file,
                              financial.frequenci,
                              financial.repetition,
                              financial.revenuesExpenses)}><BsFillPencilFill /></Button>
                            <Button><AiFillCopy /></Button>
                            <Button type='button' onClick={() => handleDelete(financial._id)}><BsFillTrashFill /></Button>
                          </ButtonContainer>
                        </Td>
                      </Tr>
                      : null
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <PageSelector />
          </BoxContent>
        </Block>
      </Content>
    </Container>
  )
}

export default FinancialTransactions;