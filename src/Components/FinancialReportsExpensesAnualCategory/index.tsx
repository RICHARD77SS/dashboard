import Container from "../Container";
import Input from "../Input";
import PageSelector from "../PageSelector";
import ReportsHeader from "../ReportsHeader";
import Table from "../Table";
import TableContainer from "../TableContainer";
import TableDirection from "../TableDirection";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import TopTableOptions from "../TopTableOptions";
import Tr from "../Tr";

import { Filters } from './styles';

const FinancialReportsExpensesAnualCategory = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation="Inc Name" reportsName="Resumo anual de despesas por categoria" />
      <Filters>
        <Input type='text' />
        <Input type='text' />
        <Input type='text' />
        <Input type='text' />
      </Filters>
      <TopTableOptions></TopTableOptions>
      <label htmlFor="">Pesquisar</label>
      <Input type='text' />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Nome<TableDirection /></Th>
              <Th>JAN<TableDirection /></Th>
              <Th>FEV<TableDirection /></Th>
              <Th>MAR<TableDirection /></Th>
              <Th>ABR<TableDirection /></Th>
              <Th>MAI<TableDirection /></Th>
              <Th>JUN<TableDirection /></Th>
              <Th>JUL<TableDirection /></Th>
              <Th>AGO<TableDirection /></Th>
              <Th>SET<TableDirection /></Th>
              <Th>OUT<TableDirection /></Th>
              <Th>NOV<TableDirection /></Th>
              <Th>DEZ<TableDirection /></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>Value</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <PageSelector />
    </Container>
  )
}

export default FinancialReportsExpensesAnualCategory;