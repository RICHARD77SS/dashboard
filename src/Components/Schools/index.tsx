import React from 'react';
import { SchoolsContext } from '../../contexts/schoolsContext';
import { useAxios } from '../../hooks/useAxios';
import Box from '../Box';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container';
import EditRemove from '../EditRemove';
import Flex from '../Flex';
import Input from '../Input';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Content, InputBox, Aside, List } from './styles';

const Schools = () => {
  const { data: dataSchools } = useAxios('schools')
  const { data: dataPerson } = useAxios('person')
  const { name,
    description,
    nameHandler,
    descriptionHandler,
    managersHandler,
    handleSubmit,
    handleDelete,
    handleEdit,
  } = React.useContext(SchoolsContext)
  let schools = dataSchools?.schools.length
  return (
    <Container>
      <h3>Escolas</h3>
      <Content>
        <Box>
          <BoxHeader title={`Resultados: ${schools}`}>

          </BoxHeader>
          <BoxContent width='100%'>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataSchools?.schools.map((schools: any, index: number) => {
                  return (
                    <Tr key={index}>
                      <Td>{schools.name}</Td>
                      <Td>
                        <Flex>
                          <Button onClick={() => handleEdit(schools._id, schools.name, schools.description, schools.managers)}>Editar</Button>
                          <Button onClick={() => handleDelete(schools._id)}>Apagar</Button>
                        </Flex>
                      </Td>
                    </Tr>

                  )
                })}
              </Tbody>
            </Table>
          </BoxContent>
        </Box>
        <Aside onSubmit={handleSubmit}>
          <BoxHeader title='+ Criar escola' />
          <BoxContent width='100%'>
            <InputBox>
              <label htmlFor='scoolName'>Nome da escola</label>
              <Input type='text' id='scoolName' value={name} onChange={nameHandler} />
            </InputBox>
            <List>
              <h3>Gestores</h3>
              <br />
              {dataPerson?.person.map((person: any, index: number) => {
                return (
                  <Flex key={index}>
                    <label htmlFor={person.name}>{person.name}</label>
                    <Input id={person.name} type='checkbox' value={person.name} onChange={managersHandler} />
                  </Flex>
                )
              })}
            </List>
            <InputBox>
              <label htmlFor="description">Descrição</label>
              <textarea
                title='textarea'
                name=""
                id="description"
                cols={30}
                rows={10}
                value={description}
                onChange={descriptionHandler}
              ></textarea>
            </InputBox>
            <Button>Criar</Button>
          </BoxContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default Schools;