import React from 'react'
import { AiFillLock, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GroupCategoryContext } from '../../contexts/groupCategoryContext';
import { useAxios } from '../../hooks/useAxios';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Container, Content, Categorias, CategoriaHeader, CategoriasContainer, AddCategoria, AddHeader, Form, InputGroup } from './styles';

const GroupCategorie = () => {
  const { data } = useAxios('groupCategory')
  const { data: dataGroup } = useAxios('groups')
  const { handleSubmit, handleEdit, handleDelete, nameHandler, descriptionHandler, name, description } = React.useContext(GroupCategoryContext)
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
                {data?.groupCategory.map((category: any, index: number) => {
                 
                  return (
                    <Tr key={index}>
                      <Td>{category.name}</Td>
                      <Td><Link to='/groups'><pre>Visualizar {dataGroup?.groups.map((group: any) => group.category).flat(1).filter((categoria: any) => categoria === category.name).length} grupos</pre></Link></Td>
                      <Td>
                        {category.description !== 'fixed' ?
                          <Flex>
                            <Button type='button' onClick={() => handleEdit(category._id, category.name, category.description)}>Editar</Button>
                            <Button type='button' onClick={() => handleDelete(category._id)}>Remover</Button>
                          </Flex>
                          :
                          <></>
                        }
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
            <h3><AiOutlinePlus />Criar categoria</h3>
          </AddHeader>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <label htmlFor="name">Nome da Categoria</label>
              <Input id='name' type='text' value={name} onChange={nameHandler} />
            </InputGroup>
            <InputGroup>
              <label htmlFor="description">Descrição</label>
              <Input id='description' type='text' value={description} onChange={descriptionHandler} />
            </InputGroup>
            <Button>Criar</Button>
          </Form >
        </AddCategoria>
      </Content>
    </Container>
  )
}

export default GroupCategorie
  ;