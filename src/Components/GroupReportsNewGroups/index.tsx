
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
import { useAxios } from '../../hooks/useAxios';


const GroupReportsNewGroups = () => {
  const { data: dataPerson } = useAxios('person')
  const { data } = useAxios('groups')
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Novos Grupos' />
      <Content>
        <Top>
          <Block>
            <h3>Resultados: 1 Grupo</h3>
            <p>Grupos iniciados nos últimos 60 dias</p>
          </Block>
        </Top>
        <TopTableOptions />
        <Input placeholder=' Buscar' type='search' />
        <Table>
          <Thead>
            <Tr>
              <Th><Button>foto <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Data <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Grupo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Total Pessoas <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.groups.map((group: any, index: number) => {
              let personsInGroup = dataPerson?.person.map((person: any) => person.group).flat(1)?.filter((groupName: any) => groupName === group.name).length
              return (
                <Tr key={index}>
                  <Td><img src={group.image} alt="" /></Td>
                  <Td>{group.creationDate.split('T')[0]}</Td>
                  <Td>{group.name}</Td>
                  <Td>{personsInGroup}</Td>
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

export default GroupReportsNewGroups;