import Box from "../Box"
import BoxContent from "../BoxContent"
import BoxHeader from "../BoxHeader"
import Button from "../Button"
import Container from "../Container"
import Table from "../Table"
import Tbody from "../Tbody"
import Td from "../Td"
import Th from "../Th"
import Thead from "../Thead"
import TopTableOptions from "../TopTableOptions"
import Tr from "../Tr"
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import PageSelector from "../PageSelector"
import { Link } from "react-router-dom"
import { useAxios } from "../../hooks/useAxios"
import Flex from "../Flex"
import React from "react"
import { StudiesContext } from "../../contexts/studiesContext"


const Studies = () => {
  const { data } = useAxios('studies');
  const { handleDelete, handleEdit, handleClear } = React.useContext(StudiesContext);
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
                  <Flex>Nome <p><BsArrowUp /><BsArrowDown /></p></Flex>
                </Th>
                <Th>
                  <Flex>Categoria <p><BsArrowUp /><BsArrowDown /></p></Flex>
                </Th>
                <Th>
                  <Flex>Criado em  <p><BsArrowUp /><BsArrowDown /></p></Flex>
                </Th>
                <Th>
                  <Flex>Ações <p><BsArrowUp /><BsArrowDown /></p></Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.studies.map((estudo: any, index: number) => {
                return (
                  <Tr key={index}>
                    <Td>
                      {estudo.name}
                    </Td>
                    <Td>
                      {estudo.category}
                    </Td>
                    <Td>
                      {estudo.date?.split('T')[0]}
                    </Td>
                    <Td>
                      <Flex>
                        <Link to={`/addstudies/${index}`}><Button type='button' onClick={() => handleEdit(
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