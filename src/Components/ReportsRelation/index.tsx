import Button from '../Button';
import {  Container,Header,Foto,Block,Content,Graph, Reference, Classification, BoxColor, Table,Thead,Tr,Th,Tbody,Td } from './styles';


const ReportsRelation = () => {
  return (
    <Container>
      <Header>
        <Foto>

        </Foto>
        <Block>
          <h3>Inc Name</h3>
          <h4>Relatorio: Estado Civil</h4>
        </Block>
        <Button>Imprimir</Button>
      </Header>
      <Content>
        <Graph>

        </Graph>
        <Reference>
          <Classification>
            <BoxColor className='a'></BoxColor>
            <p>Solteiro(a)</p>
          </Classification>
          <Classification>
            <BoxColor className='b'></BoxColor>
            <p>Casado(a)</p>
          </Classification>
          <Classification>
            <BoxColor className='c'></BoxColor>
            <p>Viúvo(a)</p>
          </Classification>
          <Classification>
            <BoxColor className='d'></BoxColor>
            <p>Divorciado(a)</p>
          </Classification>
          <Classification>
            <BoxColor className='e'></BoxColor>
            <p>Outro</p>
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
              <Td>Solteiro(a)</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
            <Tr>
              <Td>Casado(a)</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
            <Tr>
              <Td>Viúvo(a)</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
            <Tr>
              <Td>Divorciado(a)</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
            <Tr>
              <Td>Outro</Td>
              <Td>0</Td>
              <Td><Button>Ver pessoas</Button></Td>
            </Tr>
           
          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsRelation;