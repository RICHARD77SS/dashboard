
import Container from '../Container';
import Flex from '../Flex';
import Input from '../Input';
import { Graph } from '../Overview/styles';
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
import { BoxClassification, BoxColor } from './styles';


const FinancialReportsExpenseByCategories = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Fluxo de caixa - Despesas Por categoria' />
      <h4>Período: 01/09/2022 á 30/12/2022</h4>
      <BoxClassification>
        <Flex>
          <BoxColor className='a'></BoxColor>
          <p>Categoria </p>
        </Flex>
        <Flex>
          <BoxColor className='b'></BoxColor>
          <p>Categoria</p>
        </Flex>
        <Flex>
          <BoxColor className='c'></BoxColor>
          <p>Categoria</p>
        </Flex>
        <Flex>
          <BoxColor className='d'></BoxColor>
          <p>Sem categoria</p>
        </Flex>
      </BoxClassification>
      <Graph>

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