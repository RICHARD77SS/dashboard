import Button from '../Button';
import ReportsHeader from '../ReportsHeader';
import Table from '../Table';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { Container, Content } from './styles';
import { useAxios } from '../../hooks/useAxios';

const ReportsOffice = () => {
  const { data } = useAxios('positions')
  const { data: dataPerson } = useAxios('person')
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Cargos' />
      <Content>
        <Table>
          <Thead>
            <Tr>
              <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Pessoas<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.positions.map((positions: any, index: number) => {
              return (
                <Tr key={index}>
                  <Td>{positions.name}</Td>
                  <Td>{dataPerson?.person.map((person: any) => person.office.includes(positions.name) ? person.name + '; ' : null)}</Td>
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