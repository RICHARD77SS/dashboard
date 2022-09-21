
import ReportsHeader from '../ReportsHeader';
import {  Container,Content,Graph, Reference, Classification, BoxColor, Table,Thead,Tr,Th,Tbody,Td } from './styles';


const ReportsDistrict = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Bairro' />
      <Content>
        <Graph>

        </Graph>
        <Reference>
          <Classification>
            <BoxColor className='a'></BoxColor>
            <p>Bairro 1</p>
          </Classification>
          <Classification>
            <BoxColor className='b'></BoxColor>
            <p>Bairro 2</p>
          </Classification>
        </Reference>
        <Table>
          <Thead>
            <Tr>
              <Th>Bairro</Th>
              <Th>Pessoas</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Bairro 1</Td>
              <Td>1</Td>
            </Tr>
            <Tr>
              <Td>Bairro 2</Td>
              <Td>1</Td>
            </Tr>
          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsDistrict;