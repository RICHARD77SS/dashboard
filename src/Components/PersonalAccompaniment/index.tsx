import React from 'react'
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
import Input from "../Input"
import { InputBox, Progress, ProgressContent } from './styles'
import { useAxios } from "../../hooks/useAxios"
import Flex from "../Flex"
import { Link } from "react-router-dom"
import { OrientationContext } from "../../contexts/orientationContext"

const PersonalAccompaniment = () => {
  const { data: dataOrientation } = useAxios('orientation')
  const {

    handleEdit,
    handleDelete,
    OpenModalCreateOrientation
  } = React.useContext(OrientationContext)
  return (
    <Container>
      <h3>Acompanhamento Pessoal</h3>
      <Box>
        <BoxHeader title={`Resultados: 0`}>

          <Button type='button' onClick={() => OpenModalCreateOrientation()}>+ Criar Turma</Button>
        </BoxHeader>
        <BoxContent>
          <TopTableOptions />
          <InputBox>
            <label htmlFor="search">Pesquisar</label>
            <Input type='search' />
          </InputBox>
          <Table>
            <Thead>
              <Tr>
                <Th>
                  <Button>Título <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Líderes <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Pessoas  <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Progresso <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Status <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Ações <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataOrientation?.orientation.map((orientation: any, index: number) => {
                return (
                  <Tr>
                    <Td>
                      {orientation.className}
                    </Td>
                    <Td>
                      {orientation.lideres}
                    </Td>
                    <Td>
                      {orientation.people}
                    </Td>
                    <Td>
                      <Progress><ProgressContent></ProgressContent></Progress>
                    </Td>
                    <Td className={orientation.status === 'Concluido' ? 'green' : 'red'}>
                      <pre>
                        {orientation.status}
                      </pre>
                    </Td>
                    <Td>
                      <Flex>
                        <Link to={`/personalaccompaniment/vieworientation/${index}`}>
                          <Button onClick={() => handleEdit(orientation._id, orientation.className, orientation.people, orientation.status, orientation.lideres, orientation.anotations, orientation.meetings)}>Editar</Button>
                        </Link>

                        <Button onClick={() => handleDelete(orientation._id)}>Remove</Button>
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
    </Container >
  )
}

export default PersonalAccompaniment;