
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
import { useAxios } from '../../hooks/useAxios';


const GroupReportsLider3 = () => {
  const { data: dataGroups } = useAxios('groups')
  let groups = dataGroups?.groups.map((group: any) => group.lider3.name)
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Liderança lider 3' />
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
            {groups?.filter((l1: any, i: number) => groups.indexOf(l1) === i).map((group: any) => {
              return (
                <Tr>
                  <Td><img src={group} alt="" /></Td>
                  <Td>{group}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsLider3;