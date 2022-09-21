
import Button from '../Button';
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';

import { Container, Content, Top, Block } from './styles';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Table from '../Table';
import PageSelector from '../PageSelector';


const GroupReportsAbsent = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Frequências Pessoas ausentes' />
      <Content>
        <Top>
          <Block>
              <Input type='date' />
          </Block>
          <h3>Resultados: 1</h3>
          <p>Estes dados são abastecidos de acordo com o envio de reunião dos líderes de grupos.</p>
          </Top>
        <Table>
          <Thead>
            <Tr>
              <Th><Button>Foto <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Grupos <p><BsArrowUp /><BsArrowDown /></p></Button></Th>

            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><img src="" alt="" /></Td>
              <Td>Nome here</Td>
              <Td>Grupo here</Td>
            </Tr>
          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsAbsent;