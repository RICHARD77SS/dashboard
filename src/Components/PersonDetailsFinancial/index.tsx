import Button from "../Button";
import PageSelector from "../PageSelector";
import Table from "../Table";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import TopTableOptions from "../TopTableOptions";
import Tr from "../Tr";


import {Box, Top, TableContainer} from './styles'
const PersonDetailsFinancial = () => {
  return (
    <Box>
      <Top>
        <Button>+ Adicionar receita</Button>
        <Button>+ Adicionar Despesa</Button>
      </Top>
      <TopTableOptions />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Data</Th>
              <Th>Nome</Th>
              <Th>Categoria</Th>
              <Th>Arquivo</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <PageSelector />
    </Box>
  )
}

export default PersonDetailsFinancial;