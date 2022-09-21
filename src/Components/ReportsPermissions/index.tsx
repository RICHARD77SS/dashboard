import Button from '../Button';
import {  Container,Content,Top,Options,Center, Table,Thead,Tr,Th,Tbody,Td, Pages } from './styles';
import { AiOutlineCopy, AiOutlineDownload, AiOutlinePrinter, AiOutlineEye } from 'react-icons/ai';
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';


const ReportsPermissions = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Permissões' />
      <Content>
        <Top>
          <Input type='number' />
          <label htmlFor="">Resultados por pagina</label>
          <Options>
            <Button><AiOutlineCopy /></Button>
            <Button><AiOutlineDownload /></Button>
            <Button><AiOutlinePrinter /></Button>
            <Button><AiOutlineEye />Colunas</Button>
          </Options>
        </Top>
        <Center>
          <label htmlFor="">Pesquisar</label>
          <Input type='search' />
        </Center>
        <Table>
          <Thead>
            <Tr>
              <Th>Foto</Th>
              <Th>Name</Th>
              <Th>Permissões</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><img src="" alt="" /></Td>
              <Td>Name</Td>
              <Td>Permissão</Td>
            </Tr>
          </Tbody>
        </Table>
        <Pages>
          <Button>Anterior</Button>
          <Button>1</Button>
          <Button>Próximo</Button>
        </Pages>
      </Content>
    </Container>
  )
}

export default ReportsPermissions;