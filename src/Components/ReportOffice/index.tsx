import Button from '../Button';
import {  Container,Content,Table,Thead,Tr,Th,Tbody,Td } from './styles';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import ReportsHeader from '../ReportsHeader';

const ReportsOffice = () => {
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
            <Tr>
              <Td>Name here</Td>
              <Td>Email here</Td>
            </Tr>
          </Tbody>
        </Table>
      </Content>
    </Container>
  )
}

export default ReportsOffice;