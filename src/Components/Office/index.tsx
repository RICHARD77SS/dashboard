import React from 'react';
import Button from '../Button';
import Input from '../Input';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import Flex from '../Flex';
import { Container, Content, Offices, OfficeHeader, OfficeContainer, Form, AddHeader, AddContainer, InputGroup } from './styles';

import { PositionsContext } from '../../contexts/positionsContexts'
import { useAxios } from '../../hooks/useAxios'

const Office = () => {
  const { data } = useAxios('positions')
  const { name, nameHandler, handleSubmit, handleEdit, handleDelete } = React.useContext(PositionsContext);

  return (
    <Container>
      <Content>
        <Offices>
          <OfficeHeader>
            <h3>Resultados: {data?.positions.length}</h3>
          </OfficeHeader>
          <OfficeContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Pessoas</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.positions?.map((positions: any, index: any) => {
                  return (
                    <Tr key={index}>
                      <Td>{positions.name}</Td>
                      <Td>type here</Td>
                      <Td>
                        <Flex>
                          <Button type='button' onClick={() => handleEdit(positions._id, positions.name)}>Editar</Button>
                          <Button type='button' onClick={() => handleDelete(positions._id)}>Remover</Button>
                        </Flex>
                      </Td>
                    </Tr>
                  )
                })}

              </Tbody>
            </Table>
          </OfficeContainer>
        </Offices>
        <Form onSubmit={handleSubmit}>
          <AddHeader>
            <h3>Criar cargo</h3>
          </AddHeader>
          <AddContainer>
            <InputGroup>
              <label htmlFor="name">Nome do cargo</label>
              <Input id='name' type='text' value={name} onChange={nameHandler} />
            </InputGroup>
            <Button type='submit'>Criar</Button>
          </AddContainer>
        </Form>
      </Content>
    </Container>
  )
}

export default Office;