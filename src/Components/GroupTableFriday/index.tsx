import Button from "../Button";
import Table from "../Table";
import Th from "../Th";
import Thead from "../Thead";
import Tr from "../Tr";
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import Tbody from "../Tbody";
import Td from "../Td";


const GroupTableFriday = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th><Button>Foto <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
          <Th><Button>Nome do grupo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
          <Th><Button>Horario <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
          <Th><Button>Total de pessoas <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td><img src="" alt="" /></Td>
          <Td>Group Nome here</Td>
          <Td>12:00</Td>
          <Td>Total here</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default GroupTableFriday;