import Button from '../Button';
import {  Container,Header,Foto,Block,Content,Top,Options,Center, Table,Thead,Tr,Th,Tbody,Td, Pages } from './styles';
import { AiOutlineCopy, AiOutlineDownload, AiOutlinePrinter, AiOutlineEye } from 'react-icons/ai';
import Input from '../Input';


const ReportsPermissions = () => {
  return (
    <Container>
      <Header>
        <Foto>

        </Foto>
        <Block>
          <h3>Inc Name</h3>
          <h4>Relatorio: Permissões</h4>
        </Block>
        <Button>Imprimir</Button>
      </Header>
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