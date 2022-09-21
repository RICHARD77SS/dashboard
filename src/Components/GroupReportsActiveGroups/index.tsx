
import Button from '../Button';
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';
import TopTableOptions from '../TopTableOptions';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';

import { Container, Content, Top, Block } from './styles';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Table from '../Table';
import PageSelector from '../PageSelector';


const GroupReportsInactiveGroups = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Grupos inativos' />
      <Content>
        <Top>
          <Block>
            <h3>Resultados: 1 Grupo</h3>
            <p>Grupos que NÃO enviaram frequência de reunião nos últimos 30 dias</p>
          </Block>          
        </Top>
        <TopTableOptions />
        <Input placeholder=' Buscar' type='search' />
        <Table>
          <Thead>
            <Tr>
              <Th><Button>foto <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Grupo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Total Pessoas <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><img src="" alt="" /></Td>
              <Td>Grupo here</Td>
              <Td>Valor total here</Td>
            </Tr>
          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsInactiveGroups;