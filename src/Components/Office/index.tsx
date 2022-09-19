import Button from '../Button';
import Input from '../Input';
import { Container, Content, Offices,OfficeHeader, OfficeContainer, Table, Tr, Th, Td, AddOffice, AddHeader,AddContainer,InputGroup, Thead, Tbody } from './styles';

const Office = () => {
  return (
    <Container>
      <Content>
        <Offices>
          <OfficeHeader>
            <h3>Resultados: 0</h3>
          </OfficeHeader>
          <OfficeContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Pessoas</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Name here</Td>
                  <Td>type here</Td>
                  <Td><Button>Editar</Button><Button>Remover</Button></Td>
                </Tr>
              </Tbody>
            </Table>
          </OfficeContainer>
        </Offices>
        <AddOffice>
          <AddHeader>
            <h3>Criar cargo</h3>
          </AddHeader>
          <AddContainer>
            <InputGroup>
              <label htmlFor="name">Nome do cargo</label>
              <Input id='name' type='text' />
            </InputGroup>
            <Button>Criar</Button>
          </AddContainer>
        </AddOffice>
      </Content>
    </Container>
  )
}

export default Office;