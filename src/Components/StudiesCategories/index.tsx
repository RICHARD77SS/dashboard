import React from 'react';
import { StudiesCategoryContext } from '../../contexts/studiesCategoryContext';
import { useAxios } from '../../hooks/useAxios';
import Aside from '../Aside';
import Box from '../Box';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container';
import EditRemove from '../EditRemove';
import Flex from '../Flex';
import Input from '../Input';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Content, InputBox, Form } from './styles';

const StudiesCategories = () => {
  const { name, description, nameHandler, descriptionHandler, handleSubmit, handleDelete, handleEdit } = React.useContext(StudiesCategoryContext)
  const { data } = useAxios('studiescategory')
  return (
    <Container>
      <h3>Categorias de estudo</h3>
      <Content>
        <Box>
          <BoxHeader title={`Resultados: 0`}>

          </BoxHeader>
          <BoxContent>
            <p>Gerencie as caregorias de estudos.</p>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.studiesCategory.map((category: any, index: number) => {
                  return (
                    <Tr key={index}>
                      <Td>{category.name}</Td>
                      <Td>
                        <Flex>
                          <Button
                            type='button'
                            onClick={() => handleEdit(
                              category._id,
                              category.name,
                              category.description
                            )}>Edit</Button>
                          <Button
                            type='button'
                            onClick={() => handleDelete(category._id)}>Delete</Button>
                        </Flex>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </BoxContent>
        </Box>
        <Form onSubmit={handleSubmit}>
          <BoxContent>
            <BoxHeader title='+ Criar Categoria' />
            <InputBox>
              <label htmlFor='categorieName'>Nome da categoria</label>
              <Input type='text' id='categorieName' value={name} onChange={nameHandler} />
            </InputBox>
            <InputBox>
              <label htmlFor="description">Descrição</label>
              <textarea title='textarea' name="" id="description" cols={30} rows={10} value={description} onChange={descriptionHandler}></textarea>
            </InputBox>
            <Button type='submit'>Criar</Button>
          </BoxContent>
        </Form>
      </Content>
    </Container>
  )
}

export default StudiesCategories;