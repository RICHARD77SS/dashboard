
import Button from '../Button';
import ReportsHeader from '../ReportsHeader';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';

import { Container, Content} from './styles';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Table from '../Table';
import PageSelector from '../PageSelector';


const GroupReportsLider2 = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Liderança lider 2' />
      <Content>
        <h3>Resultados: 1 pessoa</h3>
        <Table>
          <Thead>
            <Tr>
              <Th><Button>Foto <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><img src="" alt="" /></Td>
              <Td>Nome here</Td>
            </Tr>
          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsLider2;