import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MeetingsContext } from '../../contexts/meetingsContext';
import { useAxios } from '../../hooks/useAxios';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import InputBlock from '../InputBlock';

import { Container, ModalContent, Form, CloseModal, List } from './styles'



const AddMeetings = () => {
  const {
    date,
    subject,
    value,
    participants,
    visitors,
    notes,
    dateHandler,
    subjectHandler,
    valueHandler,
    participantsHandler,
    visitorsHandler,
    notesHandler,
    handleSubmit,
    handleDelete,
    setModalOpen,
    id
  } = React.useContext(MeetingsContext)
  const { data } = useAxios('person')
  const { data: datameetings } = useAxios('meetings')
  return (
    <Container>
      <ModalContent>
        <Flex>
          <h3>Adicionar Reunião</h3>
          <Button onClick={() => setModalOpen(false)}><AiFillCloseCircle size='20' /></Button>
          {id ? <Button onClick={() => handleDelete(id)}>Apagar Reunião</Button> : null}

        </Flex>

        <Form onSubmit={handleSubmit}>
          <Flex>
            <InputBlock>
              <label htmlFor=''>Data da reunião</label>
              <Input id='' type='date' value={date} onChange={dateHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor=''>Assunto</label>
              <Input id='' type='text' value={subject} onChange={subjectHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor=''>Valor total</label>
              <Input id='' type='number' value={value} onChange={valueHandler} />
            </InputBlock>
          </Flex>
          <br />
          <Flex>
            <List>
              <label htmlFor=''>Lista de presença</label>
              <br />
              <InputBlock>
                {id ?
                  <InputBlock>
                    <h3>Remover</h3>
                    {datameetings?.meetings[0].participants.map((meeting: any, index: number) => {
                      console.log(meeting)
                      return (
                        <Flex key={index}>
                          <Input type='checkbox' value={meeting} onChange={participantsHandler} />
                          <label >{meeting}</label>
                        </Flex>
                      )
                    })}
                    <h3>Adicionar</h3>
                    {data?.person.map((person: any, index: number) => {

                      return (
                        <Flex key={index}>
                          <Input id={person.name} type='checkbox' value={person.name} onChange={participantsHandler} />
                          <label htmlFor={person.name}>{person.name}</label>
                        </Flex>
                      )
                    })}
                  </InputBlock>

                  :
                  <InputBlock>
                    {data?.person.map((person: any, index: number) => {

                      return (
                        <Flex key={index}>
                          <Input id={person.name} type='checkbox' value={person.name} onChange={participantsHandler} />
                          <label htmlFor={person.name}>{person.name}</label>
                        </Flex>
                      )
                    })}
                  </InputBlock>
                }
              </InputBlock>
            </List>
            <List>
              <label htmlFor=''>Visitantes(0)</label>
              <Input id='' type='text' value={visitors} onChange={visitorsHandler} />
              <Button>+Adicionar visitantes</Button>
            </List>
          </Flex>
          <br />
          <InputBlock>
            <label htmlFor='notes'>Anotações da reunião</label>
            <textarea id='notes' value={notes} onChange={notesHandler}>

            </textarea>
          </InputBlock>
          <Button type='submit'>Adicionar</Button>
        </Form>
      </ModalContent>
      <CloseModal onClick={() => setModalOpen(false)}>

      </CloseModal>
    </Container>
  )
}

export default AddMeetings;