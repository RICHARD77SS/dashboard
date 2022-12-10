
import { useAxios } from '../../hooks/useAxios';
import { formatter } from '../../utils/formatMoneyBr';
import Container from '../Container';
import Flex from '../Flex';
import GraphLineArea from '../GraphLineArea';
import Input from '../Input';
import PageSelector from '../PageSelector';
import ReportsHeader from '../ReportsHeader';
import Table from '../Table';
import TableContainer from '../TableContainer';
import TableDirection from '../TableDirection';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Graph } from './styles';

const FinancialReportsRevenuesByCategories = () => {
  const { data: dataFinancial } = useAxios('financial')
  let dateNow = new Date()
  var day = dateNow.getDate()
  var month = dateNow.getMonth() + 1
  var year = dateNow.getFullYear()

  let date = new Date(`${year}-${month}-01`)


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
  console.log(daysInMonth[0].getDate())
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
      <ReportsHeader logo='' corporation='Inc name' reportsName='Fluxo de caixa - Por categoria' />
      <h4>Período: {daysInMonth[0].getDate()}/{month}/{year} á {daysInMonth[daysInMonth.length - 1].getDate()}/{month}/{year}</h4>

      <Graph>
        <GraphLineArea data={LineData} />
      </Graph>

      <Flex>
        <label htmlFor="search">Pesquisar</label>
        <Input type='search' />
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Categoria <TableDirection /></Th>
              <Th>Valor <TableDirection /></Th>
              <Th>% <TableDirection /></Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataFinancial?.financial.map((financial: any, index: number) => {
              return new Date(financial.date.split('T'[0])).getMonth() + 1 === month && new Date(financial.date.split('T'[0])).getFullYear() === year && financial.revenuesExpenses === true ?
                <Tr key={index}>
                  <Td>{financial.category}</Td>
                  <Td className={financial.revenuesExpenses ? 'green' : 'red'}>{formatter.format(financial.value)}</Td>
                  <Td>%</Td>
                </Tr>
                : null
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <PageSelector />
    </Container>
  )
}

export default FinancialReportsRevenuesByCategories;