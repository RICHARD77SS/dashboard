import Button from '../Button';
import Input from '../Input';
import {  Container,Header,Foto,Block,Content,Graph,  Table,Thead,Tr,Th,Tbody,Td } from './styles';


const ReportsConversion = () => {
  return (
    <Container>
      <Header>
        <Foto>

        </Foto>
        <Block>
          <h3>Inc Name</h3>
          <h4>Relatorio: Data deConversão</h4>
        </Block>
        <Button>Imprimir</Button>
      </Header>
      <Content>
        <Input type='data' />
        <Graph>

        </Graph>
        <h3>Resultados: 0</h3>
        <Table>
          <Thead>
            <Tr>
              <Th>Avatar</Th>
              <Th>Nome completo</Th>
              <Th>Data de conversão</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><img src="" alt="" /></Td>
              <Td>User name</Td>
              <Td>08/09/2022</Td>
            </Tr>

          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsConversion;