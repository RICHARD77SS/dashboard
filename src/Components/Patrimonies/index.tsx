import Box from '../Box';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container'
import Input from '../Input';
import PageSelector from '../PageSelector';
import Table from '../Table';
import TableDirection from '../TableDirection';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import TopTableOptions from '../TopTableOptions';
import Tr from '../Tr';


const Patrimonies = () => {
  return (
    <Container>
      <Box>
        <BoxHeader title='Resultados (0)'>
          <Button>+ Adicionar</Button>
        </BoxHeader>
        <BoxContent>
          <TopTableOptions />
          <label htmlFor="search">Pesquisar</label>
          <Input type='search' />
          <Table>
            <Thead>
              <Tr>
                <Th>Id <TableDirection /></Th>
                <Th>Nome <TableDirection /></Th>
                <Th>Código <TableDirection /></Th>
                <Th>Local <TableDirection /></Th>
                <Th>Situação <TableDirection /></Th>
                <Th>Conservação <TableDirection /></Th>
                <Th>Ações <TableDirection /></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1233</Td>
                <Td>name</Td>
                <Td>Code</Td>
                <Td>Place</Td>
                <Td>Situation</Td>
                <Td>conservation</Td>
                <Td>Action</Td>
              </Tr>
            </Tbody>
          </Table>
          <PageSelector />
        </BoxContent>
      </Box>
    </Container>
  )
}

export default Patrimonies;