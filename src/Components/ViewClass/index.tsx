import React from 'react'
import { ClaassContext } from '../../contexts/claassContext'
import { useAxios } from '../../hooks/useAxios'
import Button from '../Button'
import Container from '../Container'
import Content from '../Content'
import Flex from '../Flex'
import Input from '../Input'
import InputBlock from '../InputBlock'
import Tab from '../Tab'
import TabsViewClass from '../TabsViewClass'

import { Form, Box, Modal, ModalContent, CloseModal, User, Disciplina } from './styles'
import { Link, useParams } from 'react-router-dom';
import { SubjectsContext } from '../../contexts/subjectsContext'
import { ClassRoomContext } from '../../contexts/classRoomContext'

const ViewClass = () => {
  const { data: dataSchools } = useAxios('schools')
  const { data: dataPerson } = useAxios('person')
  const { data: dataClass } = useAxios('claass')
  const { data: dataSubjects } = useAxios('subjects')
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
    openModal,
    setOpenModal,
    participants,
    participantsHandler,
    setName,
    setDescription,
    setSchool,
    setTime,
    setStatus,
    setParticipants,
    setId
  } = React.useContext(ClaassContext)
  const {
    handleEdit,
    handleDelete,
    setOpenModal: setOpenModalSubjects,
    setClassIndex
  } = React.useContext(SubjectsContext)
  const { OpenModal } = React.useContext(ClassRoomContext)
  let { id } = useParams()

  React.useEffect(() => {
    setName(dataClass?.claass[`${id}`].name)
    setDescription(dataClass?.claass[`${id}`].description)
    setSchool(dataClass?.claass[`${id}`].school)
    setTime(dataClass?.claass[`${id}`].time)
    setStatus(dataClass?.claass[`${id}`].status)
    setParticipants(dataClass?.claass[`${id}`].participants)
    setId(dataClass?.claass[`${id}`]._id)
    setClassIndex(id)

  }, [dataClass?.claass, id, setDescription, setName, setParticipants, setSchool, setStatus, setTime, setId, setClassIndex])
  return (
    <Container>
      <Content>
        <br />
        <Form onSubmit={handleSubmit}>
          <InputBlock>
            <label htmlFor='scoolName'>Nome da turma</label>
            <Input type='text' id='scoolName' value={name} onChange={nameHandler} />
          </InputBlock>
          <InputBlock>
            <label>Escola</label>
            <select title='schools' value={school} onChange={schoolHandler}>
              <option value=""></option>
              {dataSchools?.schools.map((schools: any, index: number) => {
                return (
                  <option key={index} value={schools.name} >{schools.name}</option>
                )
              })}
            </select>
          </InputBlock>
          <InputBlock>
            <label>Horário</label>
            <select title='hours' value={time} onChange={timeHandler}>
              <option value="" ></option>
              <option value="Não definido" >Não definido</option>
              <option value="Manhã" >Manhã</option>
              <option value="Tarde" >Tarde</option>
              <option value="Noite">Noite</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Status</label>
            <select title='status' value={status} onChange={statusHandler}>
              <option value=""></option>
              <option value="Preparando turma">Preparando turma</option>
              <option value="Em andamento" >Em andamento</option>
              <option value="Pausada" >Pausada</option>
              <option value="Finalizada">Finalizada</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label htmlFor="description">Descrição</label>
            <textarea title='textarea' name="" id="description" cols={30} rows={10} value={description} onChange={descriptionHandler}></textarea>
          </InputBlock>
          <Button type='submit'>Salvar</Button>
        </Form>
        {openModal ?
          <>
            <Modal onSubmit={handleSubmit}>
              <ModalContent>

                <Button type='button' onClick={() => setOpenModal(false)}>Close</Button>
                <br />
                <br />
                {dataPerson?.person.map((person: any, index: number) => {
                  return (
                    <Flex key={index}>
                      <Input type='checkbox' id={person.name} name={person.name} value={index} checked={participants.includes(`${index}`) ? true : false} onChange={participantsHandler} />
                      <label htmlFor={person.name}>{person.name}</label>
                    </Flex>
                  )
                })}
                <Button type='submit'>Adicionar</Button>
              </ModalContent>
            </Modal>
            <CloseModal type='button' onClick={() => setOpenModal(false)}></CloseModal>
          </>
          : null}
        <Box>
          <TabsViewClass>
            <Tab title='Alunos'>
              <Box>
                <Button className='buttonadd' type='button' onClick={() => setOpenModal(true)}>+ Adicionar/Remover Aluno</Button>
                <br />
                <InputBlock>
                  {dataClass?.claass[`${id}`].participants.map((participant: any, index: number) => {

                    return (
                      <User key={index}>
                        <img src={dataPerson?.person[participant].image ? dataPerson?.person[participant].image : 'https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-uma-pessoa-com-oculos-de-sol_23-2149436188.jpg?w=740&t=st=1668802478~exp=1668803078~hmac=58cc3851b15b54d4cf8ceda77ebf6bb89cde07fe2b3e6906b60b673a20018edf'} alt="" />
                        <Link to={`/persons/details/${participant}`}><h3>{dataPerson?.person[participant].name}</h3></Link>
                      </User>
                    )
                  })}
                </InputBlock>
              </Box>
            </Tab>
            <Tab title='Disciplinas'>
              <Box>
                <Button className='buttonadd' type='button' onClick={() => setOpenModalSubjects(true)}>+ Adicionar Disciplina</Button>
                <br />
                <br />
                {dataSubjects?.subjects.map((subjects: any, index: number) => {
                  return `${subjects.classIndex}` === id ?
                    <Disciplina key={index}>
                      <h2>{subjects.name}</h2>
                      <h4>Professor(a):</h4>
                      <p>{subjects.teacher}</p>
                      <Flex>
                        <Button type='button' onClick={() => handleDelete(subjects._id)}>Deletar</Button>
                        <Button type='button' onClick={() => handleEdit(subjects._id, subjects.name, subjects.teacher, subjects.classInddex)}>Editar</Button>
                      </Flex>
                    </Disciplina>
                    : null
                })}
              </Box>
            </Tab>
            <Tab title='Aulas'>
              <Box>
                <Button className='buttonadd' type='button' onClick={() => OpenModal(id)}>+ Adicionar Aula</Button>
              </Box>
            </Tab>
            <Tab title='Arquivos'>
              <Box>
                <Button className='buttonadd' type='button'>+ Adicionar</Button>
              </Box>
            </Tab>
            <Tab title='Relatórios'>

            </Tab>
          </TabsViewClass>
        </Box>
      </Content>
    </Container>
  )
}

export default ViewClass;