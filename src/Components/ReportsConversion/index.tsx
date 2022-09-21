
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';
import {  Container,Content,Graph,  Table,Thead,Tr,Th,Tbody,Td } from './styles';


const ReportsConversion = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Data de conversão' />
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