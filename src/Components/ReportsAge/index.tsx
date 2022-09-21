import Button from '../Button';
import ReportsHeader from '../ReportsHeader';
import {  Container,Content,Graph, Reference, Classification, BoxColor, Table,Thead,Tr,Th,Tbody,Td } from './styles';


const ReportsAge = () => {
  return (
    <Container>
      
      <ReportsHeader logo='' corporation='Inc name' reportsName='Faixa etaria' />
      <Content>
        <Graph>

        </Graph>
        <Reference>
          <Classification>
            <BoxColor className='a'></BoxColor>
            <p>Crianças</p>
          </Classification>
          <Classification>
            <BoxColor className='b'></BoxColor>
            <p>Adolescentes</p>
          </Classification>
          <Classification>
            <BoxColor className='c'></BoxColor>
            <p>Jovens</p>
          </Classification>
          <Classification>
            <BoxColor className='d'></BoxColor>
            <p>Adultos</p>
          </Classification>
          <Classification>
            <BoxColor className='e'></BoxColor>
            <p>Idosos</p>
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
              <Td>Crianças</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
            <Tr>
              <Td>Adolescentes</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
            <Tr>
              <Td>Jovens</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
            <Tr>
              <Td>Adultos</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
            <Tr>
              <Td>Idosos</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsAge;