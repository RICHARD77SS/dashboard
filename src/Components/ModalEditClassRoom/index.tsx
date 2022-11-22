import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useAxios } from '../../hooks/useAxios';
import InputBlock from '../InputBlock';
import { ClassRoomContext } from '../../contexts/classRoomContext';
import Flex from '../Flex';

const ModalEditClassRoom = () => {
  const { data: dataSchools } = useAxios('schools')
  const {
    disciplineHandler,
    participantsHandler,
    topicHandler,
    notesHandler,
    remarksHandler,
    discipline,
    participants,
    topic,
    notes,
    remarks,
    handleSubmit,
    handleEdit,
    handleDelete,
    openModal,
    setOpenModal,
    setParticipants,
    id,
    CloseModal,
    date,
    dateHandler
  } = React.useContext(ClassRoomContext)
  const { data: dataPerson } = useAxios('person')
  const { data: dataSubjects } = useAxios('subjects')
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <Flex>
            <InputBlock>
              <label htmlFor='data'>Data</label>
              <Input type='date' id='data' value={date} onChange={dateHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor='discipline'>Disciplina</label>
              <select title='text' id='discipline' value={discipline} onChange={disciplineHandler} >
                <option value=''></option>
                {dataSubjects?.subjects.map((subjects: any, index: number) => {
                  return (
                    <option value=''></option>
                    
                  )
                })}
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor='topic'>Assunto</label>
              <Input type='text' id='topic' value={topic} onChange={topicHandler} />
            </InputBlock>
          </Flex>
          <InputBlock>
            <label htmlFor="remarkers">Observações</label>
            <textarea title="rem" id="" value={remarks} onChange={remarksHandler}></textarea>
          </InputBlock>
          <InputBlock>
            <label htmlFor="remarkers">Participantes</label>
            {dataPerson?.person.map((person: any, index: number) => {
              return (
                <InputBlock>
                  <label htmlFor={person.name}>{person.name}</label>
                  <Input type='checkbox' id={person.name} name={person.name} value={person.name} onClick={participantsHandler} />
                </InputBlock>
              )
            })}
          </InputBlock>
          <InputBlock>
            <label htmlFor="remarkers">Anotações</label>
            <textarea title="rem" id="" value={notes} onChange={notesHandler}></textarea>
          </InputBlock>
          <Button type='submit'>Salvar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default ModalEditClassRoom;