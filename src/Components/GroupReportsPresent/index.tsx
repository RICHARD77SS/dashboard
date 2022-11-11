
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


const GroupReportsPresent = () => {
  const { data: dataMeetings } = useAxios('meetings')
  const { data: dataPerson } = useAxios('person')

  let pessoameeting = dataMeetings?.meetings.map((meeting: any) => meeting.participants).flat(1)
  let personPresents = pessoameeting.filter((elem: any, index: any) => pessoameeting.indexOf(elem) === index)
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Frequências Pessoas presentes' />
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
            {personPresents.map((person: any, index: number) => {

              return dataPerson.person.map((pess: any) => {
                return pess.name === person ?
                  <Tr key={index}>
                    <Td><img src={pess.image} alt="" /></Td>
                    <Td>{pess.name}</Td>
                    <Td>{pess.group}</Td>
                  </Tr>
                  : null
              })
            })}
          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsPresent;