import { CustCenterContext } from "../../contexts/custCenterContext";
import { useAxios } from "../../hooks/useAxios";
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
import { Aside, AsideHeader, AsideContent } from './styles';
import Flex from "../Flex";

const FinancialCostCenter = () => {
  const {
    name,
    description,
    type,
    typeHandler,
    nameHandler,
    descriptionHandler,
    handleSubmit,
    handleEdit,
    handleDelete } = React.useContext(CustCenterContext)
  const { data } = useAxios('custcenter')
  return (
    <Container>
      <h3>Centro de custos</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 2" />
          <BoxContent>
            <p>Gerencie os centros de custos da sua instituição.</p>
            <Content>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Nome </Th>
                    <Th>Descrição</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.custCenter.map((center: any, index: number) => {
                    return (
                      <Tr>
                        <Td>{center.name} </Td>
                        <Td>{center.description}</Td>
                        <Td>
                          <Flex>
                            <Button type='button' onClick={() => handleEdit(center._id, center.name, center.description)}>Editar</Button>
                            <Button type='button' onClick={() => handleDelete(center._id)}>Deletar</Button>
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
              <Input type='text' value={name} onChange={nameHandler} />
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

export default FinancialCostCenter;