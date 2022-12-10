import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import EditRemove from "../EditRemove";
import Flex from "../Flex";
import Input from "../Input";
import InputBlock from "../InputBlock";
import Table from "../Table";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import Tr from "../Tr";

import { Block, BlockHeader, BlockContent, Aside, AsideHeader, AsideContent } from './styles';
import React from 'react';
import { FinancialCategoryContext } from "../../contexts/financialCategoryContext";
import { useAxios } from "../../hooks/useAxios";

const FinancialCategories = () => {
  const {
    name,
    description,
    type,
    typeHandler,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleEdit,
    handleDelete } = React.useContext(FinancialCategoryContext)
  const { data } = useAxios('financialcategory')
  return (
    <Container>
      <h3>Categorias</h3>
      <Content>
        <Box width='100%'>
          <BoxHeader title="Resultados: 2" />
          <BoxContent>
            <p>Gerencie todas as categorias de transações financeiras.</p>
            <Content>
              <Block>
                <BlockHeader>
                  <h3>Receitas ({data?.financialCategory.map((category:any)=>category.type==='Receita'?category.name : null).length})</h3>
                </BlockHeader>
                <BlockContent>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>Nome da categoria</Th>
                        <Th>Descrição</Th>
                        <Th>Ações</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data?.financialCategory.map((categories: any, index: number) => {
                        return categories.type === 'Receita' ?
                          <Tr key={index}>
                            <Td>{categories.name}</Td>
                            <Td>{categories.description}</Td>
                            <Td>
                              <Flex>
                                <Button type='button' onClick={() => handleEdit(categories._id, categories.name, categories.description, categories.type)}>Editar</Button>
                                <Button type='button' onClick={() => handleDelete(categories._id)}>Apagar</Button>
                              </Flex>
                            </Td>
                          </Tr>

                          : null
                      })}
                    </Tbody>
                  </Table>
                </BlockContent>
              </Block>
              <Block>
                <BlockHeader className='red'>
                  <h3>Despesas ({data?.financialCategory.map((category: any) => category.type === 'Despesa' ? category.name : null).length})</h3>
                </BlockHeader>
                <BlockContent>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>Nome da categoria</Th>
                        <Th>Descrição</Th>
                        <Th>Ações</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data?.financialCategory.map((categories: any, index: number) => {
                        return categories.type === 'Despesa' ?
                          <Tr key={index}>
                            <Td>{categories.name}</Td>
                            <Td>{categories.description}</Td>
                            <Td>
                              <Flex>
                                <Button type='button' onClick={() => handleEdit(categories._id, categories.name, categories.description, categories.type)}>Editar</Button>
                                <Button type='button' onClick={() => handleDelete(categories._id)}>Apagar</Button>
                              </Flex>
                            </Td>
                          </Tr>

                          : null
                      })}
                    </Tbody>
                  </Table>
                </BlockContent>
              </Block>
            </Content>
          </BoxContent>
        </Box>
        <Aside onSubmit={handleSubmit}>
          <AsideHeader>
            <h3>+ Criar categoria</h3>
          </AsideHeader>
          <AsideContent>
            <InputBlock>
              <label htmlFor="name">Nome da categoria</label>
              <Input type='text' value={name} onChange={nameHandler} required/>
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Descrição</label>
              <textarea title='area' name="" id="" value={description} onChange={descriptionHandler} ></textarea>
            </InputBlock>
            <InputBlock>
              <label htmlFor="type">Tipo</label>
              <Flex>
                <Flex>
                  <Input id='revenues' type='radio' name='tipo' value='Receita' onChange={typeHandler} />
                  <label htmlFor="revenues"> <p>Receitas</p> </label>
                </Flex>
                <Flex>
                  <Input id='expenses' type='radio' name='tipo' value='Despesa' onChange={typeHandler} />
                  <label htmlFor="expenses"> <p>Despesas</p> </label>
                </Flex>
              </Flex>
            </InputBlock>
            <Button type='submit'>Criar</Button>
          </AsideContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default FinancialCategories;