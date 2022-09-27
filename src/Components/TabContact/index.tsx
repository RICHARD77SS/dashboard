import Tabs from "../Tabs"
import Tab from "../Tab"
import Table from "../Table";
import Thead from "../Thead";
import Tr from "../Tr";
import Th from "../Th";
import Tbody from "../Tbody";
import Td from "../Td";
import EditRemove from "../EditRemove";

const TabContact = () => {
  return (
    <Tabs>
      <Tab title='Todos (1)'>
        <Table>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>Telefone 1</Th>
              <Th>Telefone 2</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>name</Td>
              <Td>Email@email.com</Td>
              <Td>113232323</Td>
              <Td>113652563</Td>
              <Td><EditRemove /></Td>
            </Tr>
          </Tbody>
        </Table>
      </Tab>
      <Tab title='Clientes (1)'>
        <Table>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>Telefone 1</Th>
              <Th>Telefone 2</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>secx</Td>
              <Td>Emaiwrtl@email.com</Td>
              <Td>115568553</Td>
              <Td>567567563</Td>
              <Td><EditRemove /></Td>
            </Tr>
          </Tbody>
        </Table>
      </Tab>
      <Tab title='Amigos (1)'>
        <Table>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>Telefone 1</Th>
              <Th>Telefone 2</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>name</Td>
              <Td>Email@email.com</Td>
              <Td>113232323</Td>
              <Td>113652563</Td>
              <Td><EditRemove /></Td>
            </Tr>
          </Tbody>
        </Table>
      </Tab>
    </Tabs>
  )
}

export default TabContact;