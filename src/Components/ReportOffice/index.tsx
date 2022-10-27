import Button from '../Button';
import { Container, Content } from './styles';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import ReportsHeader from '../ReportsHeader';
import { useAxios } from '../../hooks/useAxios';
import Table from '../Table';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';

const ReportsOffice = () => {
  const { data } = useAxios('positions')
  const { data: dataPerson } = useAxios('person')
  let offices = dataPerson?.person.map((person: any) => person.office)
  console.log(dataPerson?.person.map((person: any) => person.office))
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Cargos' />
      <Content>
        <Table>
          <Thead>
            <Tr>
              <Th><Button>Nome completo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>E-mail <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.positions.map((positions: any, index: number) => {
              return (
                <Tr>
                  <Td>{positions.name}</Td>
                  <Td>{offices?.filter((i: string) => i === positions.name).length}</Td>
                </Tr>

              )
            })}
          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsOffice;