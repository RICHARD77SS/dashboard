import Button from '../Button';
import {  Container,Header,Foto,Block,Content,Table,Thead,Tr,Th,Tbody,Td } from './styles';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

const ReportsOffice = () => {
  return (
    <Container>
      <Header>
        <Foto>

        </Foto>
        <Block>
          <h3>Inc Name</h3>
          <h4>Relatorio: Cargos</h4>
        </Block>
        <Button>Imprimir</Button>
      </Header>
      <Content>
        <Table>
          <Thead>
            <Tr>
              <Th><Button>Nome completo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>E-mail <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Name here</Td>
              <Td>Email here</Td>
            </Tr>
          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsOffice;