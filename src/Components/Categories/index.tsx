import React from 'react'
import Button from '../Button';
import Input from '../Input';
import { Container, Content, Categorias, CategoriaHeader, CategoriasContainer, AddCategoria, AddHeader, InputGroup } from './styles';
import { CategoryContext } from '../../contexts/categoryContext';
import { useAxios } from '../../hooks/useAxios';
import Table from '../Table';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';
import Flex from '../Flex';
import Form from '../Form';
const Categories = () => {
  const { name,
    nameHandler,
    description,
    descriptionHandler,
    handleSubmit,
    handleEdit,
    handleDelete
  } = React.useContext(CategoryContext)
  const { data } = useAxios('category')
  let length = data?.category?.length

  return (
    <Container>
      <br />
      <br />
      <br />
      <h2>Categorias</h2>
      <Content>
        <Categorias>
          <CategoriaHeader>
            <h3>Resultados: {length}</h3>
          </CategoriaHeader>
          <CategoriasContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>descrição</Th>
                  <Th>Pessoas</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.category.map((category: any, index: any) => {
                  return (
                    <Tr key={index}>
                      <Td>{category.name}</Td>
                      <Td>{category.description}</Td>
                      <Td></Td>
                      <Td>
                        <Flex>
                          <Button onClick={() => handleEdit(category._id, category.name, category.description)}>Editar</Button>
                          <Button onClick={() => handleDelete(category._id)}>Remover</Button>

                        </Flex>
                      </Td>
                    </Tr>

                  )
                })}
              </Tbody>
            </Table>
          </CategoriasContainer>
        </Categorias>
        <AddCategoria>
          <AddHeader>
            <h3>Criar categoria</h3>
          </AddHeader>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <label htmlFor="name">Nome da Categoria</label>
              <Input id='name' type='text' value={name} onChange={nameHandler} required/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="description">Descrição</label>
              <Input id='description' type='text' value={description} onChange={descriptionHandler} />
            </InputGroup>
            <Button type='submit'>Criar</Button>
          </Form>
        </AddCategoria>
      </Content>
    </Container>
  )
}

export default Categories;