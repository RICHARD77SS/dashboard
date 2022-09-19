import Button from '../Button';
import {  Container,Header,Foto,Block,Content,Graph, Reference, Classification, BoxColor, Table,Thead,Tr,Th,Tbody,Td } from './styles';


const ReportsAge = () => {
  return (
    <Container>
      <Header>
        <Foto>

        </Foto>
        <Block>
          <h3>Inc Name</h3>
          <h4>Relatorio: Faixa etária</h4>
        </Block>
        <Button>Imprimir</Button>
      </Header>
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
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Adolescentes</Td>
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