import Button from '../Button';
import {  Container,Header,Foto,Block,Content,Graph, Reference, Classification, BoxColor, Table,Thead,Tr,Th,Tbody,Td } from './styles';


const ReportsBaptism = () => {
  return (
    <Container>
      <Header>
        <Foto>

        </Foto>
        <Block>
          <h3>Inc Name</h3>
          <h4>Relatorio: Batizados</h4>
        </Block>
        <Button>Imprimir</Button>
      </Header>
      <Content>
        <Graph>

        </Graph>
        <Reference>
          <Classification>
            <BoxColor className='a'></BoxColor>
            <p>sim</p>
          </Classification>
          <Classification>
            <BoxColor className='b'></BoxColor>
            <p>nao</p>
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
              <Td>Batizado (sim)</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
            <Tr>
              <Td>Batizado (Não)</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsBaptism;