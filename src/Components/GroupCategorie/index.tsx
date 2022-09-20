import { AiFillLock, AiOutlinePlus } from 'react-icons/ai';
import Button from '../Button';
import Input from '../Input';
import { Container, Content, Categorias,CategoriaHeader, CategoriasContainer, Table, Tr, Th, Td, AddCategoria, AddHeader,AddContainer,InputGroup, Thead, Tbody } from './styles';

const GroupCategorie
 = () => {
  return (
    <Container>
      <Content>
        <Categorias>
          <CategoriaHeader>
            <h3>Resultados: 0</h3>
          </CategoriaHeader>
          <CategoriasContainer>
            <h4>Gerencie as categorias de grupos</h4>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Grupos</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Name here</Td>
                  <Td><Button>Visualizar 0 grupos</Button></Td>
                  <Td><Button>Editar</Button><Button>Remover</Button></Td>
                </Tr>
                <Tr>
                  <Td>Familias <AiFillLock /></Td>
                  <Td><Button>Visualizar 1 grupos</Button></Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Casais <AiFillLock /></Td>
                  <Td><Button>Visualizar 1 grupos</Button></Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Adultos <AiFillLock /></Td>
                  <Td><Button>Visualizar 1 grupos</Button></Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Jovens <AiFillLock /></Td>
                  <Td><Button>Visualizar 0 grupos</Button></Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Adolescentes <AiFillLock /></Td>
                  <Td><Button>Visualizar 0 grupos</Button></Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Crianças <AiFillLock /></Td>
                  <Td><Button>Visualizar 0 grupos</Button></Td>
                  <Td></Td>
                </Tr>

              </Tbody>
            </Table>
          </CategoriasContainer>
        </Categorias>
        <AddCategoria>
          <AddHeader>
            <h3><AiOutlinePlus />Criar categoria</h3>
          </AddHeader>
          <AddContainer>
            <InputGroup>
              <label htmlFor="name">Nome da Categoria</label>
              <Input id='name' type='text' />
            </InputGroup>
            <InputGroup>
              <label htmlFor="description">Descrição</label>
              <Input id='description' type='text' />
            </InputGroup>
            <Button>Criar</Button>
          </AddContainer>
        </AddCategoria>
      </Content>
    </Container>
  )
}

export default GroupCategorie
;