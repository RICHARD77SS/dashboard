
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import EditRemove from "../EditRemove";
import Input from "../Input";
import InputBlock from "../InputBlock";
import Table from "../Table";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import Tr from "../Tr";
import React from 'react'
import { AsideContent, Aside } from './styles';
import { CategoryPatrimoniesContext } from '../../contexts/categoryPatrimoniesContext';
import { useAxios } from "../../hooks/useAxios";
import Flex from "../Flex";

const PatrimoniesCategories = () => {
  const {data} = useAxios('categorypatrimonies')
  const { name,
    description,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleDelete,
    handleEdit } = React.useContext(CategoryPatrimoniesContext)
  return (
    <Container>
      <h3>Categorias</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 7" />
          <BoxContent>
            <p>Gerencie as categorias de patrimônio.</p>
            <Content>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Nome da categoria</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.categoryPatrimonies.map((category: any, index: number) => {
                    return (
                      <Tr key={index}>
                        <Td>{category.name}</Td>
                        <Td>
                          {category.description !== 'fixed' ?
                            <Flex>
                              <Button type='button' onClick={() => handleEdit(category._id, category.name, category.description)}>Editar</Button>
                              <Button type='button' onClick={() => handleDelete(category._id)}>Apagar</Button>
                            </Flex>
                            :null}
                          
                        </Td>
                      </Tr>
                    )
                  })}
                  
                </Tbody>
              </Table>
            </Content>
          </BoxContent>
        </Box>
        <Aside onSubmit={handleSubmit}>
          <BoxHeader title="+ Criar Categoria" />
          <BoxContent width="100%">
            <AsideContent>
              <InputBlock>
                <label htmlFor="name">Nome da Categoria</label>
                <Input type='text' value={name} onChange={nameHandler} />
              </InputBlock>
              <InputBlock>
                <label htmlFor="description">Descrição</label>
                <textarea title='area' name="" id=""  value={description} onChange={descriptionHandler}></textarea>
              </InputBlock>
              <Button type='submit'>Criar</Button>
            </AsideContent>
          </BoxContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default PatrimoniesCategories;