
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


const GroupReportsInactiveGroups = () => {
  const { data: dataGroups } = useAxios('groups')
  const { data: dataMeetings } = useAxios('meetings')
  const { data: dataPerson } = useAxios('person')

  let meetingGroup = dataMeetings?.meetings.map((meetings: any) => new Date(meetings.date.split('T')).getMonth() + 1 === new Date().getMonth() + 1 ? meetings.group : false)
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
            {dataGroups?.groups.map((group: any,index:number) => {

              return meetingGroup?.map((meeting: any) => meeting).filter((met: any) => met === group.name).length === 0 ?

                <Tr key={index}>
                  <Td><img src={group.image} alt="" /></Td>
                  <Td>{group.name}</Td>
                  <Td>{dataPerson?.person.map((person: any) => person.group).flat(1).filter((num: any) => num === group.name).length}</Td>
                </Tr>

                : null

            })}
          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsInactiveGroups;