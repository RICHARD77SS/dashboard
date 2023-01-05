import Button from '../Button';
import Input from '../Input';
import { useAxios } from '../../hooks/useAxios';
import React from 'react'
import { Center, Options } from './styles';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Table from '../Table';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';
import TabsBirthday from '../TabsBirthday/index';
import Tab from '../Tab';
import PageSelector from './../PageSelector/index';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Box from '../Box';
import { PersonContext } from '../../contexts/personContext';
import Container from '../Container';


const Birthday = () => {
  const { data } = useAxios('person')
  let janeiro = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 1 ? data.getMonth() + 1 : null
  })
  let jan = janeiro?.filter((i: number) => i === 2).length

  let fevereiro = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 2 ? data.getMonth() + 1 : null
  })
  let fev = fevereiro?.filter((i: number) => i === 2).length

  let marco = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 3 ? data.getMonth() + 1 : null
  })
  let mar = marco?.filter((i: number) => i === 3).length

  let abril = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 4 ? data.getMonth() + 1 : null
  })
  let abr = abril?.filter((i: number) => i === 4).length

  let maio = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 5 ? data.getMonth() + 1 : null
  })
  let mai = maio?.filter((i: number) => i === 5).length

  let junho = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 6 ? data.getMonth() + 1 : null
  })
  let jun = junho?.filter((i: number) => i === 6).length

  let julho = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 7 ? data.getMonth() + 1 : null
  })
  let jul = julho?.filter((i: number) => i === 7).length

  let agosto = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 8 ? data.getMonth() + 1 : null
  })
  let ago = agosto?.filter((i: number) => i === 8).length

  let setembro = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 9 ? data.getMonth() + 1 : null
  })
  let set = setembro?.filter((i: number) => i === 9).length

  let outubro = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 10 ? data.getMonth() + 1 : null
  })
  let out = outubro?.filter((i: number) => i === 10).length

  let novembro = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 11 ? data.getMonth() + 1 : null
  })
  let nov = novembro?.filter((i: number) => i === 11).length

  let dezembro = data?.person.map((person: any, index: number) => {
    const data = new Date(person.birth)
    return data.getMonth() + 1 === 12 ? data.getMonth() + 1 : null
  })
  let dez = dezembro?.filter((i: number) => i === 12).length

  const { items, requestSort, previousItem, nextItem, handleResults, resultsPage, currentPages, initialItem, finalItem } = React.useContext(PersonContext);
  console.log(initialItem, finalItem)
  return (
    <Container>
      <br />
      <br />
      <h3>Aniversários</h3>
      <p>Pessoas &gt; Aniversários</p>
      <br />
      <Box>
        <BoxHeader title='Selecione um mês'>
        </BoxHeader>
        <BoxContent>
          <Center>
            <Options>
              <Input type='number' step='20' min='20' max='400' value={resultsPage} onChange={(event) => handleResults(event)} />
              <p>Resultados por página</p>
            </Options>
          </Center>
          <TabsBirthday>
            <Tab title={`Jan (${jan})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody >

                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 1) {

                      return (
                        <Tr key={index}>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Fev (${fev})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 2) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Mar (${mar})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 3) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Abr (${abr})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 4) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Mai (${mai})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 5) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }
                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Jun (${jun})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 6) {
                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }
                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Jul (${jul})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 7) {
                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }
                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Ago (${ago})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 8) {
                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }
                    return (<></>)
                  }).slice(initialItem, finalItem)}

                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Set (${set})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 9) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Out (${out})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 10) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Nov (${nov})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 11) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Dez (${dez})`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => requestSort('birth')}>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th>Imagem </Th>
                    <Th><Button onClick={() => requestSort('name')}>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items?.map((person: any, index: number) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 12) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  }).slice(initialItem, finalItem)}
                </Tbody>
              </Table>
            </Tab>
          </TabsBirthday>

          <PageSelector previus={() => { previousItem() }} next={() => { nextItem() }}>{currentPages}</PageSelector>
        </BoxContent>
      </Box>
    </Container>
  )
}

export default Birthday;