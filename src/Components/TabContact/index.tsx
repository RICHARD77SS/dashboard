import Tabs from "../Tabs"
import Tab from "../Tab"
import Table from "../Table";
import Thead from "../Thead";
import Tr from "../Tr";
import Th from "../Th";
import Tbody from "../Tbody";
import Td from "../Td";

import { useAxios } from "../../hooks/useAxios";
import Flex from "../Flex";
import Button from "../Button";
import React from 'react'
import { ContactContext } from "../../contexts/contactContext";
import Input from "../Input";
import { Form,Box } from "./styles";
import { ContactCategoryContext } from "../../contexts/contactCategoryContext";

import TableContainer from "../TableContainer";
const TabContact = () => {
  const { handleEdit, handleDelete } = React.useContext(ContactContext)
  const { name, description, nameHandler, descriptionHandler, handleSubmit, handleEdit: Edit, handleDelete: Remove } = React.useContext(ContactCategoryContext)
  const { data: dataCategory } = useAxios('contactcategory')
  const { data } = useAxios('contact')


  return (
    <Tabs>
      <Tab title='Todos'>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>E-mail</Th>
                <Th>Telefone 1</Th>
                <Th>Telefone 2</Th>
                <Th>Categoria</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.contact.map((contact: any, index: number) => {
                return (
                  <Tr key={index}>
                    <Td>{contact.name}</Td>
                    <Td>{contact.email}</Td>
                    <Td>{contact.phone1}</Td>
                    <Td>{contact.phone2}</Td>
                    <Td>{contact.category}</Td>
                    <Td>
                      <Flex>
                        <Button type='button' onClick={() => handleEdit(contact._id, contact.name, contact.email, contact.category, contact.type, contact.phone1, contact.phone2, contact.anotations)}>Editar</Button>
                        <Button type='button' onClick={() => handleDelete(contact._id)}>Deletar</Button>
                      </Flex>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Tab>
      <Tab title='Criar categoria'>
        <Form onSubmit={handleSubmit}>
          <h3>Criar categoria de contato</h3>
          <Input type='text' value={name} onChange={nameHandler} />
          <Input type='text' value={description} onChange={descriptionHandler} />
          <Button type='submit'>Adicionar</Button>
        </Form>
        <br />
        <br />
        <Box>
          <h3>Categorias</h3>
          <br />
          <Table>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataCategory?.contactCategory.map((category: any, index: number) => {
                return (
                  <Tr key={index}>
                    <Td>{category.name}</Td>
                    <Td>
                      <Flex>
                        <Button type='button' onClick={() => Edit(category._id, category.name, category.description)}>Editar</Button>
                        <Button type='button' onClick={() => Remove(category._id)}>Remover</Button>
                      </Flex>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </Box>
      </Tab>
    </Tabs>
  )
}

export default TabContact;