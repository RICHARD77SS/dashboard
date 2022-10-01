
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
import { Graph} from './styles';

const LineData = {
  labels: [
    '01/01/2022',
    '02/01/2022',
    '03/01/2022',
    '04/01/2022',
    '05/01/2022',
    '06/01/2022',
    '07/01/2022',
    '08/01/2022',
    '09/01/2022',
    '10/01/2022',
    '11/01/2022',
    '12/01/2022',
    '13/01/2022',
    '14/01/2022',
    '15/01/2022',
    '16/01/2022',
    '17/01/2022',
    '18/01/2022',
    '19/01/2022',
    '20/01/2022',
    '21/01/2022',
    '22/01/2022',
    '23/01/2022',
    '24/01/2022',
    '25/01/2022',
    '26/01/2022',
    '27/01/2022',
    '28/01/2022',
    '29/01/2022',
    '30/01/2022'
  ],
  datasets: [
    {
      fill: true,
      label: 'Receitas',
      data: [222, 212, 313, 414, 166, 778, 119, 0, 100, 200, 400, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100],
      borderColor: 'rgb(65, 176, 37)',
      backgroundColor: 'rgba(32, 248, 3, 0.5)',
    },
    {
      fill: true,
      label: 'Despesas',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(255, 15, 15)',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
    {
      fill: true,
      label: 'A receber',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(53, 174, 235)',
      backgroundColor: 'rgba(53, 181, 235, 0.5)',
    },
    {
      fill: true,
      label: 'A pagar',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(235, 93, 53)',
      backgroundColor: 'rgba(235, 99, 53, 0.5)',
    },
  ],
};
const FinancialReportsExpenseByCategories = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Fluxo de caixa - Despesas Por categoria' />
      <h4>Período: 01/09/2022 á 30/12/2022</h4>
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
            <Tr>
              <Td>Categorie name</Td>
              <Td>R$ 1.000,00</Td>
              <Td>100.00%</Td>
            </Tr>
            <Tr>
              <Td>Total</Td>
              <Td>R$ 1.000,00</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <PageSelector />
    </Container>
  )
}

export default FinancialReportsExpenseByCategories;