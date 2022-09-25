
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
import TopTableOptions from '../TopTableOptions';
import Tr from '../Tr';
import { BoxClassification, BoxColor } from './styles';


const FinancialReportsExtract = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Fluxo de caixa - Extrato' />
      <h4>Período: 01/09/2022 á 30/12/2022</h4>
      <BoxClassification>
        <Flex>
          <BoxColor className='a'></BoxColor>
          <p>Receitas</p>
        </Flex>
        <Flex>
          <BoxColor className='b'></BoxColor>
          <p>Despesas</p>
        </Flex>
        <Flex>
          <BoxColor className='c'></BoxColor>
          <p>A receber</p>
        </Flex>
        <Flex>
          <BoxColor className='d'></BoxColor>
          <p>A pagar</p>
        </Flex>
      </BoxClassification>
      <Graph>

      </Graph>
      <TopTableOptions>
      </TopTableOptions>
        <Flex>
          <label htmlFor="search">Pesquisar</label>
          <Input type='search' />
        </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Data <TableDirection /></Th>
              <Th>Descrição <TableDirection /></Th>
              <Th>Total <TableDirection /></Th>
              <Th>Categoria <TableDirection /></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>21/02/2020</Td>
              <Td>descriptions</Td>
              <Td>R$ 1.000,00</Td>
              <Td>categories</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <PageSelector />
    </Container>
  )
}

export default FinancialReportsExtract;