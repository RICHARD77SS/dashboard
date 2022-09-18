import Button from '../Button';
import Input from '../Input';
import { Container, Content, Categorias,CategoriaHeader, CategoriasContainer, Table, Tr, Th, Td, AddCategoria, AddHeader,AddContainer,InputGroup } from './styles';

const Categories = () => {
  return (
    <Container>
      <Content>
        <Categorias>
          <CategoriaHeader>
            <h3>Resultados: 0</h3>
          </CategoriaHeader>
          <CategoriasContainer>
            <Table>
              <Tr>
                <Th>Nome</Th>
                <Th>Pessoas</Th>
                <Th>Ações</Th>
              </Tr>
              <Tr>
                <Td>Name here</Td>
                <Td>type here</Td>
                <Td><Button>Editar</Button><Button>Remover</Button></Td>
              </Tr>
            </Table>
          </CategoriasContainer>
        </Categorias>
        <AddCategoria>
          <AddHeader>
            <h3>Criar categoria</h3>
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

export default Categories;