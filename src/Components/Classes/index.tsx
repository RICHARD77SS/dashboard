import React from 'react'
import Box from '../Box';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container';
import EditRemove from '../EditRemove';
import Input from '../Input';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Content, InputBox, Form } from './styles';
import { ClaassContext } from '../../contexts/claassContext';
import Flex from '../Flex';
import { useAxios } from '../../hooks/useAxios';

const Classes = () => {
  const {
    name,
    school,
    time,
    status,
    description,
    nameHandler,
    schoolHandler,
    timeHandler,
    statusHandler,
    descriptionHandler,
    handleSubmit,
    handleEdit,
    handleDelete,
  } = React.useContext(ClaassContext)
  const { data: dataClaass } = useAxios('claass')
  const { data: dataSchools } = useAxios('schools')
  console.log(school)
  return (
    <Container>
      <h3>Turmas</h3>
      <Content>
        <Box>
          <BoxHeader title={`Resultados: 0`}>

          </BoxHeader>
          <BoxContent>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Horário</Th>
                  <Th>Escola</Th>
                  <Th>Status</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataClaass?.claass.map((claass: any, index: number) => {
                  return (

                    <Tr key={index}>
                      <Td>{claass.name}</Td>
                      <Td>{claass.time}</Td>
                      <Td>{claass.school}</Td>
                      <Td>{claass.status}</Td>
                      <Td>
                        <Flex>
                          <Button type='button' onClick={() => handleEdit(claass._id, claass.name, claass.school, claass.time, claass.status, claass.description)}>Edit</Button>
                          <Button type='button' onClick={() => handleDelete(claass._id)}>Remove</Button>
                        </Flex>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </BoxContent>
        </Box>
        <Form onSubmit={handleSubmit}>
          <BoxHeader title='+ Criar turma' />
          <BoxContent width='100%'>
            <InputBox>
              <label htmlFor='scoolName'>Nome da turma</label>
              <Input type='text' id='scoolName' value={name} onChange={nameHandler} />
            </InputBox>
            <InputBox>
              <label>Escola</label>
              <select id='schools' value={school} onChange={schoolHandler}>
                <option value=""></option>
                {dataSchools?.schools.map((schools: any, index: number) => {
                  return (
                    <option key={index} value={schools.name} >{schools.name}</option>
                  )
                })}
              </select>
            </InputBox>
            <InputBox>
              <label>Horário</label>
              <select id='hours' value={time} onChange={timeHandler}>
                <option value="" ></option>
                <option value="Não definido" >Não definido</option>
                <option value="Manhã" >Manhã</option>
                <option value="Tarde" >Tarde</option>
                <option value="Noite">Noite</option>
              </select>
            </InputBox>
            <InputBox>
              <label>Status</label>
              <select id='status' value={status} onChange={statusHandler}>
                <option value=""></option>
                <option value="Preparando turma">Preparando turma</option>
                <option value="Em andamento" >Em andamento</option>
                <option value="Pausada" >Pausada</option>
                <option value="Finalizada">Finalizada</option>
              </select>
            </InputBox>
            <InputBox>
              <label htmlFor="description">Descrição</label>
              <textarea title='textarea' name="" id="description" cols={30} rows={10} value={description} onChange={descriptionHandler}></textarea>
            </InputBox>
            <Button type='submit'>Criar</Button>
          </BoxContent>
        </Form>
      </Content>
    </Container>
  )
}

export default Classes;
<h3>Turmas</h3>