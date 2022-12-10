
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
import { AccountContext } from "../../contexts/accountContext";
import { useAxios } from "../../hooks/useAxios";
import Flex from "../Flex";

const FinancialAccount = () => {
  const {
    name,
    description,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleEdit,
    handleDelete } = React.useContext(AccountContext)
  const { data } = useAxios('account')
  return (
    <Container>
      <h3>Contas</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 2" />
          <BoxContent>
            <p>Cadastre suas contas bancárias ou caixas.</p>
            <Content>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Nome da categoria</Th>
                    <Th>Descrição</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.account.map((account: any, index: number) => {
                    return (

                      <Tr key={index}>
                        <Td>{account.name}</Td>
                        <Td>{account.description}</Td>
                        <Td>
                          <Flex>
                            <Button type='button' onClick={() => handleEdit(account._id, account.name, account.description)}>Editar</Button>
                            <Button type='button' onClick={() => handleDelete(account._id)}>Deletar</Button>
                          </Flex>
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
          <BoxHeader title="+ Criar conta" />
          <AsideContent>
            <InputBlock>
              <label htmlFor="name">Nome da conta</label>
              <Input type='text' value={name} onChange={nameHandler} required />
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Descrição</label>
              <textarea title='area' name="" id="" value={description} onChange={descriptionHandler}></textarea>
            </InputBlock>
            <Button type='submit'>Criar</Button>
          </AsideContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default FinancialAccount;