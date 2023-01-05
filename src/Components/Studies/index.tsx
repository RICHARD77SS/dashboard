import React from "react"
import Box from "../Box"
import BoxContent from "../BoxContent"
import BoxHeader from "../BoxHeader"
import Button from "../Button"
import Container from "../Container"
import Flex from "../Flex"
import PageSelector from "../PageSelector"
import Table from "../Table"
import Tbody from "../Tbody"
import Td from "../Td"
import Th from "../Th"
import Thead from "../Thead"
import TopTableOptions from "../TopTableOptions"
import Tr from "../Tr"

import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { Link } from "react-router-dom"
import { StudiesContext } from "../../contexts/studiesContext"



const Studies = () => {
  const { handleDelete, handleEdit, handleClear, items, requestSort } = React.useContext(StudiesContext);

  return (
    <Container>
      <h3>Estudos</h3>
      <Box width='100%'>
        <BoxHeader title={`Resultados: 0`}>
          <Link to='/addstudies'><Button onClick={() => handleClear()}>+ Adicionar estudos</Button></Link>
        </BoxHeader>
        <BoxContent>
          <TopTableOptions />
          <Table>
            <Thead>
              <Tr>
                <Th>
                  <Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button onClick={() => requestSort('category')}>Categoria <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button onClick={() => requestSort('date')}>Criado em  <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Ações</Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((estudo: any, index: number) => {
                return (

                  <Tr key={index}>
                    <Td>
                      <Link to={`/addstudies/${index}`}>{estudo.name}</Link>
                    </Td>
                    <Td>
                      <Link to={`/addstudies/${index}`}> {estudo.category}</Link>
                    </Td>
                    <Td>
                      <Link to={`/addstudies/${index}`}> {estudo.date?.split('T')[0]}</Link>
                    </Td>
                    <Td>
                      <Flex>
                        <Link to={`/addstudies/${index}`}>
                          <Button className='edit' type='button' onClick={() => handleEdit(
                            estudo._id,
                            estudo.name,
                            estudo.category,
                            estudo.content,
                            estudo.image,
                            estudo.file,
                            estudo.notification
                          )}>Editar</Button></Link>
                        <Button type='button' onClick={() => handleDelete(estudo._id)}>Deletar</Button>
                      </Flex>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
          <PageSelector />
        </BoxContent>
      </Box>
    </Container>
  )
}

export default Studies;