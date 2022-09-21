import Button from '../Button';
import ReportsHeader from '../ReportsHeader';
import {  Container,Content,Graph, Reference, Classification, BoxColor, Table,Thead,Tr,Th,Tbody,Td } from './styles';


const ReportsSex = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Sexo' />
      <Content>
        <Graph>

        </Graph>
        <Reference>
          <Classification>
            <BoxColor className='a'></BoxColor>
            <p>Feminino</p>
          </Classification>
          <Classification>
            <BoxColor className='b'></BoxColor>
            <p>Masculino</p>
          </Classification>
    
        </Reference>
        <Table>
          <Thead>
            <Tr>
              <Th>Tipo</Th>
              <Th>Pessoas</Th>
              <Th>Visualizar</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Feminino</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
            <Tr>
              <Td>Masculino</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsSex;