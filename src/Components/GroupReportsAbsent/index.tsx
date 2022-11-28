
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
import { useAxios } from '../../hooks/useAxios';


const GroupReportsAbsent = () => {
  const { data: dataMeetings } = useAxios('meetings')
  const { data: dataPerson } = useAxios('person')

  let pessoameeting = dataMeetings?.meetings.map((meeting: any) => meeting.participants).flat(1)
  let personPresents = pessoameeting.filter((elem: any, index: any) => pessoameeting.indexOf(elem) === index)
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Frequências Pessoas ausentes' />
      <Content>
        <Top>
          <Block>
          </Block>
          <h3>Resultados: {dataPerson?.person.map((person: any, index: number) => {
            return personPresents.includes(person.name) ? -1 :
              person.name
          }).filter((personLen: any) => personLen !== -1).length}</h3>
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
            {dataPerson?.person.map((person: any, index: number) => {
              return personPresents.includes(person.name) ? <></> :
                <Tr key={index}>
                  <Td><img src={person.image} alt="" /></Td>
                  <Td>{person.name}</Td>
                  <Td>{person.group.map((group: string) => group)}</Td>
                </Tr>
            })}

          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsAbsent;