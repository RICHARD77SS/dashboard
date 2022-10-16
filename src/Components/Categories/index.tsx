import React from 'react'
import Button from '../Button';
import Input from '../Input';
import { Container, Content, Categorias, CategoriaHeader, CategoriasContainer, AddCategoria, AddHeader, Form, InputGroup } from './styles';
import { CategoryContext } from '../../contexts/category';
import { useAxios } from '../../hooks/useAxios';
import Table from '../Table';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';
import CategoriesEdit from '../CategoriesEdit';
import Flex from '../Flex';
const Categories = () => {
  const { categoryName,
    categoryNameHandler,
    categoryDescription,
    categoryDescriptionHandler,
    handleSubmit,
    openModal,
    handleEditt,
    handleDelete
  } = React.useContext(CategoryContext)
  const { data } = useAxios('category')
  console.log(data)
  return (
    <Container>
      <Content>
        <Categorias>
          <CategoriaHeader>
            <h3>Resultados: 0</h3>
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
                      <Td>{category.categoryName}</Td>
                      <Td>{category.categoryDescription}</Td>
                      <Td></Td>
                      <Td>
                        <Flex>
                          <Button onClick={() => handleEditt(category._id, category.categoryName, category.categoryDescription)}>Editar</Button>
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
              <Input id='name' type='text' value={categoryName} onChange={categoryNameHandler} />
            </InputGroup>
            <InputGroup>
              <label htmlFor="description">Descrição</label>
              <Input id='description' type='text' value={categoryDescription} onChange={categoryDescriptionHandler} />
            </InputGroup>
            <Button type='submit'>Criar</Button>
          </Form>
        </AddCategoria>
      </Content>
    </Container>
  )
}

export default Categories;