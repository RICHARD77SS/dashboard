import Button from "../Button";
import Table from "../Table";
import Th from "../Th";
import Thead from "../Thead";
import Tr from "../Tr";
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import Tbody from "../Tbody";
import Td from "../Td";
import { useAxios } from "../../hooks/useAxios";


const GroupTableSunday = () => {
  const { data: dataGroups } = useAxios('groups')
  const { data: dataPerson } = useAxios('person')
  
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
        {dataGroups?.groups.map((group: any) => {
          return group.weekDay === 'Domingo' ?
            <Tr>
              <Td><img src="" alt="" /></Td>
              <Td>{group.name}</Td>
              <Td>{group.time}</Td>
              <Td>{dataPerson?.person.map((person: any) => person.group).flat(1).filter((num: any) => num === group.name).length}</Td>
            </Tr>
            : null
        })}
      </Tbody>
    </Table>
  )
}

export default GroupTableSunday;